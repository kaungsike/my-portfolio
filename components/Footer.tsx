'use client'

import { profile } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '28px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p style={{ fontSize: '13px', color: '#444' }}>
          © {year} {profile.name}
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '13px',
            color: '#444',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#888')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
        >
          github.com/{profile.username}
        </a>
      </div>
    </footer>
  )
}
