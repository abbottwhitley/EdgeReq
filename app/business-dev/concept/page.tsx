import PageHeader from "@/components/business-dev/page-header"
import Link from "next/link"

export default function ConceptPage() {
  return (
    <main>
      <PageHeader title="Concept Development" description="The concept and value proposition for ReqSecure" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">ReqSecure</h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">Value Proposition</h3>
            <p className="mb-4">
              ReqSecure empowers development teams to proactively identify and mitigate security risks by analyzing
              software requirements <em>before</em> code is written. This helps prevent vulnerabilities, reduces
              development costs associated with fixing security flaws later, and ensures compliance with security
              standards.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">Target Audience</h3>
            <p className="mb-4">
              Software developers, project managers, security architects, and compliance officers who are involved in
              the software development lifecycle.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">Core Functionality</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Requirements Upload:</strong> Users upload software requirements documents (e.g., in formats
                like .docx, .pdf, or even requirements management tools' exports).
              </li>
              <li>
                <strong>Automated Analysis:</strong> ReqSecure uses AI and rule-based engines to analyze the
                requirements for security-related keywords, potential vulnerabilities (e.g., missing input validation,
                authorization issues), and compliance with security best practices.
              </li>
              <li>
                <strong>Risk Scoring and Prioritization:</strong> ReqSecure assigns a risk score to each identified
                potential vulnerability, and prioritizes based on severity and potential impact.
              </li>
              <li>
                <strong>Actionable Recommendations:</strong> The application provides specific, actionable
                recommendations for mitigating the identified risks, including suggested changes to the requirements or
                links to relevant security best practices.
              </li>
              <li>
                <strong>Reporting and Integration:</strong> Generates comprehensive reports that can be shared with
                stakeholders, including security teams and compliance officers, and integrates with popular project
                management and bug tracking systems.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">Key Differentiators</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Focus on Pre-Code Analysis:</strong> Unlike SAST/DAST tools that analyze code, ReqSecure focuses
                on requirements, shifting security left in the SDLC.
              </li>
              <li>
                <strong>Proactive Risk Mitigation:</strong> Identifies vulnerabilities early in the development process,
                reducing the cost and time to fix security issues.
              </li>
              <li>
                <strong>AI-Powered and Rule-Based Analysis:</strong> Combines the power of AI to identify patterns and
                anomalies with rule-based analysis for compliance and best-practice checks, offering a hybrid approach.
              </li>
              <li>
                <strong>Actionable Guidance:</strong> Provides clear, specific recommendations for mitigating identified
                risks, not just lists of vulnerabilities.
              </li>
              <li>
                <strong>Integration with Requirements Management Tools:</strong> Allows for seamless integration with
                popular requirements management tools.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">Business Model</h3>
            <p className="mb-4">
              Software-as-a-Service (SaaS) model with tiered pricing based on features, the number of projects, or the
              size of the organization. Could also have an enterprise level for on-premise deployment.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">Marketing Strategy</h3>
            <p className="mb-4">
              Focus on content marketing, emphasizing the cost savings and proactive security benefits of ReqSecure.
              Target specific industries with compliance requirements, such as healthcare and finance. Leverage case
              studies demonstrating the effectiveness of the tool.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">Competitive Advantage</h3>
            <p className="mb-4">
              By focusing on the critical but often-overlooked phase of software requirements, ReqSecure offers a unique
              and valuable service that proactively enhances software security and reduces development costs. It
              addresses a clear need and pain point highlighted in the consumer feedback, setting it apart from tools
              that focus solely on code analysis.
            </p>
          </div>

          <div className="mt-10 flex justify-between">
            <Link
              href="/business-dev/market-research"
              className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Previous: Market Research
            </Link>
            <Link
              href="/business-dev/needs-validation"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
            >
              Next: Consumer Needs Validation
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
