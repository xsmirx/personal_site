import './globals.css'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Ivan Smirnov',
  description: 'Personal site of Ivan Smirnov (xsmirx) frontemd developer',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
