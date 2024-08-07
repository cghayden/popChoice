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
      {' '}
      <h2 className='font-bold text-2xl'>{movieData.title}</h2>
      <p className='p-0 m-0 text-center'>{movieData.releaseYear}</p>
      {movieData.imageUrl && (
        <Image
          className='mx-auto pb-4 pt-4'
          src={movieData.imageUrl}
          alt={movieData.title}
          width={225}
          height={338}
        />
      )}
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
