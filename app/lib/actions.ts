'use server'
// import { z } from 'zod'
import { openai, supabase } from '@/app/lib/config'
import type { AIRecommendation, InputState } from './types'

// const FormSchema = z.object({
//   favorite: z.string(),
//   mood: z.string(),
//   funOrSerious: z.string(),
// })

export async function handleQuestionaire(
  state: InputState
): Promise<AIRecommendation> {
  const { favorite, mood, funOrSerious } = state
  // const data = FormSchema.parse(Object.fromEntries(formData.entries()))
  // const { favorite, mood, funOrSerious } = FormSchema.parse({
  //   favorite: formData.get('favorite'),
  //   mood: formData.get('mood'),
  //   funOrSerious: formData.get('funOrSerious'),
  // })

  // combine the responses into one string
  const query = favorite + ' ' + mood + ' ' + funOrSerious
  // const query = 'I enjoy a good science fiction movie'

  // turn the string into an embedding
  const queryEmbedding = await createEmbedding(query)

  // use the embedding to search the supabase vector db to get a movie recommendation
  const { data } = await supabase.rpc('search_movies', {
    query_embedding: queryEmbedding,
    match_threshold: 0.5,
    match_count: 1,
  })
  const queryMatch = data[0].content
  console.log('queryMatch', queryMatch)
  const openaiRecommendation = await getChatCompletion(queryMatch, query)
  if (!openaiRecommendation.recommendation) {
    return {
      recommendation:
        'Sorry, a recommendation could not be found. Please try again.',
      movieData: JSON.parse(queryMatch),
    }
  }
  // console.log('openaiRecommendation', openaiRecommendation)
  const { recommendation, movieData } = openaiRecommendation
  // console.log('api key', process.env.TMDB_API_KEY)
  const movieTitleQuery = movieData.title.replace(/ /g, '%20')
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieTitleQuery}&include_adult=false&language=en-US&primary_release_year=${movieData.releaseYear}&page=1`

  const tmdbRes = await fetch(url, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
    },
  })
  const tmbdData = await tmdbRes.json()
  console.log('tmdb res', tmbdData)
  return openaiRecommendation
  // return the recommendation and route to the recommendation page
}

async function createEmbedding(input: string) {
  try {
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input,
    })
    return embeddingResponse.data[0].embedding
  } catch (error) {
    console.error('Error creating embedding', error)
    throw error
  }
}

const chatMessages = [
  {
    role: 'system',
    content: `You are an enthusiastic movie expert who loves recommending movies to people. You will be given two pieces of information - some context about movies and a query from a user about their interest in movies. Your job is to formulate a recommendation for a movie using the context and query.  If you cannot formulate your response from the given in the context, or if you are unsure and cannot find the answer, say, "Sorry, I don't know the answer." Choose only one movie to recommend.  Please do not make up the answer.  Always speak as if you were chatting to a friend.`,
  },
]

async function getChatCompletion(
  queryMatch: string,
  userQuery: string
): Promise<AIRecommendation> {
  chatMessages.push({
    role: 'user',
    content: `Context: ${queryMatch} Query: ${userQuery}`,
  })
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    //@ts-ignore
    messages: chatMessages,
    temperature: 1,
    frequency_penalty: 0.5,
  })

  return {
    recommendation: response.choices[0].message.content,
    movieData: JSON.parse(queryMatch),
  }
}
