import React from 'react'
import { motion } from 'framer-motion'
import { FaBluetooth, FaMicrochip, FaPython, FaJenkins } from 'react-icons/fa'

export default function CaseStudyBLEAudio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-6 lg:px-8 py-10"
    >
      <h1 className="text-3xl font-bold mb-2 text-accent">Bluetooth LE Audio Testing Device</h1>
      <p className="text-muted text-sm mb-8">
        Case Study — nRF5340 Audio DK · Firmware & Validation · LE Audio (LC3)
      </p>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
        <p className="text-muted">
          The goal of this project was to design and implement a BLE Audio testing device using
          Nordic’s nRF5340 Audio DK. The device acted as an LE Audio source capable of streaming
          multi-channel LC3-encoded audio over Bluetooth Low Energy. Alongside firmware development,
          a complete automation framework was built to validate BLE connections and audio quality
          across various test scenarios.
        </p>
      </section>

      {/* Architecture */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">System Architecture</h2>
        <div className="card-bg border border-white/6 rounded-xl p-5">
          <img
            src="/ble_audio_architecture.png"
            alt="BLE Audio Architecture Diagram"
            className="rounded-lg w-full border border-white/10"
          />
          <p className="text-muted text-sm mt-3">
            High-level system overview of the BLE Audio device, test host, and validation pipeline.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Technology Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 card-bg rounded-lg border border-white/6">
            <FaMicrochip className="text-accent text-2xl mb-2 mx-auto" />
            <div className="text-sm font-semibold">nRF5340 Audio DK</div>
            <div className="text-xs text-muted">Hardware Platform</div>
          </div>
          <div className="p-4 card-bg rounded-lg border border-white/6">
            <FaBluetooth className="text-accent text-2xl mb-2 mx-auto" />
            <div className="text-sm font-semibold">BLE / LE Audio</div>
            <div className="text-xs text-muted">LC3 Codec</div>
          </div>
          <div className="p-4 card-bg rounded-lg border border-white/6">
            <FaPython className="text-accent text-2xl mb-2 mx-auto" />
            <div className="text-sm font-semibold">Python + Pytest</div>
            <div className="text-xs text-muted">Automation</div>
          </div>
          <div className="p-4 card-bg rounded-lg border border-white/6">
            <FaJenkins className="text-accent text-2xl mb-2 mx-auto" />
            <div className="text-sm font-semibold">Jenkins CI</div>
            <div className="text-xs text-muted">Continuous Testing</div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Challenges & Solutions</h2>
        <div className="space-y-4 text-sm text-muted">
          <div>
            <strong>1. BLE Connection Stability:</strong> Addressed inconsistent pairing by tuning
            connection intervals and implementing adaptive retransmission in firmware.
          </div>
          <div>
            <strong>2. Audio Latency:</strong> Reduced latency through DMA-driven I²S transfers and
            optimized LC3 buffer management.
          </div>
          <div>
            <strong>3. Test Automation:</strong> Built Pytest-based framework for automated device
            discovery, flashing, and BLE connection validation integrated with Jenkins.
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Results</h2>
        <ul className="list-disc list-inside text-muted text-sm space-y-1">
          <li>Reduced manual validation time by 80% through automation.</li>
          <li>Validated multi-stream BLE Audio functionality across multiple peripherals.</li>
          <li>Improved firmware stability and reduced connection dropouts under heavy load.</li>
        </ul>
      </section>

      {/* Back Button */}
      <div className="mt-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/6 text-accent hover:bg-white/10 transition"
        >
          ← Back to Portfolio
        </a>
      </div>
    </motion.div>
  )
}
