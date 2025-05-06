"use client"

import { useEffect, useRef } from "react"

export default function TargetMarket() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".fade-up")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible")
              }, index * 200)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardsRef.current) {
      observer.observe(cardsRef.current)
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current)
      }
    }
  }, [])

  return (
    <section id="market" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Who Benefits From EdgeReq Analytics</h2>
          <p>
            Our solution is designed for organizations and professionals who prioritize security early in the software
            development lifecycle.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="validation-card fade-up">
            <div className="text-sm text-gray-500 mb-2">Startups & Mid-sized DevOps Teams</div>
            <div className="quote text-lg mb-6">
              Teams with limited security resources who need to implement security best practices efficiently.
            </div>
            <div className="font-semibold text-primary">
              Get enterprise-grade security analysis without a large security team.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-1">
            <div className="text-sm text-gray-500 mb-2">Security-Conscious Engineering Teams</div>
            <div className="quote text-lg mb-6">
              Teams adopting secure SDLC practices who want to shift security left in their development process.
            </div>
            <div className="font-semibold text-primary">
              Identify and address security issues at the requirements stage, before coding begins.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-2">
            <div className="text-sm text-gray-500 mb-2">Compliance-Driven Organizations</div>
            <div className="quote text-lg mb-6">
              Organizations working within regulatory frameworks like GDPR, HIPAA, PCI-DSS, or industry-specific
              standards.
            </div>
            <div className="font-semibold text-primary">
              Ensure compliance requirements are addressed from the earliest stages of development.
            </div>
          </div>

          <div className="validation-card fade-up">
            <div className="text-sm text-gray-500 mb-2">Software Development Consultancies</div>
            <div className="quote text-lg mb-6">
              Consultancies that want to deliver more secure software solutions to their clients.
            </div>
            <div className="font-semibold text-primary">
              Differentiate your services by offering built-in security analysis from the requirements phase.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-1">
            <div className="text-sm text-gray-500 mb-2">Security Auditors</div>
            <div className="quote text-lg mb-6">
              Professionals responsible for evaluating and ensuring the security of software systems.
            </div>
            <div className="font-semibold text-primary">
              Streamline the audit process with comprehensive security documentation from the start.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-2">
            <div className="text-sm text-gray-500 mb-2">Organizations Preventing Security Flaws</div>
            <div className="quote text-lg mb-6">
              Teams focused on preventing security flaws early in the design phase to reduce costs and risks.
            </div>
            <div className="font-semibold text-primary">
              Catch and fix security issues when they're least expensive to address.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
