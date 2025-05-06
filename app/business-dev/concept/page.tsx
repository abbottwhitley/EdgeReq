import PageHeader from "@/components/business-dev/page-header"
import Link from "next/link"

export default function ConceptPage() {
  return (
    <main>
      <PageHeader title="Concept Development" description="The concept and value proposition for EdgeReq Analytics" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Business Proposition: EdgeReq Analytics</h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">1. Core Value Proposition</h3>
            <p className="mb-4">
              EdgeReq Analytics is a focused application that proactively evaluates uploaded software requirements for
              qualities that may introduce downstream security risks. It shifts security left in the SDLC by identifying
              potential vulnerabilities early in the requirements phase, providing actionable insights and
              recommendations to developers. EdgeReq enables organizations to build more secure software, reduce the
              cost of remediation, and improve compliance.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">2. Key Differentiators</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Proactive Requirements Analysis:</strong> Unlike tools focused solely on code scanning or
                penetration testing, EdgeReq analyzes requirements documents (e.g., written specifications, user
                stories) <em>before</em> code is written.
              </li>
              <li>
                <strong>Automated Security Requirements Validation:</strong> EdgeReq automatically identifies potential
                security weaknesses in requirements by analyzing natural language text, identifying ambiguities,
                inconsistencies, and missing security controls based on predefined rules and industry best practices
                (OWASP, NIST).
              </li>
              <li>
                <strong>Actionable Recommendations:</strong> EdgeReq provides clear, concise, and actionable
                recommendations to developers, including specific suggestions for improving requirements, identifying
                potential vulnerabilities (e.g., input validation issues, authentication gaps), and suggesting security
                controls.
              </li>
              <li>
                <strong>Integration with SDLC:</strong> EdgeReq integrates seamlessly with existing development and
                DevOps workflows, including CI/CD pipelines, allowing for automated requirements analysis as part of the
                software development process.
              </li>
              <li>
                <strong>Focus on Supply Chain Security:</strong> Analyzes requirements for dependencies on external
                components and suggests security best practices for managing supply chain risks.
              </li>
              <li>
                <strong>Compliance Support:</strong> Assists with achieving and maintaining compliance with relevant
                regulatory standards (e.g., PCI-DSS, GDPR, HIPAA) by identifying requirements gaps and mapping
                requirements to compliance controls.
              </li>
              <li>
                <strong>Customizable Rule Sets:</strong> Allows users to customize rule sets and define specific
                security requirements relevant to their organization and projects.
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> Provides a clear and intuitive interface for uploading
                requirements, viewing analysis results, and accessing recommendations. The interface will allow
                different views, customized by user roles.
              </li>
              <li>
                <strong>Reporting and Metrics:</strong> Generates comprehensive reports and provides metrics on security
                risk assessment, vulnerability identification, and requirements quality.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">3. Target Audience</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Software development teams</li>
              <li>Security engineers and architects</li>
              <li>Project managers</li>
              <li>Compliance officers</li>
              <li>Organizations in regulated industries (e.g., finance, healthcare)</li>
              <li>Any organization aiming to improve the security of its software development process</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">4. Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Requirements Upload:</strong> Accepts various document formats (e.g., .docx, .pdf, .txt).
              </li>
              <li>
                <strong>Automated Analysis:</strong> Uses natural language processing (NLP) and rule-based engines to
                analyze requirements.
              </li>
              <li>
                <strong>Vulnerability Identification:</strong> Detects potential security risks based on OWASP Top 10,
                SANS Top 25, and other industry standards.
              </li>
              <li>
                <strong>Risk Assessment:</strong> Provides risk scores based on severity and likelihood of occurrence.
              </li>
              <li>
                <strong>Recommendation Engine:</strong> Generates actionable suggestions for improving requirements.
              </li>
              <li>
                <strong>Reporting and Visualization:</strong> Generates comprehensive reports and visualizes results.
              </li>
              <li>
                <strong>Integration APIs:</strong> Provides APIs for integration with CI/CD pipelines and other
                development tools.
              </li>
              <li>
                <strong>Customizable Rules:</strong> Allows for custom rule creation and modification.
              </li>
              <li>
                <strong>User Roles and Permissions:</strong> Role-based access control for different users and teams.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">5. Revenue Model</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Subscription-based pricing (e.g., per user, per project, or based on the number of requirements
                analyzed)
              </li>
              <li>Tiered pricing based on features and usage</li>
              <li>Potential for add-on services such as custom rule development and consulting</li>
            </ul>
          </div>

          <p className="mt-8 text-lg">
            This proposition directly addresses the identified pain points by offering a proactive, automated solution
            for evaluating software requirements for security risks, with a strong focus on integration, clear
            recommendations, and compliance support.
          </p>

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
