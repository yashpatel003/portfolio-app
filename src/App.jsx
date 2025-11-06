import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import GlowEffect from './components/GlowEffect'
import ContactPanel from './components/ContactPanel'
import CaseStudyBLEAudio from './pages/CaseStudyBLEAudio'
import CaseStudyIoT from './pages/CaseStudyIoT'
import SidebarNav from './components/SidebarNav'
import PageTransition from './components/PageTransition'
import PageLoaderBar from './components/PageLoaderBar'
import GlowEffect from './components/GlowEffect'
import FirmwareGridBackground from './components/FirmwareGridBackground'
import ThemeTransitionOverlay from './components/ThemeTransitionOverlay'


export default function App() {
  const [isContactOpen, setContactOpen] = useState(false)

  return (
    <Router>
      {/* ✅ Global loader bar appears above all routes */}
      <PageLoaderBar />  
      <ThemeTransitionOverlay />

      {/* 🌟 Soft glow layer */}
      <GlowEffect /> 
      {/* 🧩 Subtle animated grid background */}
      <FirmwareGridBackground />

      <div className="min-h-screen flex">
        {/* ✅ Sidebar visible on desktop and collapsible on mobile */}
        <SidebarNav onContact={() => setContactOpen(true)} />

        {/* ✅ Main content shifted to make space for sidebar */}
        <div className="flex-1 lg:ml-56">
          <Navbar onContact={() => setContactOpen(true)} />

          <PageTransition>
            <Routes>
              <Route
                path="/"
                element={
                  <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                    <Hero onContact={() => setContactOpen(true)} />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                      <div className="lg:col-span-2 space-y-8">
                        <About />
                        <Projects />
                      </div>
                      <aside className="lg:col-span-1 space-y-6">
                        <Skills />
                        <div className="card-bg p-5 rounded-2xl shadow-soft-lg border border-white/6">
                          <h3 className="text-lg font-semibold">Quick Contact</h3>
                          <p className="text-sm text-muted mt-2">
                            Open the full contact panel to send a message or request.
                          </p>
                          <div className="mt-4">
                            <button
                              onClick={() => setContactOpen(true)}
                              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent text-black font-semibold btn-pulse"
                            >
                              Message Me
                            </button>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </main>
                }
              />
              <Route path="/case-study/ble-audio" element={<CaseStudyBLEAudio />} />
              <Route path="/case-study/iot-monitor" element={<CaseStudyIoT />} />
            </Routes>
          </PageTransition>

          <Footer onContact={() => setContactOpen(true)} />
          <ContactPanel open={isContactOpen} onClose={() => setContactOpen(false)} />
        </div>
      </div>
    </Router>
  )
}
