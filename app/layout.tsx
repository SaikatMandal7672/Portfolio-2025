import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Space_Grotesk, Anton } from "next/font/google";

import ThemeToggle from '@/components/ThemeToggle'
import SmoothScroll from '@/components/SmoothScroll'

const headingFont = Anton({
  subsets: ["latin"],
  weight: ["400"],
});
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saikat Mandal | Software Developer',
  description: 'Portfolio of Saikat Mandal - Software Developer & Engineering Student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-bg-page dark:bg-[#000000] text-neutral-900 dark:text-neutral-100 transition-colors duration-300`} suppressHydrationWarning>
        <SmoothScroll>
          {children}
          <ThemeToggle />
        </SmoothScroll>
      </body>
    </html>
  )
}
