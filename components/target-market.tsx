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
          <h2>Who Benefits From ReqSecure</h2>
          <p>
            Our solution is designed for a variety of organizations and professionals in the software development
            ecosystem.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="validation-card fade-up">
            <div className="text-sm text-gray-500 mb-2">Software Development Teams</div>
            <div className="quote text-lg mb-6">
              Teams working on high-security projects in FinTech, Healthcare, Government, and other industries with
              critical data or high security needs.
            </div>
            <div className="font-semibold text-primary">
              Reduce development costs and improve security from the start.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-1">
            <div className="text-sm text-gray-500 mb-2">Security Professionals</div>
            <div className="quote text-lg mb-6">
              Security consultants, compliance officers, and security engineers responsible for ensuring software
              security.
            </div>
            <div className="font-semibold text-primary">
              Streamline security assessments and ensure compliance from the requirements stage.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-2">
            <div className="text-sm text-gray-500 mb-2">Project Managers</div>
            <div className="quote text-lg mb-6">
              Project managers responsible for overseeing software development projects and ensuring security
              compliance.
            </div>
            <div className="font-semibold text-primary">Build security into project planning from day one.</div>
          </div>

          <div className="validation-card fade-up">
            <div className="text-sm text-gray-500 mb-2">Small to Medium Businesses</div>
            <div className="quote text-lg mb-6">
              SMBs developing software with limited security resources who need to ensure their applications are secure.
            </div>
            <div className="font-semibold text-primary">
              Access enterprise-grade security analysis without a large security team.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-1">
            <div className="text-sm text-gray-500 mb-2">Enterprise Organizations</div>
            <div className="quote text-lg mb-6">
              Large organizations with complex software development processes that need to ensure security at scale.
            </div>
            <div className="font-semibold text-primary">
              Standardize security requirements analysis across multiple teams and projects.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-2">
            <div className="text-sm text-gray-500 mb-2">Compliance Teams</div>
            <div className="quote text-lg mb-6">
              Teams responsible for ensuring software meets regulatory requirements and industry standards.
            </div>
            <div className="font-semibold text-primary">
              Simplify compliance documentation and reduce audit preparation time.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
