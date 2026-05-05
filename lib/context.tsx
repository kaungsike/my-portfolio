'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

// ─── Theme ────────────────────────────────────────────────────────────────────

export type Theme = 'dark' | 'light'
interface ThemeCtx { theme: Theme; toggleTheme: () => void }
const ThemeContext = createContext<ThemeCtx>({ theme: 'dark', toggleTheme: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initial = stored ?? preferred
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

// ─── Language ─────────────────────────────────────────────────────────────────

export type Lang = 'en' | 'mm'
interface LangCtx { lang: Lang; toggleLang: () => void }
const LangContext = createContext<LangCtx>({ lang: 'en', toggleLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored) setLang(stored)
  }, [])

  const toggleLang = () => {
    const next = lang === 'en' ? 'mm' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
