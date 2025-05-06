"use client"

import { useEffect, useRef } from "react"

export default function Challenges() {
  const challengesRef = useRef<HTMLDivElement>(null)

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

    if (challengesRef.current) {
      observer.observe(challengesRef.current)
    }

    return () => {
      if (challengesRef.current) {
        observer.unobserve(challengesRef.current)
      }
    }
  }, [])

  return (
    <section id="challenges" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Industry Challenges & Our Solutions</h2>
          <p>
            The software industry faces significant challenges in implementing security early in the development
            lifecycle. EdgeReq Analytics provides targeted solutions to these challenges.
          </p>
        </div>

        <div ref={challengesRef} className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md fade-up">
              <h3 className="text-xl font-bold mb-4 text-red-600">
                <i className="fas fa-exclamation-circle mr-2"></i>Challenges
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">Lack of Awareness</span>
                    <p className="text-gray-600 text-sm">
                      Many organizations lack awareness of the importance of incorporating security early in the SDLC.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">Complexity of Security Requirements</span>
                    <p className="text-gray-600 text-sm">
                      Defining and managing comprehensive security requirements can be complex and overwhelming.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">Integration Difficulties</span>
                    <p className="text-gray-600 text-sm">
                      Integrating security tools into existing development processes can be challenging.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">Manual Evaluation</span>
                    <p className="text-gray-600 text-sm">
                      Manual security evaluation methods are time-consuming and error-prone.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">Skill Gap</span>
                    <p className="text-gray-600 text-sm">
                      A shortage of skilled security professionals makes it difficult to implement security best
                      practices.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md fade-up fade-in-delay-1">
              <h3 className="text-xl font-bold mb-4 text-green-600">
                <i className="fas fa-check-circle mr-2"></i>Our Solutions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">Education & Awareness</span>
                    <p className="text-gray-600 text-sm">
                      We provide educational content and resources to raise awareness about security requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">Simplified Security Frameworks</span>
                    <p className="text-gray-600 text-sm">
                      Pre-built templates and frameworks based on industry best practices make security accessible.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">Seamless SDLC Integration</span>
                    <p className="text-gray-600 text-sm">
                      Our platform integrates with popular development tools to fit into your existing workflow.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">Automation & Efficiency</span>
                    <p className="text-gray-600 text-sm">
                      We automate the requirements evaluation process to save time and reduce errors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-semibold">Knowledge Base & Expert Guidance</span>
                    <p className="text-gray-600 text-sm">
                      Our platform provides a knowledge base and expert guidance to bridge the skill gap.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
