import { Poppins as FontSans, DM_Sans as FontHeading } from 'next/font/google'
export const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700']
})

export const fontHeading = FontHeading({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '700'
})
