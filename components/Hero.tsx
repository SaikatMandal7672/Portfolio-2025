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

        <section className="relative min-h-screen flex items-center justify-center bg-zinc-200 dark:[background-image:radial-gradient(ellipse_at_left_top,_#1e293b_20%,_#0f172a_60%,_#000000_100%)] transition-colors duration-300 overflow-hidden px-6
    ">

          {/* Floating Shapes */}
          <motion.div
            className="absolute w-8 h-8 rounded-lg  border-[12px] border-cyan-500/80 dark:border-cyan-400"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            style={{ top: "20%", left: "15%" }}
          />

          <motion.div
            className="absolute w-5 h-5 rounded-md border-8 border-lime-300 dark:border-neon"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            style={{ top: "40%", right: "20%" }}
          />

          {/* Large Background Text */}
          <motion.h1
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.075, scale: 1 }}
            transition={{ duration: 1.8 }}
            className="absolute text-[20vw] font-bold tracking-tight text-black dark:text-white pointer-events-none select-none flex justify-center items-center"
            style={{ opacity: 0.04 }}
          >
            DEVELOP<span className="text-red-500 dark:text-red-100 opacity-100">.</span>
          </motion.h1>

          {/* Side Text */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute left-6 rotate-180 [writing-mode:vertical-lr] text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400"
          >
            SOFTWARE DEVELoPER and ENGINEER BASED   IN INDIA
          </motion.div>

          {/* Socials Right */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute right-6 flex  gap-4 rotate-180 [writing-mode:vertical-lr] text-sm  text-neutral-700 dark:text-neutral-300"
          >
            <a href="https://x.com/SaikatM88157644" target="_blank" className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-500">TWITTER</a>
            <a href="https://www.linkedin.com/in/saikatmandal29/"  target="_blank" className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-500">LINKEDIN</a>
            <a href="https://www.github.com/SaikatMandal7672" target="_blank" className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-500">GITHUB</a>
          </motion.div>

          {/* Main Hero Text */}
          <div className= {`relative z-10 text-center`}>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl font-extrabold text-black dark:text-white"
            >
              Hello.
            </motion.h2>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="text-5xl sm:text-7xl font-extrabold text-black dark:text-white"
            >
              I am <span className="text-red-500 dark:text-red-400">Saikat</span>
            </motion.h2>
          </div>
        </section>


      </BackgroundLines>
    </section>
  )
}
