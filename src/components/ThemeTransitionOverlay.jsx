import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeTransitionOverlay() {
  const { theme } = useTheme()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    const timer = setTimeout(() => setShow(false), 400)
    return () => clearTimeout(timer)
  }, [theme])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] pointer-events-none bg-bg"
          style={{
            background:
              theme === 'dark'
                ? 'rgba(7,16,35,0.8)'
                : 'rgba(249,250,251,0.8)'
          }}
        />
      )}
    </AnimatePresence>
  )
}
