const { movies } = require('./movies.js')
const OpenAI = require('openai')
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

// openai config
if (!process.env.OPENAI_API_KEY)
  throw new Error('OpenAI API key is missing or invalid.')
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  // dangerouslyAllowBrowser: true
})

// supabase config
const supabasePrivateKey = process.env.SUPABASE_API_KEY
if (!supabasePrivateKey) throw new Error(`Expected env var SUPABASE_API_KEY`)
const supabaseUrl = process.env.SUPABASE_URL
if (!supabaseUrl) throw new Error(`Expected env var SUPABASE_URL`)
const supabase = createClient(supabaseUrl, supabasePrivateKey)

const formattedMovies = movies.map((movie) => {
  return `movie title: ${movie.title}. release year: ${movie.releaseYear}. content: ${movie.content}`
})
// get embeddings
async function getEmbeddings(movies) {
  const embeddings = await Promise.all(
    movies.map(async (movie) => {
      const embeddingResponse = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: JSON.stringify(movie),
      })
      return {
        content: JSON.stringify(movie),
        embedding: embeddingResponse.data[0].embedding,
      }
    })
  )
  // async function getEmbeddings(formattedMovies) {
  //   const embeddings = await Promise.all(
  //     formattedMovies.map(async (formattedMovie) => {
  //       const embeddingResponse = await openai.embeddings.create({
  //         model: 'text-embedding-ada-002',
  //         input: formattedMovie,
  //       })
  //       return {
  //         content: formattedMovie,
  //         embedding: embeddingResponse.data[0].embedding,
  //       }
  //     })
  //   )
  // console.log('embeddings', embeddings)
  await supabase.from('movies').insert(embeddings)
  console.log('Embedding and storing complete!')
}

// upload embeddings
getEmbeddings(movies)
