import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const projects = [
  {
    id: 'ble-audio',
    title: 'Bluetooth Low Energy Testing Device with LE Audio',
    summary:
      'Developed embedded firmware in C for the nRF5340 Audio DK enabling LE Audio source functionality with integrated LC3 codec support.',
    details: [
      'Implemented BLE Audio protocol stack (GAP, GATT, ATT) supporting multi-stream, low-latency wireless audio.',
      'Built an automated testing framework using Python (Pytest) for flashing, secure pairing, connection stability, and audio-stream validation.',
      'Integrated Jenkins CI/CD pipelines with Conan dependency management to automate builds and ensure reproducibility.',
      'Performed kernel-level debugging and optimized firmware performance for stable BLE connections.'
    ],
    tags: ['BLE Audio', 'Firmware C', 'Python Pytest', 'Jenkins CI', 'Conan']
  },
  {
    id: 'env-monitor',
    title: 'Smart Environmental Monitoring & Control System',
    summary:
      'Designed an IoT-based monitoring and control system using ATmega328P + NodeMCU (ESP8266) for real-time environmental sensing.',
    details: [
      'Interfaced DHT11, soil-moisture, and LDR sensors via UART, I²C, and SPI protocols to ensure efficient, reliable data acquisition.',
      'Transmitted sensor data to a Blynk IoT mobile app for cloud-based monitoring and remote control.',
      'Implemented automation logic for irrigation and lighting based on sensor thresholds.',
      'Optimized low-power modes on NodeMCU to extend device runtime in remote deployments.'
    ],
    tags: ['IoT', 'ESP8266', 'ATmega328P', 'UART/I²C/SPI', 'Blynk Cloud']
  }
]

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <section id="projects" className="space-y-4">
      <h3 className="text-xl font-semibold">Selected Projects</h3>

      {/* 🧩 Animated grid container with staggered children */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >

        {projects.map((p) => (
          <motion.article
            key={p.id}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -4 }}
            className="card-bg p-5 rounded-xl border border-white/6 transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-sm text-muted mt-2">{p.summary}</p>
              </div>
              <button
                onClick={() => toggleExpand(p.id)}
                className="text-accent ml-2 mt-1"
                aria-label="Toggle details"
              >
                {expanded === p.id ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            <AnimatePresence>
              {expanded === p.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="list-disc list-inside text-sm text-muted mt-3 space-y-1">
                    {p.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>

                  {/* ✅ Case Study Links */}
                  {p.id === 'ble-audio' && (
                    <a
                      href="/case-study/ble-audio"
                      className="mt-4 inline-block text-sm text-accent hover:text-white transition"
                    >
                      → Read Full Case Study
                    </a>
                  )}
                  {p.id === 'env-monitor' && (
                    <a
                      href="/case-study/iot-monitor"
                      className="mt-4 inline-block text-sm text-accent hover:text-white transition"
                    >
                      → Read Case Study
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-white/3">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
