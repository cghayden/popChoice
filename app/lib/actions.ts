'use server'
import { z } from 'zod'

const FormSchema = z.object({
  favorite: z.string(),
  mood: z.string(),
  funOrSerious: z.string(),
})

export async function handleQuestionaire(formData: FormData) {
  const { favorite, mood, funOrSerious } = FormSchema.parse({
    favorite: formData.get('favorite'),
    mood: formData.get('mood'),
    funOrSerious: formData.get('funOrSerious'),
  })
  console.log('favorite', favorite)
  console.log('mood', mood)
  console.log('funOrSerious', funOrSerious)

  // combine the responses into one string
  // turn the string into an embedding
  // use the embedding to search the supabase vector db to get a movie recommendation
  // return the recommendation and route to the recommendation page
}
