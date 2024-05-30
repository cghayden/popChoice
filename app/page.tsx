'use client'

import { useState } from 'react'
import { handleQuestionaire } from './lib/actions'
import { AIRecommendation } from './lib/types'
import clsx from 'clsx'
// import { useActionState } from 'react'
// import { useRouter } from 'next/navigation'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)

    const response = await handleQuestionaire(formState)
    setRecommendation(response)
    setIsLoading(false)
  }

  return recommendation ? (
    <p>{recommendation.recommendation}</p>
  ) : (
    // <form id='questions' action={handleQuestionaire}>
    <form id='questions' onSubmit={handleSubmit}>
      <fieldset disabled={isLoading}>
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
        <button className={clsx({ 'bg-gray-500': isLoading === true })}>
          {isLoading ? 'Thinking...' : `Let's Go`}
        </button>
      </fieldset>
    </form>
  )
}
