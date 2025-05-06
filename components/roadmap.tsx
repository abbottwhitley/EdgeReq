"use client"

import { useEffect, useRef } from "react"

export default function Roadmap() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".fade-up")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible")
              }, index * 300)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current)
      }
    }
  }, [])

  return (
    <section id="roadmap" className="roadmap">
      <div className="container mx-auto px-4 relative z-10">
        <div className="section-title">
          <h2>Product Roadmap</h2>
          <p>Our strategic plan for developing and growing ReqSecure over the next three phases.</p>
        </div>

        <div ref={timelineRef} className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content fade-up">
              <h3 className="text-xl font-bold text-primary mb-2">Phase 1: MVP (3-6 months)</h3>
              <div className="text-sm text-gray-500 mb-4">Core Functionality</div>
              <ul className="list-disc pl-5">
                <li className="mb-2">Requirements Upload</li>
                <li className="mb-2">Automated Analysis</li>
                <li className="mb-2">Basic Reporting</li>
                <li className="mb-2">User-friendly Interface</li>
                <li className="mb-2">Early Adopter Program</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content fade-up fade-in-delay-1">
              <h3 className="text-xl font-bold text-primary mb-2">Phase 2: Growth (6-12 months)</h3>
              <div className="text-sm text-gray-500 mb-4">Enhanced Features</div>
              <ul className="list-disc pl-5">
                <li className="mb-2">Integration with Requirements Management Tools</li>
                <li className="mb-2">Customizable Rules Engine</li>
                <li className="mb-2">NLP Enhancements</li>
                <li className="mb-2">Risk Prioritization</li>
                <li className="mb-2">API Access</li>
                <li className="mb-2">Role-Based Access Control</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-content fade-up fade-in-delay-2">
              <h3 className="text-xl font-bold text-primary mb-2">Phase 3: Advanced (12+ months)</h3>
              <div className="text-sm text-gray-500 mb-4">Enterprise Features</div>
              <ul className="list-disc pl-5">
                <li className="mb-2">Machine Learning for Risk Prediction</li>
                <li className="mb-2">Vulnerability Database Integration</li>
                <li className="mb-2">Compliance Reporting</li>
                <li className="mb-2">Collaboration Features</li>
                <li className="mb-2">Multi-Language Support</li>
                <li className="mb-2">Scalability & Performance Enhancements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
