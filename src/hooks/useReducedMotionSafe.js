import { useState, useEffect } from "react"

/**
 * Custom hook that returns true if user prefers reduced motion,
 * or if the device is likely low-power (mobile/tablet)
 */
export default function useReducedMotionSafe() {
  const [shouldReduce, setShouldReduce] = useState(false)

  useEffect(() => {
    // 1️⃣ Respect user OS setting
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // 2️⃣ Simple heuristic for low-power devices
    const isMobile =
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )

    // 3️⃣ Combine both
    setShouldReduce(prefersReducedMotion || isMobile)
  }, [])

  return shouldReduce
}
