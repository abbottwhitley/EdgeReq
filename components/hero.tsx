import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
              <span className="block">Defining the security perimeter</span>
              <span className="block text-blue-600">through structured requirements</span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-600 mb-8">
              EdgeReq Analytics is a SaaS solution that proactively identifies and mitigates security risks in software
              requirements before code is written, reducing costs and enhancing security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="#features">Explore Features</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                <Link href="#contact">Request Demo</Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">90%</div>
                <div className="text-sm text-gray-600">Faster Risk Detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">75%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Security Rules</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="relative">
              {/* Main illustration */}
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl">
                <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <rect width="400" height="300" fill="#F9FAFB" />
                  <rect x="40" y="40" width="320" height="220" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                  <rect x="60" y="60" width="280" height="40" rx="4" fill="#F3F4F6" />
                  <rect x="70" y="75" width="120" height="10" rx="2" fill="#9CA3AF" />
                  <rect x="60" y="120" width="120" height="120" rx="4" fill="#F3F4F6" />
                  <rect x="70" y="135" width="100" height="10" rx="2" fill="#9CA3AF" />
                  <rect x="70" y="155" width="80" height="10" rx="2" fill="#D1D5DB" />
                  <rect x="70" y="175" width="90" height="10" rx="2" fill="#D1D5DB" />
                  <rect x="70" y="195" width="70" height="10" rx="2" fill="#D1D5DB" />
                  <rect x="70" y="215" width="60" height="10" rx="2" fill="#D1D5DB" />
                  <rect x="200" y="120" width="120" height="120" rx="4" fill="#F3F4F6" />
                  <rect x="210" y="135" width="100" height="10" rx="2" fill="#9CA3AF" />
                  <circle cx="220" cy="165" r="20" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="2" />
                  <path
                    d="M215 165L218 168L225 161"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="220" cy="195" r="20" fill="#FEF2F2" stroke="#FECACA" strokeWidth="2" />
                  <path
                    d="M215 195L225 195M220 190L220 200"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="220" cy="225" r="20" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="2" />
                  <path
                    d="M215 225L225 225"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-blue-100 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-16 h-16 bg-blue-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
