"use client"

import { useEffect, useRef } from "react"

export default function Team() {
  const teamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const members = entry.target.querySelectorAll(".fade-up")
            members.forEach((member, index) => {
              setTimeout(() => {
                member.classList.add("visible")
              }, index * 200)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (teamRef.current) {
      observer.observe(teamRef.current)
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current)
      }
    }
  }, [])

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Our Team</h2>
          <p>
            EdgeReq Analytics is built by a small but dedicated team of experts in software development, security, and
            business development.
          </p>
        </div>

        <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="team-member fade-up">
            <div className="relative mb-6 rounded-xl overflow-hidden">
              <img src="/placeholder.svg?key=a179s" alt="Founder/CEO" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Founder/CEO</h3>
            <div className="text-gray-600 mb-3">Vision & Strategy</div>
            <p className="text-sm text-gray-500">
              Responsible for overall vision, strategy, fundraising, business development, sales, and high-level product
              direction.
            </p>
          </div>

          <div className="team-member fade-up fade-in-delay-1">
            <div className="relative mb-6 rounded-xl overflow-hidden">
              <img src="/software-engineer-portrait.png" alt="Lead Developer" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Lead Developer</h3>
            <div className="text-gray-600 mb-3">Software Engineering</div>
            <p className="text-sm text-gray-500">
              Leads the development of the core EdgeReq software, architecture, and technical implementation.
            </p>
          </div>

          <div className="team-member fade-up fade-in-delay-2">
            <div className="relative mb-6 rounded-xl overflow-hidden">
              <img src="/marketing-specialist-portrait.png" alt="Marketing & Sales" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Marketing & Sales</h3>
            <div className="text-gray-600 mb-3">Customer Success</div>
            <p className="text-sm text-gray-500">
              Implements marketing strategy, handles sales, manages customer onboarding, and provides customer support.
            </p>
          </div>

          <div className="team-member fade-up fade-in-delay-3">
            <div className="relative mb-6 rounded-xl overflow-hidden">
              <img src="/placeholder.svg?key=w5wqh" alt="Security Expert" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">Security Expert</h3>
            <div className="text-gray-600 mb-3">Requirements Analysis</div>
            <p className="text-sm text-gray-500">
              Provides expert guidance on security requirements analysis and best practices (Contractor).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
