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
            EdgeReq Analytics is a SaaS solution that proactively identifies and mitigates security risks in software
            requirements <em>before</em> code is written, reducing costs and enhancing security.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="feature-card fade-up">
            <div className="feature-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Proactive Requirements Analysis</h3>
            <p className="text-gray-600">
              Analyze requirements documents before code is written to identify potential security vulnerabilities early
              in the SDLC.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-1">
            <div className="feature-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Automated Security Validation</h3>
            <p className="text-gray-600">
              AI-powered and rule-based analysis automatically identifies potential weaknesses in your requirements.
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
            <h3 className="text-xl font-bold mb-4">SDLC Integration</h3>
            <p className="text-gray-600">
              Seamlessly integrate with popular development tools like Jira, Azure DevOps, and other ALM tools.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-1">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Supply Chain Security</h3>
            <p className="text-gray-600">
              Analyze requirements for dependencies and third-party components to identify potential supply chain
              vulnerabilities.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-2">
            <div className="feature-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Compliance Support</h3>
            <p className="text-gray-600">
              Generate detailed reports for stakeholders, auditors, and compliance with regulatory frameworks.
            </p>
          </div>

          <div className="feature-card fade-up">
            <div className="feature-icon">
              <i className="fas fa-sliders-h"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Customizable Rule Sets</h3>
            <p className="text-gray-600">
              Tailor security rules to your specific industry and compliance needs with our flexible rule engine.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-1">
            <div className="feature-icon">
              <i className="fas fa-user-shield"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">User-Friendly Interface</h3>
            <p className="text-gray-600">
              Intuitive interface designed for both security experts and developers to easily understand and act on
              findings.
            </p>
          </div>

          <div className="feature-card fade-up fade-in-delay-2">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Reporting and Metrics</h3>
            <p className="text-gray-600">
              Comprehensive reports and dashboards to track security improvements and demonstrate ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
