import type React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "EdgeReq Analytics | Business Development",
  description: "Business development resources and analysis for EdgeReq Analytics",
}

export default function BusinessDevLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ul className="flex flex-wrap gap-2 md:gap-4">
            <li>
              <Link
                href="/business-dev"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/market-research"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Market Research
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/pain-points"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Pain Points
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/needs-validation"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Needs Validation
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/challenge-mitigation"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Challenge Mitigation
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/concept"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Concept Development
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/strategy"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Strategy
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/revenue-analysis"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Revenue Analysis
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/team-analysis"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Team Analysis
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/seed-investment"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Seed Investment
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/success-metrics"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Success Metrics
              </Link>
            </li>
            <li>
              <Link
                href="/business-dev/business-proposal"
                className="px-4 py-2 rounded-md bg-white shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Business Proposal
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </div>
  )
}
