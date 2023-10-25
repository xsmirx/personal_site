import {Footer, Header, Providers} from '@/components'
import type {Metadata} from 'next'
import '@/style/globals.css'
import { dmSans, outfit } from '@/style/fonts'

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
          <div className="relativ min-h-screen flex flex-col bg-white dark:bg-gray-darkest">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
