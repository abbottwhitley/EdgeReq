"use client"

import { useEffect, useRef } from "react"

export default function Features() {
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
    <section id="features" className="solution">
      <div className="container mx-auto px-4 relative z-10">
        <div className="section-title">
          <h2>Key Features</h2>
          <p>
            ReqSecure provides a comprehensive solution for identifying and eliminating security vulnerabilities at the
            requirements stage.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="feature-card fade-up">
            <div className="feature-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Automated Analysis</h3>
            <p className="text-gray-600">
              AI-powered and rule-based analysis of requirements documents to identify potential security
              vulnerabilities.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-1">
            <div className="feature-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Risk Scoring</h3>
            <p className="text-gray-600">
              Quantify security risks with a comprehensive scoring system to prioritize mitigation efforts.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-2">
            <div className="feature-icon">
              <i className="fas fa-clipboard-check"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Actionable Recommendations</h3>
            <p className="text-gray-600">
              Clear, specific guidance on how to address identified vulnerabilities in your requirements.
            </p>
          </div>

          <div className="feature-card fade-up">
            <div className="feature-icon">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Integration Capabilities</h3>
            <p className="text-gray-600">
              Seamlessly integrate with popular development tools like Jira, Azure DevOps, and more.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-1">
            <div className="feature-icon">
              <i className="fas fa-sliders-h"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Customizable Rules</h3>
            <p className="text-gray-600">
              Tailor security rules to your specific industry and compliance needs with our flexible rule engine.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-2">
            <div className="feature-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Comprehensive Reporting</h3>
            <p className="text-gray-600">
              Generate detailed reports for stakeholders, auditors, and compliance purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
