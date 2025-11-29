"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Engineering in Electronics and Telecommunication",
    institute: "Jadavpur University, Kolkata, India",
    year: "2022 – 2026",
    grade: "SGPA: 8.86/10",
  },
  {
    degree: "Senior Secondary (AISSCE)",
    institute: "Army School, Barrackpore",
    year: "2021",
    grade: "95.2%",
  },
  {
    degree: "Secondary (AISSE)",
    institute: "Army School, Barrackpore",
    year: "2019",
    grade: "95.8%",
  },
];

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <section id="education" className="w-full py-24">
      <div className="max-w-[900px] mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

        {/* Timeline Container */}
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative ml-6 border-l-2 border-white/20"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={child}
              className="relative pb-16 group"
            >
              {/* Node Dot */}
              <div className="
                absolute -left-3 top-0 w-6 h-6 rounded-full 
                bg-gradient-to-br from-purple-400 to-blue-400
                shadow-[0_0_20px_rgba(120,90,255,0.7)]
                border-2 border-white
                z-10
              " />

              {/* Content Card */}
              <div className="
                ml-10 p-6 rounded-xl
                bg-neutral-200 dark:bg-white/5 
                border border-white/10 
                backdrop-blur-xl shadow-lg
                transition-all duration-300
                hover:shadow-2xl hover:scale-[1.02]
              ">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 w-[80%]">
                    {item.degree}
                  </h3>
                  <span className="text-gray-800 dark:text-gray-300 text-sm whitespace-nowrap">
                    {item.year}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mt-1">
                  {item.institute}
                </p>

                <p className="text-gray-600 dark:text-gray-300 font-medium mt-3">
                  {item.grade}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
