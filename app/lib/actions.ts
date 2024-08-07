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
  const userQuery = favorite + ' ' + mood + ' ' + funOrSerious
  // const query = 'I enjoy a good science fiction movie'

  // turn the string into an embedding
  const queryEmbedding = await createEmbedding(userQuery)

  // use the embedding to search the supabase vector db to get a movie recommendation
  const { data } = await supabase.rpc('search_movies', {
    query_embedding: queryEmbedding,
    match_threshold: 0.5,
    match_count: 1,
  })
  const queryMatch = data[0].content
  console.log('queryMatch', queryMatch)
  const openaiRecommendation = await getChatCompletion(queryMatch, userQuery)
  console.log('openaiRecommendation', openaiRecommendation)
  if (!openaiRecommendation.recommendation) {
    return {
      recommendation:
        'Sorry, a recommendation could not be found. Please try again.',
      movieData: JSON.parse(queryMatch),
    }
  }
  const { movieData } = openaiRecommendation
  const movieImageUrl = await getMovieImage(movieData)
  openaiRecommendation.movieData.imageUrl = movieImageUrl

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
    content: `You are an enthusiastic movie expert who loves recommending movies to people. You will be given two pieces of information - some context about a movie that is a good match for a user based on a query from that user about their interest in movies. Your job is to formulate a recommendation for the movie using the context and query.  If you cannot formulate your response from the given in the context, or if you are unsure and cannot find the answer, say, "Sorry, I don't know the answer." Choose only one movie to recommend.  Please do not make up the answer.  Always speak as if you were chatting to a friend.`,
  },
]

async function getChatCompletion(
  queryMatch: string,
  userQuery: string
): Promise<AIRecommendation> {
  chatMessages.push({
    role: 'user',
    content: `Context: ${queryMatch}, Query: ${userQuery}`,
  })
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
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

async function getMovieImage({
  title,
  releaseYear,
}: {
  title: string
  releaseYear: string
}) {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
    },
  }
  const movieTitleQuery = title.replace(/ /g, '%20')
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieTitleQuery}&include_adult=false&language=en-US&primary_release_year=${releaseYear}&page=1`

  const tmdbRes = await fetch(url, options).then((res) => res.json())
  const movieData = tmdbRes.results[0]
  const poster_path = movieData.poster_path

  // base_url,
  // file_size
  // file_path
  // The first two pieces can be retrieved by calling the /configuration API and the third is the file path you're wishing to grab on a particular media object. Here's what a full image URL looks like if the poster_path of /1E5baAaEse26fej7uHcjOgEE2t2.jpg was returned for a movie, and you were looking for the w500 size:
  // https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`

  return imageUrl
}
