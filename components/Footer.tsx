'use client'

import { profile } from '@/lib/data'
import { useLang } from '@/lib/context'
import { translations } from '@/lib/translations'

export default function Footer() {
  const year = new Date().getFullYear()
  const { lang } = useLang()
  const t = translations[lang].footer

  return (
    <footer className="border-t border-gray-100 dark:border-white/5 py-7 px-6">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-3">
        <p className="text-[13px] text-gray-400 dark:text-[#444]">
          {t.rights(year, profile.name)}
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-gray-400 dark:text-[#444] no-underline hover:text-gray-700 dark:hover:text-[#888] transition-colors duration-200"
        >
          github.com/{profile.username}
        </a>
      </div>
    </footer>
  )
}
