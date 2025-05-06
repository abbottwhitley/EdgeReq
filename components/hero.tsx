import Link from "next/link"

export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #4361ee, #3a0ca3)",
        color: "white",
        padding: "8rem 0 6rem",
        position: "relative",
        overflow: "hidden",
        marginTop: "70px",
      }}
    >
      <div className="container mx-auto px-4" style={{ position: "relative", zIndex: 2 }}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Defining the security perimeter through structured requirements
            </h1>
            <p className="text-xl mb-8 max-w-xl mx-auto md:mx-0 text-white opacity-90">
              EdgeReq Analytics is a SaaS solution that proactively identifies and mitigates security risks in software
              requirements <em>before</em> code is written, reducing costs and enhancing security.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                href="#features"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all"
              >
                Explore Features
              </Link>
              <Link
                href="#pricing"
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-12 md:mt-0 hidden md:block">
            <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl border border-white border-opacity-20">
              <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Definitions for gradients and filters */}
                <defs>
                  <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4361ee" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3a0ca3" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f8f9fa" />
                  </linearGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#3a0ca3" floodOpacity="0.2" />
                  </filter>
                  <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4cc9f0" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#4cc9f0" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Background Elements */}
                <circle cx="150" cy="500" r="100" fill="#4361ee" fillOpacity="0.05" />
                <circle cx="650" cy="100" r="80" fill="#4cc9f0" fillOpacity="0.05" />
                <circle cx="700" cy="450" r="120" fill="#3a0ca3" fillOpacity="0.05" />

                {/* Main Shield */}
                <path
                  d="M400 100C520 100 600 140 600 140V320C600 420 520 480 400 520C280 480 200 420 200 320V140C200 140 280 100 400 100Z"
                  fill="url(#shieldGradient)"
                  stroke="#4361ee"
                  strokeWidth="6"
                  opacity="0.9"
                  filter="url(#shadow)"
                />

                {/* Document Stack */}
                <g transform="translate(300, 180)">
                  {/* Bottom Document */}
                  <rect
                    x="0"
                    y="10"
                    width="200"
                    height="250"
                    rx="10"
                    fill="white"
                    stroke="#e9ecef"
                    strokeWidth="2"
                    transform="rotate(-5)"
                  />

                  {/* Middle Document */}
                  <rect
                    x="10"
                    y="5"
                    width="200"
                    height="250"
                    rx="10"
                    fill="white"
                    stroke="#e9ecef"
                    strokeWidth="2"
                    transform="rotate(-2)"
                  />

                  {/* Top Document with Requirements */}
                  <rect
                    x="20"
                    y="0"
                    width="200"
                    height="250"
                    rx="10"
                    fill="url(#docGradient)"
                    stroke="#4361ee"
                    strokeWidth="2"
                  />

                  {/* Document Header */}
                  <rect x="40" y="20" width="160" height="30" rx="5" fill="#f8f9fa" />
                  <circle cx="55" cy="35" r="8" fill="#4361ee" />
                  <rect x="70" y="30" width="100" height="10" rx="2" fill="#e9ecef" />

                  {/* Document Lines */}
                  <rect x="40" y="70" width="160" height="10" rx="2" fill="#e9ecef" />
                  <rect x="40" y="90" width="160" height="10" rx="2" fill="#e9ecef" />
                  <rect x="40" y="110" width="120" height="10" rx="2" fill="#e9ecef" />
                  <rect x="40" y="130" width="160" height="10" rx="2" fill="#e9ecef" />
                  <rect x="40" y="150" width="100" height="10" rx="2" fill="#e9ecef" />
                  <rect x="40" y="170" width="160" height="10" rx="2" fill="#e9ecef" />
                  <rect x="40" y="190" width="140" height="10" rx="2" fill="#e9ecef" />
                  <rect x="40" y="210" width="160" height="10" rx="2" fill="#e9ecef" />

                  {/* Security Scan Animation */}
                  <rect x="20" y="0" width="200" height="40" rx="10" fill="url(#scanGradient)">
                    <animate attributeName="y" values="0;210;0" dur="4s" repeatCount="indefinite" />
                  </rect>

                  {/* Warning Markers */}
                  <g>
                    <circle cx="180" cy="90" r="12" fill="#ff9800" />
                    <text x="180" y="95" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                      !
                    </text>
                  </g>
                  <g>
                    <circle cx="170" cy="150" r="12" fill="#f44336" />
                    <text x="170" y="155" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                      !
                    </text>
                  </g>

                  {/* Check Marks */}
                  <g>
                    <circle cx="180" cy="130" r="12" fill="#4caf50" />
                    <path
                      d="M174 130 L178 134 L186 126"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g>
                    <circle cx="180" cy="170" r="12" fill="#4caf50" />
                    <path
                      d="M174 170 L178 174 L186 166"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>

                {/* Magnifying Glass */}
                <g transform="translate(500, 200) rotate(15)">
                  <circle cx="0" cy="0" r="60" fill="white" stroke="#4361ee" strokeWidth="8" opacity="0.9" />
                  <line x1="45" y1="45" x2="90" y2="90" stroke="#4361ee" strokeWidth="10" strokeLinecap="round" />
                  <circle cx="0" cy="0" r="40" fill="#4cc9f0" fillOpacity="0.1" />
                </g>

                {/* Lock Icon */}
                <g transform="translate(400, 140)">
                  <rect x="-20" y="0" width="40" height="35" rx="5" fill="#4361ee" />
                  <rect x="-10" y="-20" width="20" height="30" rx="10" fill="#4361ee" />
                  <circle cx="0" cy="15" r="6" fill="white" />
                  <line x1="0" y1="15" x2="0" y2="25" stroke="white" strokeWidth="3" />
                </g>

                {/* Floating Security Icons */}
                <g transform="translate(550, 350)">
                  <circle cx="0" cy="0" r="20" fill="#4cc9f0" fillOpacity="0.2" />
                  <path
                    d="M-10 0 L-3 7 L10 -6"
                    stroke="#4cc9f0"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <g transform="translate(500, 400)">
                  <circle cx="0" cy="0" r="15" fill="#4361ee" fillOpacity="0.2" />
                  <path d="M-5 0 L0 5 L5 0 L0 -5 Z" fill="#4361ee" />
                </g>
                <g transform="translate(580, 420)">
                  <circle cx="0" cy="0" r="18" fill="#3a0ca3" fillOpacity="0.2" />
                  <rect x="-8" y="-8" width="16" height="16" rx="2" fill="#3a0ca3" fillOpacity="0.8" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          content: "",
          position: "absolute",
          bottom: "-5px",
          left: 0,
          width: "100%",
          height: "100px",
          background: "white",
          clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
        }}
      ></div>
    </section>
  )
}
