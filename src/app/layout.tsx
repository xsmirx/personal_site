import {Footer, Header, Providers} from '@/components'
import type {Metadata} from 'next'
import {dmSans, outfit} from '@/style/fonts'
import '@/style/globals.css'

export const metadata: Metadata = {
  title: 'Ivan Smirnov',
  description: 'Personal website of front-end developer Ivan Smirnov (xsmirx)',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-white text-gray-darker dark:bg-gray-darkest dark:text-gray-lightest">
        <Providers>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
