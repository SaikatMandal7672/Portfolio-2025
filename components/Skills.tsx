"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming Languages",
    color: "from-purple-500 to-purple-300",
    items: ["JavaScript", "TypeScript", "C++", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    color: "from-blue-500 to-blue-300",
    items: ["React.js", "Next.js", "TS Monorepos", "Langchain", "Express.js"],
  },
  {
    title: "Databases",
    color: "from-green-500 to-green-300",
    items: ["MongoDB", "PostgreSQL", "QdrantDB"],
  },
  {
    title: "Tools & Technologies",
    color: "from-yellow-500 to-yellow-300",
    items: ["Prisma ORM", "Mongoose", "GitHub", "GitHub Actions", "Docker"],
  },
];

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const child = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24">
      <div className="max-w-[1280px] mx-auto px-48">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid grid-cols-1 md:grid-cols-2 
            gap-8 
          "
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={child}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 140, damping: 14 }}
              className="
                p-8 rounded-2xl 
                bg-zinc-200 dark:bg-white/5 
                border border-white/10 
                backdrop-blur-xl 
                shadow-lg
                transition-all
              "
            >
              {/* Title + Accent Bar */}
              <div className="mb-6 flex items-center gap-3">
                <motion.div
                  className={`w-2 h-10 rounded-full bg-gradient-to-b ${skill.color}`}
                />

                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 ">
                  {skill.title}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-1.5 text-sm 
                      rounded-lg 
                      bg-neutral-100 dark:bg-white/10 
                      border border-white dark:border-white/10
                      text-neutral-700 dark:text-neutral-100
                      shadow-sm
                    "
                  >
                    {item}
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
