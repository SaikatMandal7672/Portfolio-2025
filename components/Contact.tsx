'use client'

import { useState } from 'react'

export default function Contact() {
  const [showToast, setShowToast] = useState(false)

  const email = 'saikatmandal290103@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2500)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const contacts = [
    {
      href: 'https://github.com/SaikatMandal7672',
      label: 'GitHub',
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      href: 'https://linkedin.com/in/saikat-mandal',
      label: 'LinkedIn',
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      isEmail: true,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-bg-surface dark:bg-[#000000] relative">
      {/* Toast Notification */}
      <div
        className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium shadow-lg transition-all duration-300 flex items-center gap-2 ${
          showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Email copied to clipboard!
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-500/5 dark:to-purple-500/5 pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <h2 className="mb-6 sm:mb-8 md:mb-12 animate-fade-in-up dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Let's Connect</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '100ms' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 flex-wrap">
          {contacts.map((contact, idx) => (
            contact.isEmail ? (
              <button
                key={idx}
                onClick={copyEmail}
                className="flex flex-col items-center gap-1.5 sm:gap-2 group animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${200 + idx * 100}ms` }}
              >
                <div className="p-3 sm:p-4 bg-neutral-100 dark:bg-[#1A1A1A] rounded-full group-hover:bg-primary-100 dark:group-hover:bg-slate-800/60 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 shadow-md group-hover:shadow-lg border border-neutral-200 dark:border-slate-700">
                  <div className="text-neutral-900 dark:text-neutral-100 group-hover:text-primary-500 dark:group-hover:text-purple-400 transition-colors duration-300 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                    {contact.icon}
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-primary-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {contact.label}
                </span>
              </button>
            ) : (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 sm:gap-2 group animate-fade-in-up"
                style={{ animationDelay: `${200 + idx * 100}ms` }}
              >
                <div className="p-3 sm:p-4 bg-neutral-100 dark:bg-[#1A1A1A] rounded-full group-hover:bg-primary-100 dark:group-hover:bg-slate-800/60 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 shadow-md group-hover:shadow-lg border border-neutral-200 dark:border-slate-700">
                  <div className="text-neutral-900 dark:text-neutral-100 group-hover:text-primary-500 dark:group-hover:text-purple-400 transition-colors duration-300 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                    {contact.icon}
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-primary-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {contact.label}
                </span>
              </a>
            )
          ))}
        </div>

        <footer className="pt-6 sm:pt-8 md:pt-12 border-t border-neutral-300 dark:border-neutral-600 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors duration-300">
            © 2025 Saikat Mandal. Built with Next.js & Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  )
}
