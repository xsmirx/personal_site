import './globals.css'
import type {Metadata} from 'next'
import {Outfit} from 'next/font/google'

const outfit = Outfit({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Ivan Smirnov',
  description: 'Personal website of front-end developer Ivan Smirnov (xsmirx)',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  )
}
