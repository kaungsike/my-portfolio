'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '@/lib/data'
import { useLang } from '@/lib/context'
import { translations } from '@/lib/translations'
import TechIcon from '@/components/TechIcon'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const t = translations[lang].skills

  return (
    <section id="skills" className="py-24 px-6 border-t border-gray-100 dark:border-white/5">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          className="text-xs font-semibold text-indigo-500 tracking-[0.12em] uppercase mb-3"
        >
          {t.label}
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          className="text-[clamp(28px,5vw,40px)] font-bold tracking-[-0.03em] text-gray-900 dark:text-[#f0f0f0] mb-12"
        >
          {t.heading}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.15 + gi * 0.08}
              className="p-7 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-white/6"
            >
              <p className="text-[11px] font-semibold text-gray-400 dark:text-[#555] tracking-[0.1em] uppercase mb-5">
                {group.category}
              </p>
              <div className="flex flex-col gap-3">
                {group.items.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <TechIcon name={skill.name} size={22} />
                    <span className="text-sm text-gray-700 dark:text-[#ccc] font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
