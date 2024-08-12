import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/Theme/theme-provider'

const inter = FontSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Auth App',
  description: 'Authentication demo in Next.js 14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          inter.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
