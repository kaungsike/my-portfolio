'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { profile } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

function ProfileImage() {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    // Initials fallback
    return (
      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border-2 border-indigo-500/20 dark:border-indigo-500/25 flex items-center justify-center shrink-0">
        <span className="text-3xl sm:text-4xl font-bold text-indigo-500 tracking-tight select-none">
          {profile.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
    )
  }

  return (
    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-indigo-500/20 dark:border-indigo-500/25 shadow-lg shrink-0">
      <Image
        src="/profile.jpg"
        alt={profile.name}
        width={176}
        height={176}
        className="w-full h-full object-cover"
        loading="eager"
        unoptimized
        onError={() => setImgError(true)}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(99,102,241,0.10)_0%,transparent_70%)]" />

      <div className="max-w-200 w-full relative">
        {/* Layout: column on mobile, row on desktop */}
        <div className="flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-16">
          {/* Text side */}
          <div className="flex-1 text-center sm:text-left">
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="text-[13px] font-medium text-indigo-500 tracking-[0.12em] uppercase mb-5"
            >
              Available for work
            </motion.p>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
              className="text-[clamp(40px,8vw,68px)] font-bold leading-[1.08] tracking-[-0.04em] text-gray-900 dark:text-[#f0f0f0] mb-4"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
              className="text-[clamp(16px,3vw,20px)] font-normal text-gray-500 dark:text-[#888] mb-4 tracking-[-0.01em]"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
              className="text-base text-gray-500 dark:text-[#666] leading-[1.7] max-w-125 mb-10 mx-auto sm:mx-0"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
              className="flex gap-3 justify-center sm:justify-start flex-wrap"
            >
              <a
                id="hero-github-link"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-[#f0f0f0] text-white dark:text-[#0a0a0a] rounded-lg text-sm font-semibold no-underline hover:opacity-85 hover:-translate-y-px transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub Profile
              </a>

              <button
                id="hero-scroll-projects"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-gray-900 dark:text-[#f0f0f0] border border-gray-200 dark:border-white/12 rounded-lg text-sm font-medium cursor-pointer hover:border-gray-400 dark:hover:border-white/30 hover:-translate-y-px transition-all duration-200 font-sans"
              >
                View Projects
              </button>
            </motion.div>
          </div>

          {/* Profile image side */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.15}
            className="shrink-0"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
