'use server'
import { z } from 'zod'
import { openai, supabase } from '@/app/lib/config'

const FormSchema = z.object({
  favorite: z.string(),
  mood: z.string(),
  funOrSerious: z.string(),
})

export async function handleQuestionaire(formData: FormData) {
  // const data = FormSchema.parse(Object.fromEntries(formData.entries()))
  const { favorite, mood, funOrSerious } = FormSchema.parse({
    favorite: formData.get('favorite'),
    mood: formData.get('mood'),
    funOrSerious: formData.get('funOrSerious'),
  })

  // combine the responses into one string
  // const query = favorite + ' ' + mood + ' ' + funOrSerious
  const query = 'Movies from the 90s that are fun and serious'
  // turn the string into an embedding
  const queryEmbedding = await createEmbedding(query)

  // use the embedding to search the supabase vector db to get a movie recommendation
  const { data } = await supabase.rpc('search_movies', {
    query_embedding: queryEmbedding,
    match_threshold: 0.5,
    match_count: 1,
  })
  console.log(data[0].content)
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
