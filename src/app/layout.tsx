import type { Metadata } from 'next'

import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/lib/config/site'
import { cn } from '@/lib/utils'
import { fontHeading, fontSans } from '@/styles/fonts'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
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
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='relative flex min-h-screen flex-col'>
            <div className='flex-1'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
