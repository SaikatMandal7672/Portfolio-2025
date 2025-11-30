"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "PayMe",
    subtitle: "A Payments Application",
    desc: "A wallet and peer-to-peer payments app with secure authentication and dashboard.",
    github: "https://github.com/SaikatMandal7672/PayMe-banking-app",
    live: null,
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "RAG Chat App",
    subtitle: "AI-Powered PDF Chat",
    desc: "Ingest PDFs, store vectors in QdrantDB and answer queries using OpenAI.",
    github: "https://github.com/SaikatMandal7672/PDF-RAG-chat",
    live:null,
    tags: ["Python", "OpenAI", "QdrantDB", "Langchain"],
  },
  {
    title: "Blogs.dev",
    subtitle: "Multi-tenant Blogging Platform",
    desc: "Multi-tenant blogs with Clerk auth, orgs, subdomains, RBAC, and isolated workspaces.",
    github:"https://github.com/SaikatMandal7672/Blogs-Application",
    live:"https://blogs-dev-application.vercel.app/",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Brainify",
    subtitle: "A Second Brain",
    github:"https://github.com/SaikatMandal7672/Brainify",
    live:"https://brainify-fe.vercel.app",
    desc: "Knowledge manager with embedded content & JWT authentication.",
    tags: ["TypeScript", "React.js", "MongoDB", "Express.js"],
  },
];

const staggerParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 relative bg-bg-surface dark:bg-[#04030b]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16">Projects</h2>

        
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 140, damping: 12 }}
              className="border border-black/10 dark:border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 bg-neutral-50 dark:bg-zinc-950 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Title Row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold dark:text-white group-hover:text-cyan-700 truncate">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {proj.subtitle}
                  </p>
                </div>

                <div className="flex gap-2 sm:gap-3 text-gray-700 dark:text-gray-200 flex-shrink-0">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-100 hover:text-cyan-600 transition-colors">
                    <FiGithub size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-100 hover:text-cyan-600 transition-colors">
                      <FiExternalLink size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mt-3 sm:mt-4">
                {proj.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-5">
                {proj.tags.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-gray-100 dark:bg-white/10 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
