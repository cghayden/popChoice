import { handleQuestionaire } from './lib/actions'

export default function Home() {
  return (
    <form id='questions' action={handleQuestionaire}>
      <div className='inputItem'>
        <label htmlFor='favorite'>What is your favorite move and why?</label>
        <textarea name='favorite' id='favorite' rows={3}>
          {' '}
        </textarea>
      </div>
      <div className='inputItem'>
        <label htmlFor='mood'>
          Are you in the mood for something new or a classic?
        </label>
        <textarea name='mood' id='mood' rows={2}>
          (i.e. I want to watch movies that were released after 1990)
        </textarea>
      </div>
      <div className='inputItem'>
        <label htmlFor='funOrSerious'>
          Do you wnna have fun or do you want something serious?
        </label>
        <textarea name='funOrSerious' id='funOrSerious' rows={2}>
          (i.e. I want to watch something stupid and fun)
        </textarea>
      </div>
      <button>Let&apos;s Go</button>
    </form>
  )
}
