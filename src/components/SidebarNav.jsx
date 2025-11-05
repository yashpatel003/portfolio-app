import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaBluetooth, FaMicrochip, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

export default function SidebarNav({ onContact }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close sidebar when route changes
  useEffect(() => {
    setOpen(false)
  }, [location])

  const navItems = [
    { name: 'Portfolio', path: '/', icon: <FaHome /> },
    { name: 'BLE Audio', path: '/case-study/ble-audio', icon: <FaBluetooth /> },
    { name: 'IoT Monitor', path: '/case-study/iot-monitor', icon: <FaMicrochip /> }
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-56 bg-[#0b1620]/95 border-r border-white/10 shadow-xl p-5 z-40 glow-border">
        <div className="text-accent font-bold text-lg mb-6">Yash Patel</div>
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                location.pathname === item.path
                  ? 'bg-accent text-black font-semibold'
                  : 'text-muted hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={onContact}
          className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent text-black font-semibold"
        >
          <FaEnvelope /> Contact
        </button>
      </aside>

      {/* Mobile Topbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-40 bg-bg border-b border-white/10 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-accent font-semibold text-lg">Yash Patel</div>
          <button
            onClick={() => setOpen(!open)}
            className="text-accent text-xl focus:outline-none"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {open && (
          <div className="bg-[#0b1620]/95 border-t border-white/10 px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-sm ${
                  location.pathname === item.path
                    ? 'text-accent font-semibold'
                    : 'text-muted hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                onContact()
                setOpen(false)
              }}
              className="block w-full text-left text-accent mt-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </>
  )
}
