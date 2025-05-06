"use client"

import { useEffect, useRef } from "react"

export default function Solution() {
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const features = entry.target.querySelectorAll(".fade-up")
            features.forEach((feature, index) => {
              setTimeout(() => {
                feature.classList.add("visible")
              }, index * 200)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current)
      }
    }
  }, [])

  return (
    <section id="solution" className="solution">
      <div className="container mx-auto px-4 relative z-10">
        <div className="section-title">
          <h2>Our Solution</h2>
          <p>
            SmallBizAI democratizes enterprise-level AI capabilities through an intuitive, conversational interface that
            requires minimal technical knowledge or setup time.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="feature-card fade-up">
            <div className="feature-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Zero-Technical-Knowledge Required</h3>
            <p className="text-gray-600">
              Natural language interface that understands industry-specific terminology. No coding, prompt engineering,
              or technical setup needed.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-1">
            <div className="feature-icon">
              <i className="fas fa-desktop"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Unified Business Command Center</h3>
            <p className="text-gray-600">
              Single platform that connects to all business tools and data sources. Consolidated view of business health
              with proactive alerts.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-2">
            <div className="feature-icon">
              <i className="fas fa-industry"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Industry-Specific Intelligence</h3>
            <p className="text-gray-600">
              Pre-trained on small business operations in specific industries. Understands industry-specific workflows,
              terminology, and best practices.
            </p>
          </div>

          <div className="feature-card fade-up">
            <div className="feature-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Progressive Automation Journey</h3>
            <p className="text-gray-600">
              Starts with quick wins that show immediate value. Gradually introduces more advanced capabilities as users
              become comfortable.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-1">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Built-in Privacy & Compliance</h3>
            <p className="text-gray-600">
              Enterprise-grade security with small business usability. Transparent data usage policies in plain
              language.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-2">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Business Health Monitor</h3>
            <p className="text-gray-600">
              Real-time monitoring of key business metrics. Proactive alerts for concerning trends like declining sales
              or unusual expenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
