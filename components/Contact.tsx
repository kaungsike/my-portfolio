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

const contactHeading = "Let's work together"
const contactBody = "I'm open to full-time roles, freelance projects, and collaboration. Feel free to reach out."

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const links = [
    {
      id: 'contact-github',
      label: 'GitHub',
      description: 'See my code',
      href: profile.github,
      external: true,
    },
    {
      id: 'contact-email',
      label: 'Email',
      description: 'Get in touch',
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      id: 'contact-linkedin',
      label: 'LinkedIn',
      description: 'Connect with me on LinkedIn',
      href: 'https://www.linkedin.com/in/kaung-sike-09b85538b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      external: true,
    },
    {
      id: 'contact-facebook',
      label: 'Facebook',
      description: 'Follow me on Facebook',
      href: 'https://www.facebook.com/share/1LCaNaVrBj/?mibextid=wwXIfr',
      external: true,
    },
    
  ]

  return (
    <section id="contact" className="py-24 px-6 pb-32 border-t border-gray-100 dark:border-white/5">
      <div ref={ref} className="max-w-160 mx-auto text-center">
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          className="text-xs font-semibold text-indigo-500 tracking-[0.12em] uppercase mb-3"
        >
          Contact
        </motion.p>

        <motion.h2
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          className="text-[clamp(28px,5vw,40px)] font-bold tracking-[-0.03em] text-gray-900 dark:text-[#f0f0f0] leading-[1.15] mb-4"
        >
          {contactHeading}
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}
          className="text-base text-gray-500 dark:text-[#666] leading-[1.7] mb-12"
        >
          {contactBody}
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
