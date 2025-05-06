"use client"

import { useEffect, useRef } from "react"

export default function Team() {
  const teamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const roles = entry.target.querySelectorAll(".fade-up")
            roles.forEach((role, index) => {
              setTimeout(() => {
                role.classList.add("visible")
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
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Our Team</h2>
          <p>A lean, focused team with expertise in security, software development, and business growth.</p>
        </div>

        <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="team-role fade-up">
            <div className="role-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">CEO/Founder</h3>
            <p className="text-gray-600">
              Overall vision, strategy, fundraising, business development, and initial sales.
            </p>
          </div>

          <div className="team-role fade-up fade-in-delay-1">
            <div className="role-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">CTO/Lead Engineer</h3>
            <p className="text-gray-600">Platform architecture, technical roadmap, development, and DevOps.</p>
          </div>

          <div className="team-role fade-up fade-in-delay-2">
            <div className="role-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Security Analyst</h3>
            <p className="text-gray-600">Security expertise, vulnerability assessment, and threat modeling.</p>
          </div>

          <div className="team-role fade-up">
            <div className="role-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Software Engineers</h3>
            <p className="text-gray-600">Core platform development, integrations, and feature implementation.</p>
          </div>

          <div className="team-role fade-up fade-in-delay-1">
            <div className="role-icon">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Marketing Manager</h3>
            <p className="text-gray-600">Content creation, SEO, social media, lead generation, and sales.</p>
          </div>

          <div className="team-role fade-up fade-in-delay-2">
            <div className="role-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Customer Success Manager</h3>
            <p className="text-gray-600">Onboarding, technical support, and customer satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
