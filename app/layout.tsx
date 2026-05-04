import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

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
    description:
      'Building web and mobile applications with React, Go, TypeScript, and more.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
