export type MovieData = {
  title: string
  releaseYear: string
  content: string
}

export type AIRecommendation = {
  recommendation: string | null
  movieData: MovieData
}

export type InputState = {
  favorite: string
  mood: string
  funOrSerious: string
}
