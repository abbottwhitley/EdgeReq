import type { Metadata } from "next"
import Link from "next/link"
import PageHeader from "@/components/business-dev/page-header"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Business Development | EdgeReq Analytics",
  description: "Business development resources and analysis for EdgeReq Analytics",
}

export default function BusinessDevOverview() {
  const businessDevPages = [
    {
      title: "Market Research",
      description: "Analysis of the market for security risk assessment tools and identification of opportunities.",
      href: "/business-dev/market-research",
    },
    {
      title: "Pain Points",
      description: "Identification of key pain points and challenges in the security requirements space.",
      href: "/business-dev/pain-points",
    },
    {
      title: "Needs Validation",
      description: "Validation of customer needs and requirements for security analysis tools.",
      href: "/business-dev/needs-validation",
    },
    {
      title: "Challenge Mitigation",
      description: "Strategies for addressing challenges in the market and product development.",
      href: "/business-dev/challenge-mitigation",
    },
    {
      title: "Concept Development",
      description: "Development of the EdgeReq Analytics concept and core features.",
      href: "/business-dev/concept",
    },
    {
      title: "Strategy",
      description: "Strategic plan for market entry, growth, and scaling of EdgeReq Analytics.",
      href: "/business-dev/strategy",
    },
    {
      title: "Revenue Analysis",
      description: "Analysis of revenue models, pricing strategies, and financial projections.",
      href: "/business-dev/revenue-analysis",
    },
    {
      title: "Team Analysis",
      description: "Analysis of team composition, roles, and responsibilities.",
      href: "/business-dev/team-analysis",
    },
    {
      title: "Seed Investment",
      description: "Research on seed investment requirements and funding strategies.",
      href: "/business-dev/seed-investment",
    },
    {
      title: "Success Metrics",
      description: "Definition of key performance indicators and success metrics.",
      href: "/business-dev/success-metrics",
    },
    {
      title: "Business Proposal",
      description: "Comprehensive business proposal for EdgeReq Analytics.",
      href: "/business-dev/business-proposal",
      featured: true,
    },
  ]

  return (
    <div>
      <PageHeader
        title="Business Development"
        description="Comprehensive business analysis and planning for EdgeReq Analytics"
      />

      <div className="mt-12">
        {/* Featured Business Proposal */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-2">Featured: Business Proposal</h2>
          <p className="text-gray-600 mb-4">
            Our comprehensive business proposal outlines the complete strategy, market analysis, and growth plan for
            EdgeReq Analytics.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/business-dev/business-proposal">View Business Proposal</Link>
          </Button>
        </div>

        <h2 className="text-2xl font-bold mb-6">Business Development Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessDevPages
            .filter((page) => !page.featured)
            .map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{page.title}</h3>
                <p className="text-gray-600 mb-4">{page.description}</p>
                <span className="text-blue-600 font-medium">View details →</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
