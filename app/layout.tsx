import type { Metadata } from 'next'
import './globals.css'
import { roboto } from '@/app/ui/fonts'
import { carterOne } from '@/app/ui/fonts'
import Image from 'next/image'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'AI Movie Recommender',
  description: 'Get a movie reommendation based on your preferences',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Head>
        <title>AI Movie Recommeneder</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <html lang='en' className='grid place-content-center'>
        <body className={`${roboto.className} antialiased text-white`}>
          <main className='pt-[40px] px-8'>
            <div className='flex flex-col items-center mb-8'>
              <Image
                src='/PopChoiceIcon.png'
                width={100}
                height={108}
                alt='popcorn bucket logo'
              />
              <h1
                className={`${carterOne.className} antialiased text-5xl mt-2`}
              >
                PopChoice
              </h1>
            </div>
            {children}
          </main>
        </body>
      </html>
    </>
  )
}
