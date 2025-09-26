'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 text-foreground backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">My Portfolio</h1>

        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#competitions" className="hover:text-primary transition-colors">Competitions</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>

          {mounted && (
            <button
              onClick={handleThemeToggle}
              className="ml-4 p-2 rounded-full bg-secondary border-2 border-border text-primary hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌙' : '🌞'}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
