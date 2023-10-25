import {DM_Sans, Outfit} from 'next/font/google'

export const outfit = Outfit({
  display: 'swap',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const dmSans = DM_Sans({
  display: 'swap',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
})
