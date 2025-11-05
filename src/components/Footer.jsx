import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer({ onContact }) {
  return (
    <footer className="mt-14 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted text-center md:text-left">
          © {new Date().getFullYear()} Yash Patel — Firmware & Embedded Systems Engineer
        </div>
        <div className="flex items-center gap-4 text-accent">
          <a
            href="mailto:yashjpatel2003@gmail.com"
            className="hover:text-white transition"
            title="Email"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="https://github.com/yashpatel003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/yash-patel-0b8753205"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <button
            onClick={onContact}
            className="text-sm border border-white/10 px-3 py-1 rounded-lg hover:bg-white/10 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  )
}
