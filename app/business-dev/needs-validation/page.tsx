import PageHeader from "@/components/business-dev/page-header"
import Link from "next/link"

export default function NeedsValidationPage() {
  return (
    <main>
      <PageHeader
        title="Consumer Needs Validation"
        description="Validation of consumer needs for software requirements evaluation for security risks"
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">
            Consumer Needs Validation Report: Software Requirements Evaluation for Security Risks
          </h2>

          <p className="mb-6">
            This report summarizes consumer feedback and validates the needs related to software requirements evaluation
            for security risks, based on web-based research and analysis.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-primary mb-3">I. Introduction</h3>
            <p>
              This report aims to identify and validate the needs of consumers regarding the evaluation of software
              requirements for security risks. The objective is to understand the pain points and unmet needs related to
              this area to inform the development of EdgeReq Analytics, a focused application that evaluates uploaded
              software requirements for qualities that may introduce downstream security risks.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">II. Methodology</h3>
            <p>
              The research was conducted using the "Search the internet" tool to identify relevant surveys, discussions,
              blog posts, and articles. The search queries were focused on:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>"software requirements security risk survey"</li>
              <li>"software security requirements pain points"</li>
              <li>"software requirements security risk unmet needs"</li>
            </ul>
            <p>
              The search results were analyzed to identify recurring themes and common concerns expressed by consumers
              and industry experts.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">III. Findings: Pain Points and Unmet Needs</h3>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">1. Lack of Proactive Security Measures:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Pain Point:</strong> Many organizations and developers focus on post-development vulnerability
                  remediation rather than implementing security measures early in the software development lifecycle
                  (SDLC). This is confirmed by the prevalence of discussions around "shift left security".
                </li>
                <li>
                  <strong>Unmet Need:</strong> A need for tools and processes that address security concerns during the
                  requirements phase. This includes automated analysis and risk assessment.
                </li>
                <li>
                  <strong>Source:</strong> The provided context, "Shift Left Security" trend, and discussions about
                  post-development vulnerabilities.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">2. Difficulty in Integrating Security into the SDLC:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Pain Point:</strong> Developers may not fully understand or prioritize security due to a lack
                  of training, unclear requirements, or perceived delays in development.
                </li>
                <li>
                  <strong>Unmet Need:</strong> Seamless integration of security tools and practices with existing
                  development and DevOps workflows. This includes automating security checks and providing clear
                  guidance to developers.
                </li>
                <li>
                  <strong>Source:</strong> Multiple Reddit threads, such as "How do you make your developers care about
                  security?" and "Do any software engineers truly think about security?", as well as market dynamics
                  described in the provided context.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">3. Inadequate Security Requirements:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Pain Point:</strong> Developers often face unclear, incomplete, or inconsistent security
                  requirements, making it difficult to implement secure software.
                </li>
                <li>
                  <strong>Unmet Need:</strong> Clear, concise, testable, and measurable software security requirements.
                  The lack of adequate input validation is also identified as an issue.
                </li>
                <li>
                  <strong>Source:</strong> "Software Security Requirements" blog posts and the provided context - OWASP
                  Top 10.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">4. Difficulty in Assessing and Managing Risk:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Pain Point:</strong> Organizations struggle to identify, assess, and prioritize security risks
                  associated with software development.
                </li>
                <li>
                  <strong>Unmet Need:</strong> A tool or process that automatically analyzes requirements documents to
                  identify potential security vulnerabilities and risks. Organizations need to be able to assess the
                  risk of software products.
                </li>
                <li>
                  <strong>Source:</strong> Objective of the product, discussion of vulnerabilities and unmet needs,
                  general market analysis.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">5. Software Supply Chain Vulnerabilities:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Pain Point:</strong> The increasing reliance on open-source and third-party components
                  introduces significant security risks.
                </li>
                <li>
                  <strong>Unmet Need:</strong> Tools and processes that address the vulnerabilities present within
                  open-source components and third-party dependencies.
                </li>
                <li>
                  <strong>Source:</strong> Articles on Google software supply chain security and WEF warnings about
                  software supply chain vulnerabilities.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">6. Compliance Challenges:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Pain Point:</strong> Meeting regulatory compliance standards (e.g., PCI-DSS, GDPR, HIPAA) can
                  be complex and time-consuming.
                </li>
                <li>
                  <strong>Unmet Need:</strong> Tools that assist with achieving and maintaining compliance.
                </li>
                <li>
                  <strong>Source:</strong> Provided context and discussions related to compliance requirements.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">7. Automation Gap:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Pain Point:</strong> Manual security assessments and testing are time-consuming and prone to
                  human error.
                </li>
                <li>
                  <strong>Unmet Need:</strong> Increased automation of security tasks, including vulnerability scanning
                  and risk assessment, to improve efficiency and accuracy.
                </li>
                <li>
                  <strong>Source:</strong> Market dynamics described in provided context and analysis of existing pain
                  points.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">IV. Conclusion</h3>
            <p>
              The research validates the need for a tool like EdgeReq Analytics that can evaluate software requirements
              for security risks. The identified pain points and unmet needs highlight the importance of:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Proactive security measures during the requirements phase</li>
              <li>Seamless integration with existing SDLC processes</li>
              <li>Clear and concise security requirements</li>
              <li>Automated risk assessment and vulnerability identification</li>
              <li>Addressing supply chain vulnerabilities</li>
              <li>Supporting compliance requirements</li>
              <li>Automating security tasks</li>
            </ul>
            <p className="mt-4">
              The development of EdgeReq Analytics addresses these needs and would significantly benefit software
              development teams and organizations by improving security posture and reducing the risk of
              vulnerabilities.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">V. Sources Used</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provided context</li>
              <li>Reddit discussions on developer security awareness</li>
              <li>Blog posts on software security requirements</li>
              <li>Articles on supply chain security</li>
              <li>Multiple search results from Google</li>
            </ul>
          </div>

          <div className="mt-10 flex justify-between">
            <Link
              href="/business-dev/concept"
              className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Previous: Concept Development
            </Link>
            <Link
              href="/business-dev/seed-investment"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
            >
              Next: Seed Investment
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
