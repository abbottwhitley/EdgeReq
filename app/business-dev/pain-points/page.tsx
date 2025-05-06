import PageHeader from "@/components/business-dev/page-header"
import Link from "next/link"

export default function PainPointsPage() {
  return (
    <main>
      <PageHeader
        title="Pain Point Analysis"
        description="Consumer pain points and unmet needs related to software requirements evaluation for security risks"
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">
            Consumer Pain Points and Unmet Needs: Software Requirements Evaluation for Security Risks
          </h2>

          <p className="mb-6">
            Here's a summary of consumer pain points and unmet needs related to software requirements evaluation for
            security risks, based on extensive research and analysis.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">1. Lack of Proactive Security Measures:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> Many discussions focus on post-development vulnerabilities and
                remediation, highlighting a need for early-stage security practices. The existing focus on "shift left
                security" confirms this unmet need, as does the general focus on risk assessment.
              </li>
              <li>
                <strong>Impact:</strong> Security issues discovered late in development are significantly more expensive
                to fix and may lead to project delays or compromised security.
              </li>
              <li>
                <strong>Source:</strong> "Shift Left Security" trend in the provided context, and Reddit posts
                emphasizing the importance of addressing security during requirements.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">
              2. Difficulty in Integrating Security into the SDLC:
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> Developers may not fully understand or prioritize security. There's a
                significant gap between security teams and development teams in many organizations.
              </li>
              <li>
                <strong>Impact:</strong> Security becomes an afterthought rather than being integrated throughout the
                development process, leading to vulnerabilities and inefficient remediation.
              </li>
              <li>
                <strong>Source:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <a
                      href="https://www.reddit.com/r/blueteamsec/comments/1852bgk/how_do_you_make_your_developers_care_about/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reddit: How do you make your developers care about security?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/SoftwareEngineering/comments/mfqec3/do_any_software_engineers_truly_think_about/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reddit: Do any software engineers truly think about security?
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">3. Inadequate Security Requirements:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> Developers often face unclear, incomplete, or inconsistent security
                requirements, making it difficult to implement secure software.
              </li>
              <li>
                <strong>Impact:</strong> Without clear security requirements, developers make assumptions that may lead
                to vulnerabilities or implement inconsistent security controls.
              </li>
              <li>
                <strong>Source:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <a
                      href="https://www.blackduck.com/blog/software-security-requirements.html"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BlackDuck: Software Security Requirements
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">4. Difficulty in Assessing and Managing Risk:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> Organizations struggle to identify, assess, and prioritize security risks
                associated with software development.
              </li>
              <li>
                <strong>Impact:</strong> Without proper risk assessment, organizations may focus on the wrong security
                issues or miss critical vulnerabilities.
              </li>
              <li>
                <strong>Source:</strong> Several Reddit posts discuss risk assessment, and general market analysis
                confirms this challenge.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">5. Software Supply Chain Vulnerabilities:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> The increasing reliance on open-source and third-party components
                introduces significant security risks.
              </li>
              <li>
                <strong>Impact:</strong> Vulnerabilities in dependencies can compromise the security of the entire
                application, often without the development team's knowledge.
              </li>
              <li>
                <strong>Source:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <a
                      href="https://www.cybersecuritydive.com/news/google-software-supply-chain-security/638380/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cybersecurity Dive: Google Software Supply Chain Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://industrialcyber.co/supply-chain-security/wef-sounds-alarm-on-software-supply-chain-vulnerabilities-flags-risks-in-open-source-and-third-party-dependencies/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Industrial Cyber: WEF Sounds Alarm on Software Supply Chain Vulnerabilities
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">6. Compliance Challenges:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> Meeting regulatory compliance standards (e.g., PCI-DSS, GDPR, HIPAA) can
                be complex and time-consuming.
              </li>
              <li>
                <strong>Impact:</strong> Non-compliance can result in significant fines, legal issues, and damage to
                reputation.
              </li>
              <li>
                <strong>Source:</strong> Market dynamics described in the provided context and discussions related to
                compliance requirements.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">7. Automation Gap:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> Manual security assessments and testing are time-consuming and prone to
                human error.
              </li>
              <li>
                <strong>Impact:</strong> Limited resources for security testing lead to incomplete assessments and
                missed vulnerabilities.
              </li>
              <li>
                <strong>Source:</strong> Market dynamics described in provided context highlighting the increasing
                importance of automation in security tasks.
              </li>
            </ul>
          </div>

          <p className="mt-8 text-lg">
            These pain points and unmet needs highlight the importance of a tool like EdgeReq Analytics that can
            evaluate software requirements for security risks. By addressing these challenges, EdgeReq Analytics can
            provide significant value to software development teams and organizations by improving security posture and
            reducing the risk of vulnerabilities.
          </p>

          <div className="mt-10 flex justify-between">
            <Link
              href="/business-dev"
              className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Business Development Home
            </Link>
            <Link
              href="/business-dev/market-research"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
            >
              Next: Market Research
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
