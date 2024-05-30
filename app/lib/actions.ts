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
  console.log('state', state)
  console.log('fav:', state.favorite)
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
  const openaiRecommendation = await getChatCompletion(queryMatch, query)
  if (!openaiRecommendation.recommendation) {
    return {
      recommendation:
        'Sorry, a recommendation could not be found. Please try again.',
      movieData: JSON.parse(queryMatch),
    }
  }
  console.log('openaiRecommendation', openaiRecommendation)
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

async function getChatCompletion(queryMatch: string, userQuery: string) {
  chatMessages.push({
    role: 'user',
    content: `Context: ${queryMatch} Query: ${userQuery}`,
  })
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: chatMessages,
    temperature: 1,
    frequency_penalty: 0.5,
  })

  return {
    recommendation: response.choices[0].message.content,
    movieData: JSON.parse(queryMatch),
  }
}
