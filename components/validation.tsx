"use client"

import { useEffect, useRef } from "react"

export default function Validation() {
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
    <section id="validation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Market Validation</h2>
          <p>Research confirms the significant opportunity for AI solutions tailored to small businesses.</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="validation-card fade-up">
            <div className="text-sm text-gray-500 mb-2">Forbes, 2025 AI Predictions For Small Businesses</div>
            <div className="quote text-lg mb-6">
              SMBs will no longer need to seek independent, specialized solutions; instead, they will demand
              comprehensive, all-in-one platforms that streamline operations and maximize efficiency.
            </div>
            <div className="font-semibold text-primary">
              Small businesses want integrated platforms, not point solutions.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-1">
            <div className="text-sm text-gray-500 mb-2">
              Allwork.Space, This Use Of AI Is Making Small Business Owners Optimistic For 2025
            </div>
            <div className="quote text-lg mb-6">
              By the end of 2025, 72% of small businesses plan to incorporate AI into their marketing strategies,
              leveraging it for content creation, customer data analysis, and personalized marketing.
            </div>
            <div className="font-semibold text-primary">
              Strong and growing demand for AI adoption among small businesses.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-2">
            <div className="text-sm text-gray-500 mb-2">Service Direct, 2025 Small Business AI Report</div>
            <div className="quote text-lg mb-6">
              Barriers to AI Adoption: Lack of understanding about AI's benefits (62%) and a lack of in-house resources
              (60%) are the primary reasons for non-adoption.
            </div>
            <div className="font-semibold text-primary">
              SmallBizAI directly addresses the top barriers to AI adoption.
            </div>
          </div>

          <div className="validation-card fade-up">
            <div className="text-sm text-gray-500 mb-2">
              CSRWire, 2025 Predictions: The Year of Impact for Small Businesses Using AI
            </div>
            <div className="quote text-lg mb-6">
              This year, AI will proactively flag risks like declining sales or unusual expenses, giving small
              businesses time to respond before challenges escalate.
            </div>
            <div className="font-semibold text-primary">
              Proactive monitoring is a key value driver for small businesses.
            </div>
          </div>

          <div className="validation-card fade-up fade-in-delay-1">
            <div className="text-sm text-gray-500 mb-2">Forbes, 2025 AI Predictions For Small Businesses</div>
            <div className="quote text-lg mb-6">
              Applying AI-driven forecasting to supply chain management can reduce errors by between 20 and 50%,
              reducing lost sales and product unavailability by up to 65%.
            </div>
            <div className="font-semibold text-primary">Quantifiable ROI potential for small businesses using AI.</div>
          </div>

          <div className="validation-card fade-up fade-in-delay-2">
            <div className="text-sm text-gray-500 mb-2">
              LinkedIn, Top 8 Challenges in AI Implementation for Businesses in 2025
            </div>
            <div className="quote text-lg mb-6">
              Organizations frequently lack qualified professionals to develop and manage AI systems.
            </div>
            <div className="font-semibold text-primary">
              SmallBizAI's zero-technical-knowledge approach solves the talent shortage problem.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
