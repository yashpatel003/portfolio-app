
import React from "react"
import { motion } from "framer-motion"

export default function FadeInSection({ children, delay = 0 }) {
  return (
    <motion.div
      className="section-glow"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
