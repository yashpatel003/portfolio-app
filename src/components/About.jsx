import React from 'react'

export default function About() {
  return (
    <section id="about" className="card-bg p-6 rounded-2xl border border-white/6">
      <h2 className="text-xl font-semibold">About Me</h2>
      <p className="text-muted mt-3">
        I'm <span className="text-accent font-medium">Yash Patel</span>, a Firmware and Embedded
        Systems Engineer currently working at <span className="font-medium">eInfochips Pvt. Ltd.</span>.
        I specialize in building reliable embedded Linux platforms, Board Support Packages (BSPs),
        and device drivers for production hardware.
      </p>
      <p className="text-muted mt-3">
        My experience includes working with the <span className="font-medium">Yocto Project</span> for
        BSP customization, developing Linux device drivers, and performing kernel debugging using
        <span className="font-medium"> ftrace</span>, <span className="font-medium">GDB/KGDB</span>, and
        <span className="font-medium"> printk</span>. I’ve also contributed to Android frameworks and
        system-level debugging through <span className="font-medium">ADB</span> and
        <span className="font-medium"> Fastboot</span>.
      </p>
      <p className="text-muted mt-3">
        Recently, I engineered Bluetooth Low Energy (BLE) firmware and integrated LE Audio functionality
        on Nordic’s <span className="font-medium">nRF5340 Audio DK</span>, implementing LC3 codec support
        and multi-stream audio for low-latency wireless communication.
      </p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-white/2">
          <div className="text-sm text-muted">Toolchains & Workflow</div>
          <ul className="mt-2 text-sm text-muted list-disc list-inside">
            <li>Yocto / BitBake</li>
            <li>GCC / CMake / Conan</li>
            <li>Jenkins CI/CD & Git / Gerrit</li>
            <li>GDB, KGDB, ftrace</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg bg-white/2">
          <div className="text-sm text-muted">Hardware & Interfaces</div>
          <ul className="mt-2 text-sm text-muted list-disc list-inside">
            <li>ESP32, nRF5340, BeagleBone Black</li>
            <li>SPI, I²C, UART, BLE, LE Audio</li>
            <li>Android Devices / AOSP</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
