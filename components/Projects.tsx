'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" style={{ padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          style={{ fontSize: '12px', fontWeight: 600, color: '#6366f1', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}
        >
          Projects
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '48px' }}
        >
          Things I&apos;ve built
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              id={`project-${project.name.replace(/\s+/g, '-').toLowerCase()}`}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.15 + i * 0.08}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '28px',
                borderRadius: '12px',
                background: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#555', flexShrink: 0 }}>
                  <path d="M3 3h18v18H3V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: '#444' }}>
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#f0f0f0',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                  wordBreak: 'break-word',
                }}
              >
                {project.name}
              </h3>

              <p
                style={{
                  fontSize: '13px',
                  color: '#666',
                  lineHeight: 1.65,
                  flexGrow: 1,
                  marginBottom: '20px',
                }}
              >
                {project.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: project.langColor,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '12px', color: '#555', fontWeight: 500 }}>{project.language}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.5}
          style={{ marginTop: '40px', textAlign: 'center' }}
        >
          <a
            id="projects-view-all"
            href="https://github.com/kaungsike?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px',
              color: '#555',
              textDecoration: 'none',
              borderBottom: '1px solid #333',
              paddingBottom: '2px',
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f0f0f0'
              e.currentTarget.style.borderColor = '#666'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#555'
              e.currentTarget.style.borderColor = '#333'
            }}
          >
            View all 36 repositories on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
