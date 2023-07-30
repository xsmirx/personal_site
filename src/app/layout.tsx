import {Footer, Header, Providers} from '@/components'
import type {Metadata} from 'next'
import {DM_Sans, Outfit} from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  display: 'swap',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-outfit',
})

const dmSans = DM_Sans({
  display: 'swap',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Ivan Smirnov',
  description: 'Personal website of front-end developer Ivan Smirnov (xsmirx)',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} antialiased`}
    >
      <body>
        <Providers>
          <div className="relativ min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
