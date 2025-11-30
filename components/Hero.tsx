"use client";
import { BackgroundLines } from "./ui/background-lines";
import { Anton } from "next/font/google";
import { motion } from "motion/react";

const headingFont = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (

    <section
      id="hero"
    >
      <BackgroundLines
      >
        {/* Background gradient orbs */}

        <section className="relative min-h-screen flex items-center justify-center bg-zinc-200 dark:[background-image:radial-gradient(ellipse_at_left_top,_#1e293b_20%,_#0f172a_60%,_#000000_100%)] transition-colors duration-300 overflow-hidden px-4 sm:px-6">

          {/* Floating Shapes - Hidden on mobile */}
          <motion.div
            className="hidden sm:block absolute w-6 md:w-8 h-6 md:h-8 rounded-lg border-[8px] md:border-[12px] border-cyan-500/80 dark:border-cyan-400"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            style={{ top: "20%", left: "10%" }}
          />

          <motion.div
            className="hidden sm:block absolute w-4 md:w-5 h-4 md:h-5 rounded-md border-[6px] md:border-8 border-lime-300 dark:border-neon"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            style={{ top: "40%", right: "10%" }}
          />

          {/* Large Background Text - Hidden on mobile */}
          <motion.h1
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.075, scale: 1 }}
            transition={{ duration: 1.8 }}
            className="hidden sm:flex absolute text-[20vw] font-bold tracking-tight text-black dark:text-white pointer-events-none select-none justify-center items-center"
            style={{ opacity: 0.04 }}
          >
            DEVELOP<span className="text-red-500 dark:text-red-100 opacity-100">.</span>
          </motion.h1>

          {/* Side Text - Hidden on mobile */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block absolute left-4 lg:left-6 rotate-180 [writing-mode:vertical-lr] text-[10px] lg:text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400"
          >
            SOFTWARE DEVELoPER and ENGINEER BASED IN INDIA
          </motion.div>

          {/* Socials Right - Hidden on mobile */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:flex absolute right-4 lg:right-6 gap-3 lg:gap-4 rotate-180 [writing-mode:vertical-lr] text-xs lg:text-sm text-neutral-700 dark:text-neutral-300"
          >
            <a href="https://x.com/SaikatM88157644" target="_blank" className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-500">TWITTER</a>
            <a href="https://www.linkedin.com/in/saikatmandal29/" target="_blank" className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-500">LINKEDIN</a>
            <a href="https://www.github.com/SaikatMandal7672" target="_blank" className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-500">GITHUB</a>
          </motion.div>

          {/* Main Hero Text */}
          <div className="relative z-20 text-center px-4">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black dark:text-white"
            >
              Hello.
            </motion.h2>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black dark:text-white"
            >
              I am <span className="text-red-500 dark:text-red-400">Saikat</span>
            </motion.h2>
          </div>

          {/* Mobile Social Links */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:hidden absolute bottom-8 flex gap-6 text-sm text-neutral-700 dark:text-neutral-300 z-20"
          >
            <a href="https://x.com/SaikatM88157644" target="_blank" className="hover:text-neutral-500">Twitter</a>
            <a href="https://www.linkedin.com/in/saikatmandal29/" target="_blank" className="hover:text-neutral-500">LinkedIn</a>
            <a href="https://www.github.com/SaikatMandal7672" target="_blank" className="hover:text-neutral-500">GitHub</a>
          </motion.div>

          {/* Bottom Fade Mask */}
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-zinc-200 dark:from-black to-transparent pointer-events-none z-10" />
        </section>


      </BackgroundLines>
    </section>
  )
}
