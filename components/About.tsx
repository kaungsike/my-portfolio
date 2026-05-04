'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

const stats = [
  { label: 'Repositories', value: `${profile.repos}+` },
  { label: 'Languages', value: '5+' },
  { label: 'Timezone', value: 'UTC +06:30' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{ padding: '96px 24px' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#6366f1',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          About
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1}
          >
            <h2
              style={{
                fontSize: 'clamp(28px, 5vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#f0f0f0',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Building things that work.
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#888',
                lineHeight: 1.8,
                marginBottom: '16px',
              }}
            >
              I&apos;m a self-driven developer from Myanmar with a passion for building practical software. I work across the full stack — from Go-powered REST APIs to React and React Native front-ends.
            </p>
            <p
              style={{
                fontSize: '16px',
                color: '#888',
                lineHeight: 1.8,
              }}
            >
              I believe in learning by building. Every project in my GitHub is a step forward, whether it&apos;s understanding clean architecture in Go, or exploring TypeScript patterns in React Native.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.2}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#f0f0f0',
                    letterSpacing: '-0.03em',
                    marginBottom: '4px',
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
