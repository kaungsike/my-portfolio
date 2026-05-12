'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

const aboutCopy = [
  "I'm a self-driven developer from Myanmar with a passion for building practical software. I work across the full stack, from Go-powered REST APIs to React and React Native front-ends.",
  "I believe in learning by building. Every project in my GitHub is a step forward, whether it's understanding clean architecture in Go, or exploring TypeScript patterns in React Native.",
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-275 mx-auto">
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          className="text-xs font-semibold text-indigo-500 tracking-[0.12em] uppercase mb-3"
        >
          About
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          className="max-w-180"
        >
          <p className="text-base text-gray-500 dark:text-[#888] leading-[1.8] mb-4">
            {aboutCopy[0]}
          </p>
          <p className="text-base text-gray-500 dark:text-[#888] leading-[1.8]">
            {aboutCopy[1]}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
