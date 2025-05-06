"use client"

import { useEffect, useRef } from "react"

export default function WhyRequirementGuard() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll(".fade-up")
            stats.forEach((stat, index) => {
              setTimeout(() => {
                stat.classList.add("visible")
              }, index * 200)
            })

            // Animate counters
            const statElements = entry.target.querySelectorAll(".stat")
            statElements.forEach((stat) => {
              const target = Number.parseInt(stat.textContent || "0", 10)
              animateCounter(stat as HTMLElement, 0, target, 2000)
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const animateCounter = (element: HTMLElement, start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const value = Math.floor(progress * (end - start) + start)
      element.textContent = `${value}%`

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  return (
    <section id="why" className="problem">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>The Security Challenge</h2>
          <p>
            Security vulnerabilities are often discovered too late in the development process, leading to costly fixes.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="stat-card fade-up">
            <div className="stat">86</div>
            <div className="stat-label">of developers don't view application security as a top priority</div>
          </div>

          <div className="stat-card fade-up fade-in-delay-1">
            <div className="stat">72</div>
            <div className="stat-label">of security issues are discovered after code is written</div>
          </div>

          <div className="stat-card fade-up fade-in-delay-2">
            <div className="stat">30</div>
            <div className="stat-label">times more expensive to fix security issues in production</div>
          </div>

          <div className="stat-card fade-up fade-in-delay-3">
            <div className="stat">62</div>
            <div className="stat-label">of companies struggle with defining security requirements</div>
          </div>
        </div>
      </div>
    </section>
  )
}
