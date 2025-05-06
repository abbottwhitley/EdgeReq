import PageHeader from "@/components/business-dev/page-header"
import Link from "next/link"

export default function RevenueAnalysisPage() {
  return (
    <main>
      <PageHeader
        title="Revenue Analysis"
        description="Financial projections and business model analysis for EdgeReq Analytics"
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">
            Financial Projection Report: EdgeReq - Automated Software Requirements Security Analysis
          </h2>

          <p className="mb-6">
            This report provides a preliminary financial projection for EdgeReq, an automated software requirements
            security analysis tool. It considers various revenue models, market factors, and cost estimates to assess
            the potential for profitability and growth.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">1. Executive Summary</h3>
            <p>
              EdgeReq addresses a critical need in the software development lifecycle by proactively evaluating software
              requirements for security risks. The financial projections are based on a SaaS (Software as a Service)
              model, with tiered pricing and a focus on customer acquisition through digital marketing and strategic
              partnerships. The model indicates strong potential for revenue generation and scalability, assuming
              effective execution of the business plan.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">2. Revenue Model & Pricing Strategy</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Pricing Tiers:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <strong>Basic:</strong> $99/month - Limited features, up to 5 users, and a restricted number of
                    projects/requirements analyzed per month (e.g., 20 requirements).
                  </li>
                  <li>
                    <strong>Pro:</strong> $299/month - Full feature set, up to 20 users, more projects/requirements
                    analyzed (e.g., 100 requirements/month), standard support.
                  </li>
                  <li>
                    <strong>Enterprise:</strong> $799/month - Custom rule development, dedicated support, unlimited
                    users, and unlimited requirements analysis.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Potential Add-ons:</strong> Custom rule development, training, and consulting services. These
                could generate additional revenue.
              </li>
              <li>
                <strong>Payment Terms:</strong> Monthly or annual subscription options (with a discount for annual
                payments).
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">3. Market Analysis & Target Audience</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Target Market:</strong> Software development teams, security engineers, project managers, and
                organizations in regulated industries (e.g., finance, healthcare) and others wanting to improve the
                security of their SDLC.
              </li>
              <li>
                <strong>Market Size:</strong> The market for application security tools is substantial and growing. The
                growing focus on DevSecOps and the increasing threat landscape create a high demand for solutions like
                EdgeReq.
              </li>
              <li>
                <strong>Market Trends:</strong> Increased focus on shift-left security, automation in security
                processes, and compliance with regulations.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">4. Customer Acquisition Strategy</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Digital Marketing:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <strong>Search Engine Optimization (SEO):</strong> Optimize the website and content to rank high in
                    search results for relevant keywords (e.g., "requirements security analysis," "secure software
                    development").
                  </li>
                  <li>
                    <strong>Pay-Per-Click (PPC) Advertising:</strong> Use Google Ads and other platforms to target
                    specific keywords and demographics.
                  </li>
                  <li>
                    <strong>Content Marketing:</strong> Create blog posts, white papers, webinars, and case studies to
                    attract and engage potential customers.
                  </li>
                  <li>
                    <strong>Social Media Marketing:</strong> Build a presence on platforms like LinkedIn and Twitter to
                    share valuable content and interact with the target audience.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Partnerships:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Collaborate with DevOps and security consulting firms.</li>
                  <li>Integrate with existing development tools and platforms (e.g., Jira, Azure DevOps).</li>
                </ul>
              </li>
              <li>
                <strong>Sales:</strong> Direct sales team (as the business grows).
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">5. Financial Projections (Year 1-3)</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Assumptions:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Customer Acquisition Cost (CAC): $500 (initial estimate, will be refined with data).</li>
                  <li>Customer Lifetime Value (LTV): Assume an average customer lifetime of 2 years (24 months).</li>
                  <li>Conversion Rate: 2% of website visitors convert into paying customers.</li>
                  <li>Churn Rate: 10% per year.</li>
                  <li>Average Revenue Per User (ARPU): Calculated based on the mix of tiers.</li>
                  <li>
                    Operating Expenses: Includes salaries, marketing costs, server costs, and other operational
                    expenses.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Key Metrics (Simplified for illustration):</strong>
                <div className="overflow-x-auto mt-2">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Metric</th>
                        <th className="py-2 px-4 border-b text-left">Year 1</th>
                        <th className="py-2 px-4 border-b text-left">Year 2</th>
                        <th className="py-2 px-4 border-b text-left">Year 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Website Visitors</td>
                        <td className="py-2 px-4 border-b">5,000</td>
                        <td className="py-2 px-4 border-b">15,000</td>
                        <td className="py-2 px-4 border-b">30,000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Paying Customers</td>
                        <td className="py-2 px-4 border-b">100</td>
                        <td className="py-2 px-4 border-b">300</td>
                        <td className="py-2 px-4 border-b">600</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Average ARPU</td>
                        <td className="py-2 px-4 border-b">$300</td>
                        <td className="py-2 px-4 border-b">$350</td>
                        <td className="py-2 px-4 border-b">$400</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Total Revenue</td>
                        <td className="py-2 px-4 border-b">$36,000</td>
                        <td className="py-2 px-4 border-b">$126,000</td>
                        <td className="py-2 px-4 border-b">$288,000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Customer Acquisition Cost</td>
                        <td className="py-2 px-4 border-b">$50,000</td>
                        <td className="py-2 px-4 border-b">$150,000</td>
                        <td className="py-2 px-4 border-b">$300,000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Operating Expenses</td>
                        <td className="py-2 px-4 border-b">$80,000</td>
                        <td className="py-2 px-4 border-b">$150,000</td>
                        <td className="py-2 px-4 border-b">$250,000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Net Profit/Loss</td>
                        <td className="py-2 px-4 border-b">($94,000)</td>
                        <td className="py-2 px-4 border-b">($174,000)</td>
                        <td className="py-2 px-4 border-b">($262,000)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-sm text-gray-600 italic">
                  Note: These are simplified estimations to provide a starting point. A detailed financial model would
                  be required for accurate results.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">6. Cost Structure</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Development Costs:</strong> Initial development of the software, ongoing feature development,
                and maintenance.
              </li>
              <li>
                <strong>Marketing & Sales Costs:</strong> PPC advertising, content creation, sales team salaries (as the
                company scales), and marketing automation tools.
              </li>
              <li>
                <strong>Server Costs:</strong> Cloud hosting (AWS, Azure, etc.) and related infrastructure.
              </li>
              <li>
                <strong>Customer Support Costs:</strong> Salaries of customer support staff and support software.
              </li>
              <li>
                <strong>Operational Costs:</strong> Office space (if applicable), legal, accounting, and other
                administrative expenses.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">7. Risks & Mitigation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Market Competition:</strong> The market for security tools is competitive. EdgeReq must
                differentiate itself through its unique value proposition, ease of use, and strong marketing efforts.
              </li>
              <li>
                <strong>Customer Acquisition:</strong> Acquiring customers can be expensive and time-consuming. A
                diversified marketing strategy and a focus on customer retention are crucial.
              </li>
              <li>
                <strong>Technology Risks:</strong> Rapid changes in technology require constant adaptation and
                investment in research and development.
              </li>
              <li>
                <strong>Security Risks:</strong> The tool itself needs to be secure. Robust security measures are
                essential to protect customer data.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">8. Key Performance Indicators (KPIs)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website Traffic & Conversion Rates</li>
              <li>Customer Acquisition Cost (CAC)</li>
              <li>Customer Lifetime Value (LTV)</li>
              <li>Churn Rate</li>
              <li>Monthly Recurring Revenue (MRR)</li>
              <li>Customer Satisfaction (CSAT)</li>
              <li>Number of Requirements Analyzed</li>
              <li>Lead Generation</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">9. Conclusion</h3>
            <p>
              EdgeReq has significant potential to become a successful SaaS business. The demand for automated security
              analysis of software requirements is growing. The financial projections demonstrate revenue potential.
              However, achieving profitability requires effective customer acquisition, efficient cost management, and
              continuous product improvement.
            </p>
          </div>

          <div className="mt-10 flex justify-between">
            <Link
              href="/business-dev/strategy"
              className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Previous: Strategy
            </Link>
            <Link
              href="/business-dev/team-analysis"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
            >
              Next: Team Analysis
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
