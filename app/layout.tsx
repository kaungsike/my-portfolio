import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/context'
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Kaung Sike — Full Stack Developer',
  description:
    'Portfolio of Kaung Sike, a full stack developer building web and mobile applications with React, Go, TypeScript, and React Native.',
  keywords: ['Kaung Sike', 'developer', 'portfolio', 'React', 'Go', 'TypeScript', 'React Native'],
  authors: [{ name: 'Kaung Sike', url: 'https://github.com/kaungsike' }],
  openGraph: {
    title: 'Kaung Sike — Full Stack Developer',
    description: 'Building web and mobile applications with React, Go, TypeScript, and more.',
    type: 'website',
  },
}

// Inline script to set dark class before React hydrates (prevents flash)
const themeScript = `
  try {
    var stored = localStorage.getItem('theme');
    var preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var theme = stored || preferred;
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch(e) {}
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-[#f0f0f0] font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
