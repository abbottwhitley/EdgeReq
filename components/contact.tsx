"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    })

    // Simulate form submission
    setTimeout(() => {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully! We'll be in touch soon." },
      })

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      })

      // Reset form status after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        })
      }, 5000)
    }, 2000)
  }

  return (
    <section id="contact" className="contact py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-white">Get In Touch</h2>
          <p className="text-white opacity-90">
            Interested in learning more about RequirementGuard? Contact us today for a demo or to discuss your security
            needs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Company"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="I'm interested in learning more about RequirementGuard..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full py-3 px-6 rounded-full text-white font-semibold transition-colors duration-300 ${
                status.submitting ? "bg-gray-500" : status.submitted ? "bg-green-500" : "bg-primary hover:bg-secondary"
              }`}
            >
              {status.submitting ? "Sending..." : status.submitted ? "Message Sent!" : "Send Message"}
            </button>

            {status.info.msg && (
              <div className={`mt-4 text-center ${status.info.error ? "text-red-500" : "text-green-500"}`}>
                {status.info.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
