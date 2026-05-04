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

const links = [
  {
    id: 'contact-github',
    label: 'GitHub',
    href: profile.github,
    description: 'See my code',
    external: true,
  },
  {
    id: 'contact-email',
    label: 'Email',
    href: `mailto:${profile.email}`,
    description: 'Get in touch',
    external: false,
  },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      style={{ padding: '96px 24px 120px', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div ref={ref} style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          style={{ fontSize: '12px', fontWeight: 600, color: '#6366f1', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}
        >
          Contact
        </motion.p>

        <motion.h2
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#f0f0f0', lineHeight: 1.15, marginBottom: '16px' }}
        >
          Let&apos;s work together
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}
          style={{ fontSize: '16px', color: '#666', lineHeight: 1.7, marginBottom: '48px' }}
        >
          I&apos;m open to full-time roles, freelance projects, and collaboration. Feel free to reach out.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {links.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                padding: '20px 32px',
                borderRadius: '12px',
                background: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
                minWidth: '140px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={{ fontSize: '15px', fontWeight: 600, color: '#f0f0f0' }}>{link.label}</span>
              <span style={{ fontSize: '12px', color: '#555' }}>{link.description}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
