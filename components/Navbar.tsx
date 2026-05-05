'use client'

import { useState, useEffect } from 'react'
import { useTheme, useLang } from '@/lib/context'
import { translations } from '@/lib/translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()
  const t = translations[lang].nav

  const links = [
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/6'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-275 mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="text-lg font-semibold tracking-tight text-gray-900 dark:text-[#f0f0f0] no-underline"
        >
          KS
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <button
                id={`nav-${link.href.replace('#', '')}`}
                onClick={() => handleNavClick(link.href)}
                className="bg-transparent border-none cursor-pointer text-sm font-medium text-gray-500 dark:text-[#888] hover:text-gray-900 dark:hover:text-[#f0f0f0] transition-colors px-0 py-1 font-sans"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right-side controls */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            id="nav-lang-toggle"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-xs font-semibold px-2 py-1 rounded-md border border-gray-200 dark:border-white/10 text-gray-500 dark:text-[#888] hover:text-gray-900 dark:hover:text-[#f0f0f0] hover:border-gray-400 dark:hover:border-white/25 transition-colors cursor-pointer bg-transparent font-sans"
          >
            {lang === 'en' ? 'MM' : 'EN'}
          </button>

          {/* Dark / Light toggle */}
          <button
            id="nav-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-md text-gray-500 dark:text-[#888] hover:text-gray-900 dark:hover:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/6 transition-colors cursor-pointer bg-transparent border-none"
          >
            {theme === 'dark' ? (
              /* Sun icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            id="nav-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-1 rounded bg-transparent border-none cursor-pointer text-gray-900 dark:text-[#f0f0f0]"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-white/98 dark:bg-[#0a0a0a]/98 border-t border-gray-100 dark:border-white/6 px-6 pt-4 pb-6">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left bg-transparent border-none border-b border-gray-100 dark:border-white/5 cursor-pointer text-base font-medium text-gray-600 dark:text-[#ccc] py-3 font-sans"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
