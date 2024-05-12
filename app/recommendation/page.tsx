// 'use client'
import { handleQuestionaire } from '../lib/fetchRec'
import Link from 'next/link'
export default async function Recommendation({
  searchParams,
}: {
  searchParams?: {
    favorite?: string
    mood?: string
    funOrSerious?: string
  }
}) {
  const favorite = searchParams?.favorite || ''
  const mood = searchParams?.mood || ''
  const funOrSerious = searchParams?.funOrSerious || ''
  const userQuery = favorite + ' ' + mood + ' ' + funOrSerious

  const { movieData, recommendation } = await handleQuestionaire(userQuery)

  return (
    <div>
      <h2 className='font-bold text-2xl mb-6'>
        {movieData.title} ({movieData.releaseYear})
      </h2>
      <p>{recommendation}</p>
      <Link className='block text-center' id='tryAgain' href={'/'}>
        Try Again{' '}
      </Link>{' '}
    </div>
  )
}
