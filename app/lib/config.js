import OpenAI from 'openai'
import { createClient } from '@supabase/supabase-js'

/** OpenAI config */
if (!process.env.OPENAI_API_KEY)
  throw new Error('OpenAI API key is missing or invalid.')

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

/** Supabase config */
// const privateKey = process.env.SUPABASE_API_KEY
// if (!privateKey) throw new Error(`Expected env var SUPABASE_API_KEY`)
// const url = process.env.SUPABASE_URL
// if (!url) throw new Error(`Expected env var SUPABASE_URL`)
// export const supabase = createClient(url, privateKey)

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase, openai }
