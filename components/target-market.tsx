const TargetMarket = () => {
  const primaryMarkets = [
    {
      title: "Startups & Mid-sized DevOps Teams",
      description:
        "Teams with limited security resources who need efficient tools to implement security best practices without dedicated security personnel.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-primary"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
      benefits: [
        "Cost-effective security implementation",
        "No need for specialized security expertise",
        "Faster time-to-market with secure products",
      ],
    },
    {
      title: "Security-Conscious Engineering Teams",
      description:
        "Development teams that prioritize security and are adopting secure SDLC practices to build more robust applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-primary"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      benefits: [
        "Seamless integration with existing SDLC",
        "Automated security validation",
        "Continuous security improvement",
      ],
    },
    {
      title: "Early-Stage Prevention Teams",
      description:
        "Organizations focused on preventing security flaws early in the design phase to reduce remediation costs and time.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-primary"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      benefits: [
        "Identify risks before code is written",
        "Reduce security-related rework",
        "Lower overall development costs",
      ],
    },
    {
      title: "Compliance-Driven Organizations",
      description:
        "Teams working within regulatory frameworks that require demonstrable security measures throughout the development lifecycle.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-primary"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      benefits: [
        "Automated compliance documentation",
        "Regulatory requirement mapping",
        "Audit-ready security processes",
      ],
    },
  ]

  const secondaryMarkets = [
    {
      title: "Software Development Consultancies",
      description:
        "Consulting firms that develop software for clients and need to ensure security best practices are followed.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: "Security Auditors",
      description:
        "Professionals who review and assess software security and need tools to evaluate requirements documentation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
  ]

  return (
    <section id="target-market" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Who We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EdgeReq Analytics is designed for organizations that prioritize security early in the software development
            lifecycle.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Primary Markets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {primaryMarkets.map((market, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    {market.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center">{market.title}</h4>
                  <p className="text-gray-600 mb-4 text-center">{market.description}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <h5 className="font-semibold text-gray-900 mb-2 text-center">Key Benefits</h5>
                    <ul className="space-y-2">
                      {market.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary mr-2 shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Secondary Markets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {secondaryMarkets.map((market, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {market.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{market.title}</h4>
                  <p className="text-gray-600 text-sm">{market.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Market Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">78%</div>
              <p className="text-gray-600">
                of organizations want to implement security earlier in their development process
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <p className="text-gray-600">cheaper to fix security issues at the requirements stage vs. production</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">62%</div>
              <p className="text-gray-600">of teams lack dedicated security resources for requirements analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetMarket
