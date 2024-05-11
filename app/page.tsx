import { handleQuestionaire } from './lib/actions'

export default function Home() {
  return (
    <form id='questions' action={handleQuestionaire}>
      <div className='inputItem'>
        <label htmlFor='favorite'>What is your favorite move and why?</label>
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
