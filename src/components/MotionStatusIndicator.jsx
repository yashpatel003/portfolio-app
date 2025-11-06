import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMotion } from "../context/MotionContext"
import { useTheme } from "../context/ThemeContext"

export default function MotionStatusIndicator() {
  const { reduceMotion } = useMotion()
  const { theme } = useTheme()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const timer = setTimeout(() => setVisible(false), 2500)
    return () => clearTimeout(timer)
  }, [reduceMotion])

  const isLight = theme === "light"
  const bg = isLight
    ? reduceMotion
      ? "bg-gray-300 text-gray-700"
      : "bg-emerald-300 text-gray-800"
    : reduceMotion
      ? "bg-gray-800 text-gray-300"
      : "bg-emerald-600 text-white"

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed bottom-6 right-10 px-4 py-2 rounded-full shadow-lg ${bg} z-[2000] select-none`}
        >
          {reduceMotion ? "Motion OFF" : "Motion ON"}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
