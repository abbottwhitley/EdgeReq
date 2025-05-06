import type { Metadata } from "next"
import PageHeader from "@/components/business-dev/page-header"

export const metadata: Metadata = {
  title: "Seed Investment | EdgeReq Analytics",
  description: "Research on seed investment requirements and funding strategies",
}

export default function SeedInvestmentPage() {
  return (
    <div>
      <PageHeader
        title="Seed Investment"
        description="Research on seed investment requirements and funding strategies"
      />

      <div className="prose prose-lg max-w-none mt-8">
        <h2>Seed Investment Overview</h2>
        <p>
          To successfully launch and grow EdgeReq Analytics, we will require seed investment to fund product
          development, marketing, and initial operations. This page outlines our investment requirements, funding
          strategy, and potential investor profiles.
        </p>

        <h2>Investment Requirements</h2>
        <p>
          Based on our financial projections and business plan, we estimate a seed funding requirement of $600,000 to
          $800,000. This funding will provide approximately 18-24 months of runway, allowing us to:
        </p>
        <ul>
          <li>Develop and launch the MVP</li>
          <li>Acquire initial customers</li>
          <li>Build the core team</li>
          <li>Establish market presence</li>
          <li>Reach key milestones for Series A funding</li>
        </ul>

        <h3>Funding Allocation</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Category</th>
                <th className="py-3 px-4 border-b text-left">Amount</th>
                <th className="py-3 px-4 border-b text-left">Percentage</th>
                <th className="py-3 px-4 border-b text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b font-medium">Product Development</td>
                <td className="py-3 px-4 border-b">$300,000</td>
                <td className="py-3 px-4 border-b">50%</td>
                <td className="py-3 px-4 border-b">
                  Engineering salaries, infrastructure costs, development tools, and third-party services
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium">Sales & Marketing</td>
                <td className="py-3 px-4 border-b">$150,000</td>
                <td className="py-3 px-4 border-b">25%</td>
                <td className="py-3 px-4 border-b">
                  Marketing campaigns, content creation, sales team, events, and customer acquisition
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium">Operations</td>
                <td className="py-3 px-4 border-b">$100,000</td>
                <td className="py-3 px-4 border-b">16.7%</td>
                <td className="py-3 px-4 border-b">
                  Office space, administrative expenses, equipment, and general overhead
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium">Legal & Compliance</td>
                <td className="py-3 px-4 border-b">$50,000</td>
                <td className="py-3 px-4 border-b">8.3%</td>
                <td className="py-3 px-4 border-b">
                  Legal fees, intellectual property protection, contracts, and regulatory compliance
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Funding Strategy</h2>
        <p>Our funding strategy involves a combination of approaches to secure the necessary seed investment:</p>

        <h3>1. Angel Investors</h3>
        <p>
          We will target angel investors with experience in cybersecurity, SaaS, or enterprise software. Ideal angel
          investors will bring not only capital but also industry connections and mentorship.
        </p>
        <p>
          <strong>Target:</strong> $200,000 - $300,000 from 3-5 angel investors
        </p>

        <h3>2. Seed-Stage Venture Capital</h3>
        <p>We will approach seed-stage VC firms that specialize in security, developer tools, or enterprise SaaS.</p>
        <p>
          <strong>Target:</strong> $300,000 - $400,000 from 1-2 seed-stage VC firms
        </p>

        <h3>3. Strategic Investors</h3>
        <p>
          We will seek strategic investors from established security companies or technology firms that could provide
          both capital and potential partnership opportunities.
        </p>
        <p>
          <strong>Target:</strong> $100,000 - $200,000 from 1-2 strategic investors
        </p>

        <h3>4. Accelerator Programs</h3>
        <p>
          We will consider applying to relevant accelerator programs that focus on cybersecurity or enterprise SaaS.
        </p>
        <p>
          <strong>Target:</strong> $50,000 - $150,000 plus mentorship and connections
        </p>

        <h2>Investor Profiles</h2>
        <p>We have identified the following types of investors as ideal targets for our seed round:</p>

        <h3>Angel Investors</h3>
        <ul>
          <li>Former or current executives from security companies</li>
          <li>Successful entrepreneurs in the security or SaaS space</li>
          <li>CTOs or CISOs with investment experience</li>
          <li>Angel groups focused on enterprise software or security</li>
        </ul>

        <h3>Venture Capital Firms</h3>
        <ul>
          <li>Seed-stage firms with security or developer tools focus</li>
          <li>Enterprise SaaS-focused funds</li>
          <li>VC firms with dedicated cybersecurity practices</li>
        </ul>

        <h3>Strategic Investors</h3>
        <ul>
          <li>Corporate venture arms of security companies</li>
          <li>Technology companies with security initiatives</li>
          <li>Development tool providers looking to expand security offerings</li>
        </ul>

        <h2>Equity Considerations</h2>
        <p>
          For the seed round, we anticipate offering 15-25% equity, depending on valuation and investor terms. Our
          target valuation range is $2.4M - $4M pre-money.
        </p>

        <h2>Key Milestones for Funding</h2>
        <p>To secure seed funding, we will focus on achieving the following milestones:</p>
        <ul>
          <li>Development of a functional prototype demonstrating core capabilities</li>
          <li>Validation from 5-10 potential customers through letters of intent or pilot agreements</li>
          <li>Assembly of a core team with relevant expertise</li>
          <li>Detailed product roadmap and go-to-market strategy</li>
          <li>Comprehensive financial projections and business plan</li>
        </ul>

        <h2>Investor Pitch Materials</h2>
        <p>We will develop the following materials for investor outreach:</p>
        <ul>
          <li>Pitch deck (10-15 slides)</li>
          <li>Executive summary (1-2 pages)</li>
          <li>Product demo video (2-3 minutes)</li>
          <li>Detailed financial projections</li>
          <li>Customer testimonials and case studies (as available)</li>
        </ul>

        <h2>Timeline</h2>
        <p>Our fundraising timeline is as follows:</p>
        <ul>
          <li>
            <strong>Months 1-2:</strong> Preparation of pitch materials and investor research
          </li>
          <li>
            <strong>Months 3-5:</strong> Initial investor outreach and meetings
          </li>
          <li>
            <strong>Months 6-8:</strong> Term sheet negotiations and due diligence
          </li>
          <li>
            <strong>Month 9:</strong> Closing of seed round
          </li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          With a clear funding strategy and compelling value proposition, EdgeReq Analytics is well-positioned to secure
          the necessary seed investment to bring our innovative security requirements analysis solution to market. The
          combination of a growing market opportunity, experienced team, and differentiated product creates an
          attractive investment opportunity for the right investors.
        </p>
      </div>
    </div>
  )
}
