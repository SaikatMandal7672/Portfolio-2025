"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "PayMe",
    subtitle: "A Payments Application",
    desc: "A wallet and peer-to-peer payments app with secure authentication and dashboard.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "RAG Chat App",
    subtitle: "AI-Powered PDF Chat",
    desc: "Ingest PDFs, store vectors in QdrantDB and answer queries using OpenAI.",
    tags: ["Python", "OpenAI", "QdrantDB", "Langchain"],
  },
  {
    title: "Blogs.dev",
    subtitle: "Multi-tenant Blogging Platform",
    desc: "Multi-tenant blogs with Clerk auth, orgs, subdomains, RBAC, and isolated workspaces.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Brainify",
    subtitle: "A Second Brain",
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
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Projects() {
  return (
    <section className="w-full py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        {/* Perfect Editorial Grid */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid grid-cols-1 md:grid-cols-2 
            gap-6
          "
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 140, damping: 12 }}
              className="
                border border-black/10 dark:border-white/20
                rounded-xl p-8 
                bg-white dark:bg-[#111]
                shadow-sm
                hover:shadow-lg
                transition-all duration-300
              "
            >
              {/* Title Row */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {proj.subtitle}
                  </p>
                </div>

                <div className="flex gap-3 text-gray-700 dark:text-gray-200">
                  <FiGithub size={20} />
                  <FiExternalLink size={20} />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-4">
                {proj.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {proj.tags.map((t, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 text-xs rounded-full 
                      bg-gray-100 dark:bg-white/10 
                      border border-black/10 dark:border-white/10
                      text-gray-700 dark:text-gray-200
                    "
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
