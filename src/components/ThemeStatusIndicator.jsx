import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

export default function ThemeStatusIndicator() {
  const { theme } = useTheme()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const timer = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [theme])

  const isLight = theme === "light"
  const bg = isLight
    ? "bg-yellow-200 text-gray-800"
    : "bg-gray-800 text-gray-100"

  const label = isLight ? "☀️ Light Mode" : "🌙 Dark Mode"

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed bottom-6 right-28 px-4 py-2 rounded-full shadow-lg ${bg} z-[2001] select-none`}
        >
          {label}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
