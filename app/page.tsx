'use client'

import { useState } from 'react'
import { handleQuestionaire } from './lib/actions'
import { AIRecommendation } from './lib/types'
// import { useActionState } from 'react'
// import { useRouter } from 'next/navigation'

export default function Home() {
  const [recommendation, setRecommendation] =
    useState<AIRecommendation | null>()
  const [formState, setFormState] = useState({
    favorite: '',
    mood: '',
    funOrSerious: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await handleQuestionaire(formState)
    setRecommendation(response)
  }

  return recommendation ? (
    <p>{recommendation.recommendation}</p>
  ) : (
    // <form id='questions' action={handleQuestionaire}>
    <form id='questions' onSubmit={handleSubmit}>
      <div className='inputItem'>
        <label htmlFor='favorite'>What is your favorite movie and why?</label>
        <textarea
          name='favorite'
          id='favorite'
          rows={3}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className='inputItem'>
        <label htmlFor='mood'>
          Are you in the mood for something new or a classic?
        </label>
        <textarea
          name='mood'
          id='mood'
          rows={2}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className='inputItem'>
        <label htmlFor='funOrSerious'>
          Do you wanna have fun or do you want something serious?
        </label>
        <textarea
          name='funOrSerious'
          id='funOrSerious'
          rows={2}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <button>Let&apos;s Go</button>
    </form>
  )
}
