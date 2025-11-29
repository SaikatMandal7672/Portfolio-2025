'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = ['hero', 'projects', 'skills', 'education', 'contact']

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-white/90 dark:bg-[#1A1A1A]/30 border border-neutral-300/50 dark:border-slate-700 rounded-full px-8 py-4 shadow-lg hover:shadow-2xl transition-all duration-300">
      <ul className="flex gap-8">
        {navItems.map((item, idx) => (
          <li key={item.id} style={{ animationDelay: `${idx * 50}ms` }} className="animate-fade-in">
            <button
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
                activeSection === item.id
                  ? 'text-primary-500 bg-primary-100 dark:bg-slate-800/60 dark:text-purple-300'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection !== item.id && (
                <div className="absolute inset-0 bg-neutral-100 dark:bg-slate-700/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
