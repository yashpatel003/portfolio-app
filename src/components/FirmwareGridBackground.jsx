import React, { useEffect, useState } from "react"
import { useTheme } from "../context/ThemeContext"

export default function FirmwareGridBackground() {
  const { theme } = useTheme()
  const isLight = theme === "light"
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.2)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base layer */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isLight ? "bg-lightbg" : "bg-[#071023]"
        }`}
      />

      {/* Moving grid layer */}
      <svg
        className={`absolute inset-0 ${
          isLight ? "opacity-[0.05]" : "opacity-[0.08]"
        } animate-gridMove`}
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          transition: "transform 0.1s linear",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="firmware-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M60 0H0V60"
              fill="none"
              stroke={isLight ? "#64748b" : "#00d1b2"}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#firmware-grid)" />
      </svg>

      {/* Circuit trace layer */}
      <svg
        className={`absolute inset-0 ${
          isLight ? "opacity-[0.04]" : "opacity-[0.05]"
        } animate-gridDrift`}
        style={{
          transform: `translateY(${offsetY * 0.8}px)`,
          transition: "transform 0.1s linear",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="pcb-lines" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M0 60 Q30 30 60 60 T120 60"
              fill="none"
              stroke={isLight ? "#94a3b8" : "#00d1b2"}
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pcb-lines)" />
      </svg>
    </div>
  )
}
