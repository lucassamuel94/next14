import type { Metadata } from 'next'
import '@/styles/globals.css'
import { fontHeading, fontSans } from '@/styles/fonts'
import { cn } from '@/lib/utils'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Next 14 BFB',
  description:
    'Boilerplate default de projetos em Next14 desenvolvido por Lucas Samuel'
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-br' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          fontHeading.variable,
          'min-h-screen bg-white font-sans text-neutral-700 antialiased'
        )}>
        {children}
      </body>
    </html>
  )
}
