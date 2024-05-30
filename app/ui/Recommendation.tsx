import { AIRecommendation } from '../lib/types'

export default function Recommendation({
  response,
  setResponse,
}: {
  response: AIRecommendation
  setResponse: Function
}) {
  const { recommendation, movieData } = response

  return (
    <div>
      <h2 className='font-bold text-2xl mb-6'>
        {movieData.title} ({movieData.releaseYear})
      </h2>
      <p className='mb-6'>{recommendation}</p>
      <button
        className='block text-center'
        id='tryAgain'
        onClick={() => setResponse(null)}
      >
        Try Again
      </button>
    </div>
  )
}
