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
          <p>Our strategic plan for developing and growing EdgeReq Analytics over the next three phases.</p>
        </div>

        <div ref={timelineRef} className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content fade-up">
              <h3 className="text-xl font-bold text-primary mb-2">Phase 1: MVP (Months 1-6)</h3>
              <div className="text-sm text-gray-500 mb-4">Core Functionality</div>
              <ul className="list-disc pl-5">
                <li className="mb-2">User login via SSO</li>
                <li className="mb-2">Document Upload and Parsing</li>
                <li className="mb-2">Automated Requirements Analysis</li>
                <li className="mb-2">Basic User Interface</li>
                <li className="mb-2">Early Adopter Program</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content fade-up fade-in-delay-1">
              <h3 className="text-xl font-bold text-primary mb-2">Phase 2: Collaborative Modeling (Months 7-12)</h3>
              <div className="text-sm text-gray-500 mb-4">Enhanced Features</div>
              <ul className="list-disc pl-5">
                <li className="mb-2">Diagram editor</li>
                <li className="mb-2">Real-time multi-user editing</li>
                <li className="mb-2">Refine rule engine</li>
                <li className="mb-2">Customizable rule sets</li>
                <li className="mb-2">Enhanced reporting</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-content fade-up fade-in-delay-2">
              <h3 className="text-xl font-bold text-primary mb-2">Phase 3: Integration & Automation (Year 2)</h3>
              <div className="text-sm text-gray-500 mb-4">Enterprise Features</div>
              <ul className="list-disc pl-5">
                <li className="mb-2">ALM tool integration</li>
                <li className="mb-2">Compliance mapping engine</li>
                <li className="mb-2">API access for CI/CD pipelines</li>
                <li className="mb-2">Advanced analytics</li>
                <li className="mb-2">Enterprise-grade security</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content fade-up fade-in-delay-3">
              <h3 className="text-xl font-bold text-primary mb-2">Phase 4: Enterprise Scaling (Year 3+)</h3>
              <div className="text-sm text-gray-500 mb-4">Advanced Capabilities</div>
              <ul className="list-disc pl-5">
                <li className="mb-2">Advanced permissions and role delegation</li>
                <li className="mb-2">Reporting dashboards</li>
                <li className="mb-2">API access for enterprise workflows</li>
                <li className="mb-2">AI-assisted threat suggestion</li>
                <li className="mb-2">Multi-language document parsing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
