import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ onContact }) {
  return (
    <section className="card-bg p-8 rounded-3xl border border-white/6 shadow-soft-lg">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="text-sm text-accent font-semibold mb-3">
            Firmware & Embedded Systems Engineer
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
            Hi, I'm <span className="text-accent">Yash Patel</span> — I design and
            develop Embedded Linux, BSPs, and Device Drivers for next-generation hardware.
          </h1>
          <p className="text-muted mt-4 max-w-2xl">
            Associate Engineer at eInfochips with experience in Yocto BSP customization, Linux
            device drivers, BLE Audio development, and Android system debugging. I enjoy creating
            efficient firmware and enabling reliable hardware–software integration.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/6 text-accent btn-pulse"
            >
              View Projects
            </a>
            <button
              onClick={onContact}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-black font-semibold btn-pulse"
            >
              Get in Touch
            </button>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/6 text-muted btn-pulse"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-80"
        >
          <div className="p-4 rounded-2xl border border-white/6">
            <div className="text-xs text-muted">Featured</div>
            <div className="mt-2 font-semibold text-lg">
              Bluetooth LE Audio & Yocto BSP Development
            </div>
            <div className="mt-3 text-sm text-muted">
              Worked on BLE Audio firmware for nRF5340 Audio DK and custom Yocto BSPs for ARM-based
              platforms including driver and kernel optimization.
            </div>
            <div className="mt-4 flex gap-2">
              <div className="text-sm px-3 py-1 rounded bg-white/3">Yocto</div>
              <div className="text-sm px-3 py-1 rounded bg-white/3">BLE Audio</div>
              <div className="text-sm px-3 py-1 rounded bg-white/3">Drivers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
