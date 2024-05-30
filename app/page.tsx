// 'use client'

// import { handleQuestionaire } from './lib/actions'
// import { useActionState } from 'react'
// import { useRouter } from 'next/navigation'

export default function Home() {
  // const [state, formAction] = useActionState(handleQuestionaire, {
  //   recommendation: null,
  //   movieData: {},
  // })
  // const router = useRouter()
  // if (state.recommendation) {
  //   return (
  //     <div>
  //       <h2 className='font-bold text-2xl mb-6'>
  //         {state.movieData.title} ({state.movieData.releaseYear})
  //       </h2>
  //       <p>{state.recommendation}</p>
  //       <button onClick={() => router.push('/')}>Try Again</button>
  //     </div>
  //   )
  // }
  return (
    <form id='questions' action={'/recommendation'}>
      <div className='inputItem'>
        <label htmlFor='favorite'>What is your favorite movie and why?</label>
        <textarea name='favorite' id='favorite' rows={3} />
      </div>
      <div className='inputItem'>
        <label htmlFor='mood'>
          Are you in the mood for something new or a classic?
        </label>
        <textarea name='mood' id='mood' rows={2} />
      </div>
      <div className='inputItem'>
        <label htmlFor='funOrSerious'>
          Do you wanna have fun or do you want something serious?
        </label>
        <textarea name='funOrSerious' id='funOrSerious' rows={2} />
      </div>
      <button>Let&apos;s Go</button>
    </form>
  )
}
