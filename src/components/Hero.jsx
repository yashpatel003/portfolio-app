import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Hero({ onContact }) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY * 0.2) // adjust speed (0.1–0.3 range looks best)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="card-bg p-8 rounded-3xl border border-white/6 shadow-soft-lg overflow-hidden relative"
      style={{ transform: `translateY(${offsetY * -0.3}px)` }}  // slow opposite movement
    >
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <motion.div
            className="text-sm text-accent font-semibold mb-3"
            style={{ transform: `translateY(${offsetY * 0.1}px)` }}
          >
            Firmware & Embedded Systems
          </motion.div>

          <motion.h1
            className="text-3xl lg:text-4xl font-bold leading-tight"
            style={{
              transform: `translateY(${offsetY * -0.15}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            I build reliable embedded systems — Yocto BSPs, Kernel Drivers, Board Bring-ups
          </motion.h1>

          <motion.p
            className="text-muted mt-4 max-w-2xl"
            style={{
              transform: `translateY(${offsetY * -0.1}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            Specializing in low-level debugging, device-tree & driver development, cross
            toolchains, and production-ready firmware. I turn schematics and silicon into
            dependable devices.
          </motion.p>

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
              Get in touch
            </button>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/6 text-muted btn-pulse"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* right-side feature card */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-80"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        >
          <div className="p-4 rounded-2xl border border-white/6">
            <div className="text-xs text-muted">Featured</div>
            <div className="mt-2 font-semibold text-lg">
              Custom Yocto BSP · Kernel Driver
            </div>
            <div className="mt-3 text-sm text-muted">
              NXP i.MX8 platform bring-up: bootloader tuning, device-tree overlays,
              and SPI driver integration.
            </div>
            <div className="mt-4 flex gap-2">
              <div className="text-sm px-3 py-1 rounded bg-white/3">Yocto</div>
              <div className="text-sm px-3 py-1 rounded bg-white/3">Kernel</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
