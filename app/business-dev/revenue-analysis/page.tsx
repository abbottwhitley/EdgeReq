import type { Metadata } from "next"
import PageHeader from "@/components/business-dev/page-header"

export const metadata: Metadata = {
  title: "Revenue Analysis | EdgeReq Analytics",
  description: "Analysis of revenue models, pricing strategies, and financial projections",
}

export default function RevenueAnalysisPage() {
  return (
    <div>
      <PageHeader
        title="Revenue Analysis"
        description="Analysis of revenue models, pricing strategies, and financial projections"
      />

      <div className="prose prose-lg max-w-none mt-8">
        <h2>Revenue Model</h2>
        <p>
          EdgeReq Analytics will generate revenue through a subscription-based SaaS model. This approach provides
          predictable recurring revenue while allowing customers to avoid large upfront investments.
        </p>

        <h2>Pricing Strategy</h2>
        <p>
          Our pricing strategy is designed to be competitive while reflecting the value provided by our solution. We
          will offer tiered pricing to accommodate different customer segments:
        </p>

        <h3>Pricing Tiers</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Tier</th>
                <th className="py-3 px-4 border-b text-left">Price</th>
                <th className="py-3 px-4 border-b text-left">Target Audience</th>
                <th className="py-3 px-4 border-b text-left">Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b font-medium">Basic</td>
                <td className="py-3 px-4 border-b">$99/month</td>
                <td className="py-3 px-4 border-b">Startups, small teams</td>
                <td className="py-3 px-4 border-b">
                  <ul>
                    <li>Basic requirements analysis</li>
                    <li>Up to 5 projects</li>
                    <li>100 requirements per month</li>
                    <li>Standard security rules</li>
                    <li>Email support</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium">Pro</td>
                <td className="py-3 px-4 border-b">$299/month</td>
                <td className="py-3 px-4 border-b">Growing teams, mid-sized companies</td>
                <td className="py-3 px-4 border-b">
                  <ul>
                    <li>Advanced requirements analysis</li>
                    <li>Up to 15 projects</li>
                    <li>500 requirements per month</li>
                    <li>Extended security rule set</li>
                    <li>Priority email support</li>
                    <li>API access</li>
                    <li>SDLC integration</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-medium">Enterprise</td>
                <td className="py-3 px-4 border-b">$799/month</td>
                <td className="py-3 px-4 border-b">Large organizations, regulated industries</td>
                <td className="py-3 px-4 border-b">
                  <ul>
                    <li>Unlimited requirements analysis</li>
                    <li>Unlimited projects</li>
                    <li>Custom rule development</li>
                    <li>Dedicated support</li>
                    <li>Unlimited users</li>
                    <li>Custom integrations</li>
                    <li>Advanced compliance mapping</li>
                    <li>SSO authentication</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Additional Revenue Streams</h3>
        <ul>
          <li>
            <strong>Professional Services:</strong> Implementation, training, and custom rule development services.
          </li>
          <li>
            <strong>Partner Program:</strong> Revenue sharing with implementation partners and resellers.
          </li>
          <li>
            <strong>Enterprise Agreements:</strong> Custom pricing for large-scale enterprise deployments.
          </li>
        </ul>

        <h2>Market Size and Penetration</h2>
        <p>
          The global security assessment market is projected to reach $6.7 billion by 2027. Our target is to capture 2%
          of this market within 5 years, representing approximately $134 million in annual revenue.
        </p>

        <h2>Customer Acquisition</h2>
        <p>Our customer acquisition strategy includes:</p>
        <ul>
          <li>Content marketing and SEO</li>
          <li>Paid advertising on targeted platforms</li>
          <li>Industry events and webinars</li>
          <li>Partnerships with security consulting firms</li>
          <li>Referral programs</li>
        </ul>

        <h2>Financial Projections</h2>
        <h3>Revenue Forecast (3-Year)</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Metric</th>
                <th className="py-3 px-4 border-b text-left">Year 1</th>
                <th className="py-3 px-4 border-b text-left">Year 2</th>
                <th className="py-3 px-4 border-b text-left">Year 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Website Visitors</td>
                <td className="py-3 px-4 border-b">5,000</td>
                <td className="py-3 px-4 border-b">15,000</td>
                <td className="py-3 px-4 border-b">30,000</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Conversion Rate</td>
                <td className="py-3 px-4 border-b">2%</td>
                <td className="py-3 px-4 border-b">2%</td>
                <td className="py-3 px-4 border-b">2%</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">New Customers</td>
                <td className="py-3 px-4 border-b">100</td>
                <td className="py-3 px-4 border-b">300</td>
                <td className="py-3 px-4 border-b">600</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Average ARPU</td>
                <td className="py-3 px-4 border-b">$300</td>
                <td className="py-3 px-4 border-b">$350</td>
                <td className="py-3 px-4 border-b">$400</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Annual Revenue</td>
                <td className="py-3 px-4 border-b">$36,000</td>
                <td className="py-3 px-4 border-b">$126,000</td>
                <td className="py-3 px-4 border-b">$288,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Cost Structure</h3>
        <p>Our primary costs include:</p>
        <ul>
          <li>
            <strong>Development Costs:</strong> Salaries for engineering team, infrastructure costs, and third-party
            services.
          </li>
          <li>
            <strong>Marketing & Sales Costs:</strong> Digital marketing, content creation, sales team salaries, and
            commissions.
          </li>
          <li>
            <strong>Customer Support Costs:</strong> Support team salaries and customer success resources.
          </li>
          <li>
            <strong>Operational Costs:</strong> Office space, administrative expenses, and general overhead.
          </li>
          <li>
            <strong>Legal and Compliance Costs:</strong> Legal fees, insurance, and regulatory compliance.
          </li>
        </ul>

        <h3>Profitability Timeline</h3>
        <p>
          Based on our projections, we expect to reach profitability in Year 4, with the following net profit/loss
          trajectory:
        </p>
        <ul>
          <li>Year 1: ($94,000) - Investment in product development and initial marketing</li>
          <li>Year 2: ($174,000) - Continued investment in growth and team expansion</li>
          <li>Year 3: ($262,000) - Scaling operations and enterprise market entry</li>
          <li>Year 4: $150,000 - Achieving profitability as customer base grows</li>
          <li>Year 5: $500,000 - Accelerating profitability through economies of scale</li>
        </ul>

        <h2>Funding Requirements</h2>
        <p>
          To execute our business plan and reach profitability, we will require approximately $600,000 in seed funding.
          This will cover:
        </p>
        <ul>
          <li>Product development and infrastructure: $300,000</li>
          <li>Marketing and sales: $150,000</li>
          <li>Operations and administration: $100,000</li>
          <li>Legal and compliance: $50,000</li>
        </ul>

        <h2>Key Financial Metrics</h2>
        <p>We will track the following financial metrics to measure our performance:</p>
        <ul>
          <li>Monthly Recurring Revenue (MRR)</li>
          <li>Annual Recurring Revenue (ARR)</li>
          <li>Customer Acquisition Cost (CAC)</li>
          <li>Customer Lifetime Value (LTV)</li>
          <li>LTV:CAC Ratio</li>
          <li>Churn Rate</li>
          <li>Gross Margin</li>
          <li>Burn Rate</li>
          <li>Cash Runway</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Our revenue analysis demonstrates a clear path to building a sustainable and profitable business. While the
          initial years will require investment, the SaaS model provides predictable recurring revenue that will drive
          long-term growth and profitability.
        </p>
      </div>
    </div>
  )
}
