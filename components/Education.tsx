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
    <section id="education" className="w-full py-12 sm:py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">Education</h2>

        {/* Timeline Container */}
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative ml-3 sm:ml-6 border-l-2 border-white/20"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={child}
              className="relative pb-8 sm:pb-12 md:pb-16 group"
            >
              {/* Node Dot */}
              <div className="absolute -left-2 sm:-left-3 top-0 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 shadow-[0_0_20px_rgba(120,90,255,0.7)] border-2 border-white z-10" />

              {/* Content Card */}
              <div className="ml-6 sm:ml-8 md:ml-10 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-neutral-200 dark:bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100 sm:w-[75%]">
                    {item.degree}
                  </h3>
                  <span className="text-gray-800 dark:text-gray-300 text-xs sm:text-sm whitespace-nowrap">
                    {item.year}
                  </span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  {item.institute}
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium mt-2 sm:mt-3">
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
