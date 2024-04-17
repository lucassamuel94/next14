import type { Metadata } from 'next'
import type { Viewport } from 'next'

import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/lib/config/site'
import { cn } from '@/lib/utils'
import { fontSans } from '@/styles/fonts'

type RootLayoutProps = {
  children: React.ReactNode
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang='pt-br'
      className={cn(fontSans.variable, 'scroll-smooth')}
      suppressHydrationWarning>
      <body className='min-h-screen bg-neutral-50 font-sans text-neutral-700 antialiased'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='relative flex min-h-screen flex-col'>
            <div className='flex-1'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
