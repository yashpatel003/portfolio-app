import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function GlowEffect() {
  const location = useLocation()
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname + theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: isLight
            ? 'radial-gradient(circle at 40% 60%, rgba(100,116,139,0.1), transparent 70%)'
            : 'radial-gradient(circle at 30% 50%, rgba(0,209,178,0.1), transparent 60%)'
        }}
      />
    </AnimatePresence>
  )
}
