import Image from 'next/image'
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
      {movieData.imageUrl && (
        <Image
          className='mx-auto'
          src={movieData.imageUrl}
          alt={movieData.title}
          width={300}
          height={450}
        />
      )}
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
