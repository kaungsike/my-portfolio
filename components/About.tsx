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

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const t = translations[lang].about

  const stats = [
    { label: t.repos, value: `${profile.repos}+` },
    { label: t.languages, value: '5+' },
    { label: t.timezone, value: 'UTC +06:30' },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-275 mx-auto">
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          className="text-xs font-semibold text-indigo-500 tracking-[0.12em] uppercase mb-3"
        >
          {t.label}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          >
            <h2 className="text-[clamp(28px,5vw,40px)] font-bold tracking-[-0.03em] text-gray-900 dark:text-[#f0f0f0] leading-[1.15] mb-5">
              {t.heading}
            </h2>
            <p className="text-base text-gray-500 dark:text-[#888] leading-[1.8] mb-4">
              {t.p1}
            </p>
            <p className="text-base text-gray-500 dark:text-[#888] leading-[1.8]">
              {t.p2}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}
            className="flex flex-col gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-white/6"
              >
                <p className="text-[32px] font-bold text-gray-900 dark:text-[#f0f0f0] tracking-[-0.03em] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 dark:text-[#555] font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
