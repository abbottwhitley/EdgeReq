"use client"

import { useEffect, useRef } from "react"

export default function Pricing() {
  const pricingRef = useRef<HTMLDivElement>(null)

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
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (pricingRef.current) {
      observer.observe(pricingRef.current)
    }

    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current)
      }
    }
  }, [])

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Pricing Plans</h2>
          <p>Choose the plan that best fits your organization's needs and scale as you grow.</p>
        </div>

        <div ref={pricingRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="pricing-card bg-white rounded-xl shadow-md p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg fade-up">
            <div className="pricing-tier text-lg font-bold text-primary mb-2">Basic</div>
            <div className="pricing-price text-4xl font-bold mb-4">$99</div>
            <div className="pricing-period text-gray-500 mb-6">per month</div>
            <ul className="pricing-features text-left mb-8">
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Limited features</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Basic requirements analysis</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Standard rule set</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Email support</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="block w-full py-3 px-6 bg-primary hover:bg-secondary text-white rounded-full font-semibold transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          <div className="pricing-card bg-white rounded-xl shadow-md p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-2 border-primary fade-up fade-in-delay-1">
            <div className="pricing-tier text-lg font-bold text-primary mb-2">Pro</div>
            <div className="pricing-price text-4xl font-bold mb-4">$299</div>
            <div className="pricing-period text-gray-500 mb-6">per month</div>
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <ul className="pricing-features text-left mb-8">
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Full feature set</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Advanced requirements analysis</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>More projects/requirements analyzed</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Standard support</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Integration with popular tools</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="block w-full py-3 px-6 bg-primary hover:bg-secondary text-white rounded-full font-semibold transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          <div className="pricing-card bg-white rounded-xl shadow-md p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg fade-up fade-in-delay-2">
            <div className="pricing-tier text-lg font-bold text-primary mb-2">Enterprise</div>
            <div className="pricing-price text-4xl font-bold mb-4">$799</div>
            <div className="pricing-period text-gray-500 mb-6">per month</div>
            <ul className="pricing-features text-left mb-8">
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Custom rule development</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Dedicated support</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Unlimited users</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Unlimited requirements analysis</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Advanced integrations</span>
              </li>
              <li className="mb-2 flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                <span>Custom SLAs</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="block w-full py-3 px-6 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-semibold transition-colors duration-300"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
