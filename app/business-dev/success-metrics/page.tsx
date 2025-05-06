import PageHeader from "@/components/business-dev/page-header"
import Link from "next/link"

export default function SuccessMetricsPage() {
  return (
    <main>
      <PageHeader
        title="Success Metrics"
        description="Key performance indicators and measurable goals for EdgeReq Analytics"
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Success Metrics and Performance Indicators for EdgeReq Analytics</h2>

          <p className="mb-6">
            This list outlines measurable goals to assess the success of EdgeReq Analytics, a SaaS solution that
            proactively identifies and mitigates security risks in software requirements before code is written.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">I. Overall Business Success Metrics</h3>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">1. Revenue:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Monthly Recurring Revenue (MRR) - Track the total revenue generated each month
                  from subscriptions.
                  <br />
                  <strong>Target:</strong> Increase MRR by X% per quarter/year (e.g., 10% quarterly growth, 100% annual
                  growth).
                </li>
                <li>
                  <strong>KPI:</strong> Customer Lifetime Value (CLTV) - Estimate the total revenue a customer is
                  expected to generate throughout their relationship with the company.
                  <br />
                  <strong>Target:</strong> Increase CLTV by Y% annually.
                </li>
                <li>
                  <strong>KPI:</strong> Average Revenue Per User (ARPU) - Calculate the average revenue generated per
                  user/customer.
                  <br />
                  <strong>Target:</strong> Maintain or increase ARPU over time (e.g., as new features or premium plans
                  are adopted).
                </li>
                <li>
                  <strong>KPI:</strong> Customer Acquisition Cost (CAC) - Measure the cost to acquire a new customer.
                  <br />
                  <strong>Target:</strong> Reduce CAC while maintaining or increasing customer acquisition.
                </li>
                <li>
                  <strong>KPI:</strong> Gross Profit Margin - Percentage of revenue remaining after accounting for the
                  cost of goods sold.
                  <br />
                  <strong>Target:</strong> Achieve a gross profit margin of Z%.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">2. User Adoption and Growth:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Number of Registered Users - Total number of users who have created accounts.
                  <br />
                  <strong>Target:</strong> Achieve X number of registered users within the first Y months.
                </li>
                <li>
                  <strong>KPI:</strong> Number of Active Users - Number of users who actively use the platform (e.g.,
                  monthly active users (MAU), weekly active users (WAU)).
                  <br />
                  <strong>Target:</strong> Achieve an MAU/WAU of Z% of registered users, indicating engagement.
                </li>
                <li>
                  <strong>KPI:</strong> User Churn Rate - Percentage of users who cancel their subscriptions or stop
                  using the platform.
                  <br />
                  <strong>Target:</strong> Reduce churn rate to below A% per month.
                </li>
                <li>
                  <strong>KPI:</strong> User Conversion Rate - Percentage of free trial users who convert to paying
                  subscribers.
                  <br />
                  <strong>Target:</strong> Achieve a conversion rate of B% from free to paid users.
                </li>
                <li>
                  <strong>KPI:</strong> Number of Projects Using the Platform - Track the number of software projects
                  that utilize the platform for security requirements evaluation.
                  <br />
                  <strong>Target:</strong> Increase the number of projects using the platform by C% each quarter.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">3. Customer Satisfaction and Retention:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Customer Satisfaction Score (CSAT) - Measure customer satisfaction through
                  surveys (e.g., after onboarding, after using the platform).
                  <br />
                  <strong>Target:</strong> Achieve a CSAT score of D/5 (e.g., 4 out of 5).
                </li>
                <li>
                  <strong>KPI:</strong> Net Promoter Score (NPS) - Measure customer loyalty and willingness to recommend
                  the platform.
                  <br />
                  <strong>Target:</strong> Achieve an NPS score of E (e.g., +30 or higher).
                </li>
                <li>
                  <strong>KPI:</strong> Customer Retention Rate - Percentage of customers who continue to subscribe to
                  the platform over a period.
                  <br />
                  <strong>Target:</strong> Maintain a customer retention rate of F% per year.
                </li>
                <li>
                  <strong>KPI:</strong> Number of Support Tickets - Measure the volume of customer support requests.
                  <br />
                  <strong>Target:</strong> Reduce the average time to resolution for support tickets and maintain G%
                  Customer Satisfaction with Support.
                </li>
                <li>
                  <strong>KPI:</strong> Feature Adoption Rate - Track the percentage of users utilizing key features of
                  the platform.
                  <br />
                  <strong>Target:</strong> Increase adoption rate of [key feature X] to H% within [timeframe].
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">II. Product and Feature Performance Indicators</h3>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">1. Automation and Efficiency:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Time Saved in Requirements Analysis - Measure the average time it takes users to
                  analyze security requirements using the platform compared to manual methods.
                  <br />
                  <strong>Target:</strong> Achieve a time savings of I% (e.g., reduce analysis time by 50%).
                </li>
                <li>
                  <strong>KPI:</strong> Number of Vulnerabilities Detected - Track the number of vulnerabilities
                  identified by the platform.
                  <br />
                  <strong>Target:</strong> Increase the average number of vulnerabilities detected per project by J%.
                </li>
                <li>
                  <strong>KPI:</strong> Accuracy of Vulnerability Detection - Measure the accuracy of the platform's
                  vulnerability detection (e.g., false positive/negative rates).
                  <br />
                  <strong>Target:</strong> Maintain a false positive rate below K% and a false negative rate below L%.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">2. SDLC Integration:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Number of Integrations with Development Tools - Track the number of integrations
                  implemented with popular development tools (e.g., Jira, Azure DevOps).
                  <br />
                  <strong>Target:</strong> Integrate with M popular development tools within N months.
                </li>
                <li>
                  <strong>KPI:</strong> Adoption of Integrations - Measure the percentage of users who actively use the
                  integrations.
                  <br />
                  <strong>Target:</strong> Achieve an integration adoption rate of O% among users who have integrated.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">3. Knowledge Base and Expert Guidance:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Knowledge Base Usage - Track the number of views, searches, and engagement with
                  the knowledge base.
                  <br />
                  <strong>Target:</strong> Increase knowledge base usage by P% per quarter.
                </li>
                <li>
                  <strong>KPI:</strong> Time Spent on Knowledge Base - Measure the average time users spend browsing the
                  knowledge base.
                  <br />
                  <strong>Target:</strong> Increase the average time spent per knowledge base visit by Q%.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">4. Security and Compliance:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Compliance Rate - Measure the percentage of projects meeting relevant security
                  standards and regulations (e.g., OWASP, NIST).
                  <br />
                  <strong>Target:</strong> Achieve R% compliance rate for projects using the platform.
                </li>
                <li>
                  <strong>KPI:</strong> Reduction in Security Incidents - Measure the reduction in security incidents
                  (e.g., vulnerabilities, breaches) in projects using the platform.
                  <br />
                  <strong>Target:</strong> Reduce the number of security incidents by S% for projects using the
                  platform.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">III. Marketing and Sales Metrics</h3>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">1. Website and Content Performance:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Website Traffic - Track website traffic (e.g., unique visitors, page views,
                  bounce rate).
                  <br />
                  <strong>Target:</strong> Increase website traffic by T% per month.
                </li>
                <li>
                  <strong>KPI:</strong> Lead Generation - Track the number of leads generated through the website (e.g.,
                  demo requests, free trial sign-ups).
                  <br />
                  <strong>Target:</strong> Generate U leads per month.
                </li>
                <li>
                  <strong>KPI:</strong> Content Engagement - Measure engagement with educational content (e.g., blog
                  posts, webinars, whitepapers) - views, downloads, shares.
                  <br />
                  <strong>Target:</strong> Achieve V views/downloads/shares for each piece of content.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">2. Sales Performance:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Sales Qualified Leads (SQLs) - Track the number of leads qualified by the sales
                  team.
                  <br />
                  <strong>Target:</strong> Convert W% of Marketing Qualified Leads (MQLs) to Sales Qualified Leads
                  (SQLs).
                </li>
                <li>
                  <strong>KPI:</strong> Sales Conversion Rate - Track the percentage of SQLs that convert to paying
                  customers.
                  <br />
                  <strong>Target:</strong> Achieve a sales conversion rate of X%.
                </li>
                <li>
                  <strong>KPI:</strong> Sales Cycle Length - Measure the average time it takes to close a deal.
                  <br />
                  <strong>Target:</strong> Reduce the sales cycle length to Y days.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">IV. Operational Metrics</h3>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">1. Development and Operations:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Release Frequency - Measure the frequency of platform updates and new feature
                  releases.
                  <br />
                  <strong>Target:</strong> Release new features or updates every Z weeks/months.
                </li>
                <li>
                  <strong>KPI:</strong> System Uptime - Measure the percentage of time the platform is available.
                  <br />
                  <strong>Target:</strong> Maintain a system uptime of AA% (e.g., 99.9%).
                </li>
                <li>
                  <strong>KPI:</strong> Bug Fix Rate - Measure the rate at which bugs are fixed.
                  <br />
                  <strong>Target:</strong> Resolve BB% of reported bugs within CC days.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">2. Financials:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>KPI:</strong> Burn Rate - Measure the rate at which the company is spending cash.
                  <br />
                  <strong>Target:</strong> Maintain a burn rate within the budget outlined in the seed report.
                </li>
                <li>
                  <strong>KPI:</strong> Runway - The amount of time the company can operate based on current burn rate
                  and available funds.
                  <br />
                  <strong>Target:</strong> Maintain a runway of DD months.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">Key Considerations</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Baseline:</strong> Establish a baseline for each metric before setting targets (e.g., measure
                current churn rate before aiming to reduce it).
              </li>
              <li>
                <strong>Regular Monitoring:</strong> Track these metrics regularly (e.g., weekly, monthly, quarterly) to
                identify trends and make data-driven decisions.
              </li>
              <li>
                <strong>Data Visualization:</strong> Use dashboards and reports to visualize the data and make it
                accessible to the team.
              </li>
              <li>
                <strong>Contextualization:</strong> Analyze the metrics in context, considering external factors and
                market trends.
              </li>
              <li>
                <strong>Flexibility:</strong> Be prepared to adjust the targets and metrics as the business evolves.
              </li>
              <li>
                <strong>Alignment with Seed Report:</strong> Ensure the metrics and targets are aligned with the goals
                and financial projections outlined in the seed investment report.
              </li>
              <li>
                <strong>Prioritization:</strong> Prioritize the metrics that are most critical to achieving the business
                objectives.
              </li>
              <li>
                <strong>Regular Reviews:</strong> Review the metrics and targets on a regular basis to ensure they
                remain relevant and aligned with business goals.
              </li>
              <li>
                <strong>Data Privacy:</strong> Ensure all data collection and usage comply with relevant privacy
                regulations (e.g., GDPR, CCPA).
              </li>
            </ul>
          </div>

          <p className="mt-8 text-lg">
            This comprehensive list provides a robust framework for measuring the success of EdgeReq Analytics. The
            specific targets (X, Y, Z, etc.) should be determined based on market research, financial projections, and
            the company's overall strategic goals. The key is to have a clear plan for how to measure and assess the
            business's success, and to use the data to drive continuous improvement.
          </p>

          <div className="mt-10 flex justify-between">
            <Link
              href="/business-dev/challenge-mitigation"
              className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Previous: Challenge Mitigation
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
            >
              Back to Home
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
