import React from 'react'
import { motion } from 'framer-motion'
import { FaMicrochip, FaCloud, FaWifi } from 'react-icons/fa'

export default function CaseStudyIoT() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-6 lg:px-8 py-10"
    >
      <h1 className="text-3xl font-bold mb-2 text-accent">
        Smart Environmental Monitoring & Control System
      </h1>
      <p className="text-muted text-sm mb-8">
        Case Study — ATmega328P + NodeMCU (ESP8266) · IoT Cloud Monitoring
      </p>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
        <p className="text-muted">
          This project focuses on developing an IoT-based environmental monitoring and control
          system for real-time tracking of temperature, humidity, and soil moisture. The system
          uses ATmega328P and NodeMCU (ESP8266) to collect sensor data and transmit it to the
          Blynk cloud platform, allowing users to monitor and automate devices remotely.
        </p>
      </section>

      {/* Architecture */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">System Architecture</h2>
        <div className="card-bg border border-white/6 rounded-xl p-5">
          <img
            src="/iot_monitor_architecture.png"
            alt="IoT Monitoring Architecture Diagram"
            className="rounded-lg w-full border border-white/10"
          />
          <p className="text-muted text-sm mt-3">
            Architecture showing sensor integration with ATmega328P, communication with NodeMCU via
            UART/I²C, and cloud link to Blynk for data visualization and control.
          </p>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Technology Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 card-bg rounded-lg border border-white/6">
            <FaMicrochip className="text-accent text-2xl mb-2 mx-auto" />
            <div className="text-sm font-semibold">ATmega328P</div>
            <div className="text-xs text-muted">Sensor Controller</div>
          </div>
          <div className="p-4 card-bg rounded-lg border border-white/6">
            <FaWifi className="text-accent text-2xl mb-2 mx-auto" />
            <div className="text-sm font-semibold">ESP8266 (NodeMCU)</div>
            <div className="text-xs text-muted">Wi-Fi Communication</div>
          </div>
          <div className="p-4 card-bg rounded-lg border border-white/6">
            <FaCloud className="text-accent text-2xl mb-2 mx-auto" />
            <div className="text-sm font-semibold">Blynk Cloud</div>
            <div className="text-xs text-muted">IoT Platform</div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Results</h2>
        <ul className="list-disc list-inside text-muted text-sm space-y-1">
          <li>Enabled continuous remote monitoring via mobile app dashboard.</li>
          <li>Improved automation efficiency by auto-triggering irrigation and lighting.</li>
          <li>Delivered a reliable, low-cost prototype suitable for small-scale smart agriculture.</li>
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
