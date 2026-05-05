import type { ReactNode } from 'react'

// Inline SVG tech icons — zero external dependencies

interface Props {
  name: string
  size?: number
}

const icons: Record<string, ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61DAFB" strokeWidth="1.1" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(120 12 12)" />
    </svg>
  ),
  'React Native': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61DAFB" strokeWidth="1.1" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(120 12 12)" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
      <text x="4.2" y="17.5" fontFamily="monospace" fontSize="11" fontWeight="700" fill="white">TS</text>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
      <text x="4.2" y="17.5" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#111">JS</text>
    </svg>
  ),
  'HTML / CSS': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="4,2 20,2 18.5,19 12,21 5.5,19" fill="#E34F26" />
      <polygon points="12,4.5 12,19.2 17.2,17.5 18.5,4.5" fill="#EF652A" />
      <polygon points="7.5,8.5 8.1,13 12,13 12,8.5" fill="white" />
      <polygon points="12,8.5 16.5,8.5 16.9,13 12,13" fill="#DBDBDB" />
      <polygon points="7.9,14.5 8.3,17 12,18 15.7,17 16.1,14.5 12,14.5" fill="white" opacity="0.8" />
    </svg>
  ),
  Go: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#00ADD8" />
      <text x="4.5" y="17" fontFamily="monospace" fontSize="12" fontWeight="700" fill="white">Go</text>
    </svg>
  ),
  Gin: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#00ADD8" fillOpacity="0.75" />
      <text x="3.5" y="16.5" fontFamily="monospace" fontSize="10.5" fontWeight="700" fill="white">Gin</text>
    </svg>
  ),
  'REST APIs': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#10B981" />
      <circle cx="7" cy="12" r="1.6" fill="white" />
      <circle cx="17" cy="12" r="1.6" fill="white" />
      <line x1="8.6" y1="12" x2="15.4" y2="12" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="14.2" y1="9.8" x2="16.8" y2="12" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="14.2" y1="14.2" x2="16.8" y2="12" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#777BB4" />
      <text x="3" y="17" fontFamily="monospace" fontSize="9.5" fontWeight="700" fill="white">PHP</text>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" fill="#F05032" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.7 11.3l-9-9a1 1 0 00-1.4 0L9.5 4.1l2.2 2.2a1.2 1.2 0 011.5 1.5l2.1 2.1a1.2 1.2 0 11-1.5 1.5L11.7 9.3v5.6a1.2 1.2 0 11-2 0V9l-.7-.7a1.2 1.2 0 00-1.6-1.6L5.1 4.4 2.3 7.2a1 1 0 000 1.4l.2.2 9 9a1 1 0 001.4 0l8.8-8.8a1 1 0 000-1.5z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  Laravel: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#FF2D20" />
      <text x="7" y="17.5" fontFamily="serif" fontSize="14" fontWeight="700" fill="white">L</text>
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.57 0c-.176 0-.31.001-.357.007A11.95 11.95 0 000 11.999C0 18.627 5.372 24 12 24s12-5.373 12-12c0-6.196-4.713-11.296-10.74-11.944A13.3 13.3 0 0011.57 0zM9.757 7.002l6.094 9.01v.003H13.64L7.55 7.005h2.207zm-2.202.003h1.89v7.012L7.555 12.3V7.005zm6.592 7.012v-7.01h1.885v5.304l-1.885 1.706z" />
    </svg>
  ),
  Expo: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.526 11.43c2.395-4.32 3.593-6.48 4.096-6.48.503 0 1.7 2.16 4.096 6.48 2.395 4.321 3.593 6.481 3.339 6.872-.254.39-2.65.39-7.34.39-4.69 0-7.087 0-7.34-.39-.255-.39.943-2.551 3.149-6.872z" />
    </svg>
  ),
}

const FallbackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M9 9l6 6M15 9l-6 6" />
  </svg>
)

export default function TechIcon({ name, size = 22 }: Props) {
  const icon = icons[name] ?? <FallbackIcon />
  return (
    <span
      style={{ width: size, height: size, display: 'inline-flex', flexShrink: 0 }}
      aria-label={name}
      role="img"
    >
      {icon}
    </span>
  )
}
