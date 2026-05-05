'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '@/lib/data'
import { useLang } from '@/lib/context'
import { translations } from '@/lib/translations'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const t = translations[lang].contact

  const links = [
    {
      id: 'contact-github',
      label: t.github,
      description: t.githubDesc,
      href: profile.github,
      external: true,
    },
    {
      id: 'contact-email',
      label: t.email,
      description: t.emailDesc,
      href: `mailto:${profile.email}`,
      external: false,
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 pb-32 border-t border-gray-100 dark:border-white/5">
      <div ref={ref} className="max-w-160 mx-auto text-center">
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          className="text-xs font-semibold text-indigo-500 tracking-[0.12em] uppercase mb-3"
        >
          {t.label}
        </motion.p>

        <motion.h2
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          className="text-[clamp(28px,5vw,40px)] font-bold tracking-[-0.03em] text-gray-900 dark:text-[#f0f0f0] leading-[1.15] mb-4"
        >
          {t.heading}
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}
          className="text-base text-gray-500 dark:text-[#666] leading-[1.7] mb-12"
        >
          {t.body}
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
          className="flex gap-4 justify-center flex-wrap"
        >
          {links.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center gap-1 px-8 py-5 min-w-35 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-white/6 no-underline hover:border-gray-300 dark:hover:border-white/16 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-[15px] font-semibold text-gray-900 dark:text-[#f0f0f0]">{link.label}</span>
              <span className="text-xs text-gray-400 dark:text-[#555]">{link.description}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
