import React from 'react'
import { FaCode, FaTools, FaMicrochip } from 'react-icons/fa'

const skills = [
  {
    icon: <FaCode />,
    title: 'Development',
    items: [
      'Firmware Development',
      'BSP & Device Tree Integration',
      'Linux Device Driver Development',
      'Android Debugging & Kernel Tuning',
      'Hardware–Software Interfacing'
    ]
  },
  {
    icon: <FaTools />,
    title: 'Build Systems & Tools',
    items: [
      'Yocto Project, BitBake',
      'CMake, Conan, Catch2',
      'Git, Gerrit, Jenkins CI/CD',
      'ADB & Fastboot',
      'Pytest for automation'
    ]
  },
  {
    icon: <FaMicrochip />,
    title: 'Hardware & Protocols',
    items: [
      'ESP32, nRF5340 Audio DK, BeagleBone Black',
      'Bluetooth LE & LE Audio (LC3 Codec)',
      'UART, SPI, I²C, CAN',
      'Sensor Integration (DHT11, LDR, Soil Moisture)',
      'Android Device Bring-up'
    ]
  }
]

export default function Skills() {
  return (
    <div className="card-bg p-6 rounded-2xl border border-white/6">
      <h3 className="text-lg font-semibold">Skills</h3>
      <div className="mt-5 space-y-4">
        {skills.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border border-white/6 hover:bg-white/3 transition duration-200"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="text-accent text-xl">{s.icon}</div>
              <div className="font-semibold">{s.title}</div>
            </div>
            <ul className="list-disc list-inside text-sm text-muted">
              {s.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
