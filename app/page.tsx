import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image
        src='/PopChoiceIcon.png'
        width={100}
        height={108}
        alt='popcorn bucket logo'
      />
    </main>
  )
}
