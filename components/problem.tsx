"use client"

import { useEffect, useRef } from "react"

export default function Problem() {
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
    <section id="problem" className="problem">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>The Small Business AI Challenge</h2>
          <p>Small businesses face significant barriers to AI adoption despite its transformative potential.</p>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="stat-card fade-up">
            <div className="stat">62</div>
            <div className="stat-label">
              of small businesses don't understand AI's benefits for their specific business
            </div>
          </div>

          <div className="stat-card fade-up fade-in-delay-1">
            <div className="stat">60</div>
            <div className="stat-label">lack in-house resources for AI implementation</div>
          </div>

          <div className="stat-card fade-up fade-in-delay-2">
            <div className="stat">72</div>
            <div className="stat-label">of AI adopters struggle with integration and usage</div>
          </div>

          <div className="stat-card fade-up fade-in-delay-3">
            <div className="stat">70</div>
            <div className="stat-label">are concerned about data security and privacy</div>
          </div>
        </div>
      </div>
    </section>
  )
}
