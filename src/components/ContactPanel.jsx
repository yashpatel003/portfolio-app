import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactPanel({ open, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) setSubmitted(false)
  }, [open])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // In real deployment, integrate with Formspree, EmailJS, or a backend endpoint
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="ml-auto w-full md:w-96 bg-bg border-l border-white/6 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold btn-pulse">Contact Me</div>
                <div className="text-sm text-muted btn-pulse">Get in touch or request a case study</div>
              </div>
              <button onClick={onClose} className="text-muted">Close</button>
            </div>

            <div className="mt-6">
              {submitted ? (
                <div>
                  <div className="font-semibold">Thanks — your message was sent!</div>
                  <div className="text-sm text-muted mt-2">
                    I’ll reach out to you soon at {email}.
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={onClose}
                      className="px-4 py-2 rounded bg-accent text-black font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-muted">Name</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full mt-1 p-2 rounded bg-white/3 border border-white/6"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted">Email</label>
                    <input
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="w-full mt-1 p-2 rounded bg-white/3 border border-white/6"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted">Message</label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full mt-1 p-2 rounded bg-white/3 border border-white/6"
                    ></textarea>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded bg-accent text-black font-semibold"
                    >
                      Send
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 rounded border border-white/6"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-8 text-sm text-muted border-t border-white/10 pt-4">
              <div>Email: 
                <a href="mailto:yashjpatel2003@gmail.com" className="text-accent ml-1">
                  yashjpatel2003@gmail.com
                </a>
              </div>
              <div className="mt-2">
                GitHub:
                <a
                  href="https://github.com/yashpatel003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent ml-1"
                >
                  github.com/yashpatel003
                </a>
              </div>
              <div className="mt-2">
                LinkedIn:
                <a
                  href="https://linkedin.com/in/yash-patel-0b8753205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent ml-1"
                >
                  linkedin.com/in/yash-patel-0b8753205
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
