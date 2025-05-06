"use client"

import { useEffect, useRef, useState } from "react"

export default function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "RequirementGuard has transformed how we approach security in our development process. By catching vulnerabilities at the requirements stage, we've reduced our security-related rework by over 60%.",
      author: "Sarah Johnson",
      title: "CTO, FinTech Solutions Inc.",
    },
    {
      quote:
        "As a security professional, I've always known that catching issues early is key. RequirementGuard gives us the tools to make that a reality, and our development team is now much more security-conscious.",
      author: "Michael Chen",
      title: "Security Architect, HealthTech Systems",
    },
    {
      quote:
        "The compliance reporting features alone have saved us countless hours during audits. RequirementGuard has become an essential part of our development toolkit.",
      author: "Jessica Williams",
      title: "Compliance Officer, Government Services LLC",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".fade-up")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current)
    }

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current)
      }
      clearInterval(interval)
    }
  }, [testimonials.length])

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Hear from organizations that have transformed their security approach with RequirementGuard.</p>
        </div>

        <div ref={testimonialsRef} className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card bg-white rounded-xl shadow-md p-8 text-center transform transition-all duration-500 fade-up ${
                  index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute top-0 left-0"
                }`}
              >
                <div className="mb-6 text-5xl text-primary">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-xl italic mb-8">{testimonial.quote}</p>
                <div className="flex flex-col items-center">
                  <div className="font-bold text-lg">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
