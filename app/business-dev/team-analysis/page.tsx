import PageHeader from "@/components/business-dev/page-header"
import Link from "next/link"

export default function TeamAnalysisPage() {
  return (
    <main>
      <PageHeader title="Team Analysis" description="Recommended team structure and size for EdgeReq Analytics" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">EdgeReq Startup: Recommended Team Structure and Size</h2>

          <p className="mb-6">
            This report details the recommended team structure and size for the EdgeReq startup, based on the provided
            financial projections, business model, and target market. The recommendations prioritize a lean approach in
            the initial stages, focusing on core competencies and scalability.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">I. Team Size and Initial Structure (Year 1)</h3>
            <p className="mb-4">
              Given the projected revenue and expenses in Year 1, a small, highly efficient team is recommended. The
              focus should be on building the core product, acquiring early customers, and establishing a solid
              foundation for growth.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Total Team Size:</strong> 3-4 Full-Time Equivalent (FTE) employees.
              </li>
              <li>
                <strong>Key Roles:</strong>
                <ol className="list-decimal pl-6 mt-2 space-y-4">
                  <li>
                    <strong>Founder/CEO (1 FTE):</strong>
                    <ul className="list-disc pl-6 mt-1">
                      <li>
                        <strong>Responsibilities:</strong> Overall vision, strategy, fundraising, business development,
                        sales, and high-level product direction. This individual must wear multiple hats initially.
                      </li>
                      <li>
                        <strong>Skills:</strong> Strong leadership, business acumen, sales and marketing experience,
                        understanding of software development and security principles.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Lead Developer/Software Engineer (1 FTE):</strong>
                    <ul className="list-disc pl-6 mt-1">
                      <li>
                        <strong>Responsibilities:</strong> Development of the core EdgeReq software, including feature
                        development, testing, and maintenance. Responsible for architectural decisions and technical
                        implementation.
                      </li>
                      <li>
                        <strong>Skills:</strong> Strong programming skills (e.g., Python, Java, depending on the chosen
                        tech stack), experience with security analysis, understanding of software development
                        lifecycles, cloud infrastructure experience (AWS, Azure, etc.).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Marketing/Sales & Customer Success (1 FTE):</strong>
                    <ul className="list-disc pl-6 mt-1">
                      <li>
                        <strong>Responsibilities:</strong> Implement the marketing strategy outlined in the financial
                        projection (SEO, PPC, content marketing, social media). Handle initial sales efforts, manage
                        customer onboarding, and provide customer support. As well as, managing lead generation and
                        conversion.
                      </li>
                      <li>
                        <strong>Skills:</strong> Marketing experience (digital marketing, content creation), sales
                        skills, customer relationship management (CRM) experience, excellent communication skills,
                        understanding of the target market.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      (Optional, Part-Time/Contractor) - Security/Requirements Expert (0.25 - 0.5 FTE or Contract):
                    </strong>
                    <ul className="list-disc pl-6 mt-1">
                      <li>
                        <strong>Responsibilities:</strong> Provide expert guidance on security requirements analysis,
                        especially in the initial phase. Can also assist with rule development and validation, as well
                        as provide training materials for the customers. This role can be filled on a part-time or
                        contract basis initially to minimize costs.
                      </li>
                      <li>
                        <strong>Skills:</strong> Deep knowledge of software security principles, experience with secure
                        coding practices, understanding of security standards and regulations, experience with
                        requirements engineering.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">II. Team Expansion (Year 2-3) - Scalability Plan</h3>
            <p className="mb-4">
              As revenue increases and the business grows, the team should be expanded strategically. The expansion
              should align with the milestones outlined in the financial projections, such as increased customer
              acquisition and product feature development.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Year 2 Expansion (Based on Projections):</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <strong>Sales/Marketing Team:</strong> Hire a dedicated sales representative. Expand marketing
                    efforts with another marketing specialist.
                  </li>
                  <li>
                    <strong>Customer Support Team:</strong> Hire at least one support specialist.
                  </li>
                  <li>
                    <strong>Development Team:</strong> Hire one additional developer to improve the product and build
                    new features.
                  </li>
                  <li>
                    <strong>Possible Roles:</strong>
                    <ul className="list-disc pl-6 mt-1">
                      <li>
                        <strong>Sales Representative (1 FTE):</strong> Focus on closing deals and managing the sales
                        pipeline.
                      </li>
                      <li>
                        <strong>Marketing Specialist (1 FTE):</strong> Expand marketing efforts, content creation, and
                        SEO management.
                      </li>
                      <li>
                        <strong>Customer Support Specialist (1 FTE):</strong> Provide customer support, onboarding, and
                        manage customer issues.
                      </li>
                      <li>
                        <strong>Software Engineer (1 FTE):</strong> To support new product features, maintenance.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Year 3 Expansion (Based on Projections):</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    Continued expansion of the sales, marketing, and customer success teams based on performance and
                    acquisition goals.
                  </li>
                  <li>Additional developers to support product development, security and integrations.</li>
                  <li>
                    <strong>Possible Roles:</strong>
                    <ul className="list-disc pl-6 mt-1">
                      <li>Senior Software Engineers.</li>
                      <li>Security Engineer (if not hired earlier).</li>
                      <li>Product Manager: Helps drive product roadmap based on customer needs.</li>
                      <li>Team Lead (If team is growing).</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">III. Key Considerations</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Outsourcing:</strong> Consider outsourcing certain functions initially, such as:
                <ul className="list-disc pl-6 mt-1">
                  <li>Legal and Accounting</li>
                  <li>Customer Support (Initially)</li>
                  <li>Specific tasks of marketing (content creation, PR)</li>
                </ul>
              </li>
              <li>
                <strong>Remote Work:</strong> The SaaS business model is conducive to remote work, allowing access to a
                wider talent pool and potentially reducing operational costs.
              </li>
              <li>
                <strong>Skill Sets:</strong>
                <ul className="list-disc pl-6 mt-1">
                  <li>
                    <strong>Agile Development:</strong> Use Agile development methodologies to adapt quickly and deploy
                    features efficiently.
                  </li>
                  <li>
                    <strong>DevSecOps:</strong> The team should embrace DevSecOps principles, integrating security into
                    the entire development lifecycle.
                  </li>
                  <li>
                    <strong>Customer-Centricity:</strong> Build a customer-centric culture, with a strong focus on
                    understanding customer needs and providing excellent support.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tools:</strong> Utilize project management tools (e.g., Jira, Asana), communication platforms
                (e.g., Slack), and CRM software (e.g., HubSpot, Salesforce) to streamline workflows.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">IV. Conclusion</h3>
            <p>
              By starting with a lean, highly skilled team and expanding strategically based on performance, EdgeReq can
              maximize its chances of success. The recommended team structure prioritizes the core functions of product
              development, sales & marketing, and customer success, with expert support when necessary. Regular review
              of the team structure, roles, and responsibilities is essential to maintain efficiency and adapt to the
              changing needs of the business.
            </p>
          </div>

          <div className="mt-10 flex justify-between">
            <Link
              href="/business-dev/revenue-analysis"
              className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Previous: Revenue Analysis
            </Link>
            <Link
              href="/business-dev/challenge-mitigation"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
            >
              Next: Challenge Mitigation
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
