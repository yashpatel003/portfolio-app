import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar({ onContact }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="w-full border-b border-white/6 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-glow flex items-center justify-center text-accent font-bold">
            FE
          </div>
          <div>
            <div className="font-semibold">Yash Patel</div>
            <div className="text-xs text-muted">Firmware & Embedded Systems</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#projects" className="text-sm text-muted hover:text-accent">Projects</a>
          <a href="#about" className="text-sm text-muted hover:text-accent">About</a>
          <button
            onClick={onContact}
            className="text-sm px-3 py-1 rounded-md border border-white/6 text-accent btn-pulse"
          >
            Contact
          </button>
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-md border border-white/10 hover:bg-white/10 btn-pulse"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <FaSun className="text-accent" /> : <FaMoon className="text-lighttext" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
