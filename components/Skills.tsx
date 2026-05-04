'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '@/lib/data'

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

  return (
    <section id="skills" style={{ padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          style={{ fontSize: '12px', fontWeight: 600, color: '#6366f1', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}
        >
          Skills
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '48px' }}
        >
          Tech I work with
        </motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.15 + gi * 0.08}
              style={{ padding: '28px', borderRadius: '12px', background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p style={{ fontSize: '11px', fontWeight: 600, color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
                {group.category}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {group.items.map((skill) => (
                  <div key={skill.name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: skill.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#ccc', fontWeight: 500 }}>{skill.name}</span>
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
