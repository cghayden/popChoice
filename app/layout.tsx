import type { Metadata } from 'next'
import './globals.css'
import { roboto } from '@/app/ui/fonts'

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
    <html lang='en'>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
