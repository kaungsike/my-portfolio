"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, profile } from "@/lib/data";
import { useLang } from "@/lib/context";
import { translations } from "@/lib/translations";
import TechIcon from "@/components/TechIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const t = translations[lang].projects;

  return (
    <section
      id="projects"
      className="py-24 px-6 border-t border-gray-100 dark:border-white/5"
    >
      <div ref={ref} className="max-w-275 mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="text-xs font-semibold text-indigo-500 tracking-[0.12em] uppercase mb-3"
        >
          {t.label}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
          className="text-[clamp(28px,5vw,40px)] font-bold tracking-[-0.03em] text-gray-900 dark:text-[#f0f0f0] mb-12"
        >
          {t.heading}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              id={`project-${project.name.replace(/\s+/g, "-").toLowerCase()}`}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.15 + i * 0.08}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col p-7 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-white/6 hover:border-gray-300 dark:hover:border-white/14 transition-colors duration-200"
            >
              {/* Card header icon */}
              <div className="flex items-start justify-between mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-400 dark:text-[#555] shrink-0"
                >
                  <path
                    d="M3 3h18v18H3V3z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 9h18M9 21V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Name */}
              <h3 className="text-[15px] font-semibold text-gray-900 dark:text-[#f0f0f0] mb-2.5 tracking-[-0.01em] wrap-break-word">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-gray-500 dark:text-[#666] leading-[1.65] grow mb-5">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center justify-center gap-1.5 p-1 rounded-md bg-gray-100 dark:bg-white/6 "
                    >
                      <TechIcon name={tech} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 flex-wrap">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-500 text-white no-underline hover:bg-indigo-600 transition-colors duration-150"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Demo
                  </a>
                )}
                <a
                  href={project.isPrivate ? undefined : project.github}
                  target={project.isPrivate ? undefined : "_blank"}
                  rel={project.isPrivate ? undefined : "noopener noreferrer"}
                  aria-disabled={project.isPrivate}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold no-underline border transition-colors duration-150 ${
                    project.isPrivate
                      ? "border-gray-200 dark:border-white/8 text-gray-400 dark:text-[#555] cursor-default"
                      : "border-gray-200 dark:border-white/10 text-gray-600 dark:text-[#888] hover:border-gray-400 dark:hover:border-white/25 hover:text-gray-900 dark:hover:text-[#f0f0f0] cursor-pointer"
                  }`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  {project.isPrivate ? t.privateRepo : t.repository}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.5}
          className="mt-10 text-center"
        >
          <a
            id="projects-view-all"
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 dark:text-[#555] no-underline border-b border-gray-200 dark:border-[#333] pb-0.5 hover:text-gray-900 dark:hover:text-[#f0f0f0] hover:border-gray-400 dark:hover:border-[#666] transition-colors duration-200"
          >
            {t.viewAll(profile.repos)}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
