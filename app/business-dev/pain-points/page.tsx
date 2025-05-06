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
            Based on the analysis of Reddit and online forums, the following pain points and unmet needs related to
            software requirements evaluation for security risks were identified:
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">1. Difficulty Assessing Software Security:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> Users express challenges in determining the security posture of software,
                particularly before installation or use. This includes a lack of clear methods to assess the risk
                associated with a new piece of software.
              </li>
              <li>
                <strong>Quantification:</strong> Multiple threads on both Reddit and forums discuss the challenges of
                evaluating software security.
              </li>
              <li>
                <strong>Source:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <a
                      href="https://www.reddit.com/r/sysadmin/comments/18g0u61/how_do_you_determine_what_software_is_safe_to_use/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reddit: How do you determine what software is safe to use
                    </a>
                  </li>
                  <li>Various forum discussions on security risks.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">2. Developers' Lack of Prioritization of Security:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> Some posts suggest that developers may not always prioritize security,
                leading to insecure code and vulnerabilities. This could be due to a lack of awareness, training, or
                time constraints.
              </li>
              <li>
                <strong>Quantification:</strong> Threads like "How do you make your developers care about security?"
                indicate this as a recurring issue.
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
            <h3 className="text-xl font-bold text-primary mb-3">3. Lack of Clear Security Requirements:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> The need for well-defined security requirements is apparent. Without clear
                guidelines, it becomes difficult to build secure software.
              </li>
              <li>
                <strong>Quantification:</strong> Discussion threads focus on the challenges of defining and implementing
                security requirements, highlighting the need for best practices and guidelines.
              </li>
              <li>
                <strong>Source:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <a
                      href="https://www.reddit.com/r/SoftwareEngineering/comments/oh2h8w/what_are_common_security_requirements_when/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reddit: What are common security requirements when developing software?
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">
              4. Difficulties in Software Pre-Installation Checks:
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> Users and administrators struggle with how to adequately vet software
                before installation. Current methods (e.g., manual review, searching online) are often insufficient.
              </li>
              <li>
                <strong>Quantification:</strong> Multiple posts on Reddit discuss methods of checking software for
                vulnerabilities, but indicate challenges in the process.
              </li>
              <li>
                <strong>Source:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <a
                      href="https://www.reddit.com/r/sysadmin/comments/kvur1w/how_do_you_go_about_checking_a_potential_software/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reddit: How do you go about checking a potential software?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/sysadmin/comments/1bxr15b/researching_new_software_for_security/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reddit: Researching new software for security
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">5. Need for Secure Coding Practices and Tools:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> There's a need for information, guidance, and tools related to secure
                coding practices. This includes input validation, encryption, and the avoidance of common
                vulnerabilities.
              </li>
              <li>
                <strong>Quantification:</strong> Discussions about secure coding practices suggest a need for education
                and practical tools.
              </li>
              <li>
                <strong>Source:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <a
                      href="https://www.reddit.com/r/CyberSecurityAdvice/comments/1frxsdm/what_do_i_need_to_know_about_security_as_a/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reddit: What do I need to know about security as a developer?
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">
              6. Software Security as a Barrier to Adoption or Use:
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Description:</strong> Organizations may ban software due to perceived security risks.
              </li>
              <li>
                <strong>Quantification:</strong> One post mentions a software being banned by an agency due to security
                concerns.
              </li>
              <li>
                <strong>Source:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <a
                      href="https://forums.zotero.org/discussion/122156/zotero-deemed-security-risk"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zotero Forums: Zotero deemed security risk
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <p className="mt-8 text-lg">
            These pain points and unmet needs suggest a clear opportunity for a tool that can evaluate software
            requirements for potential security risks, thereby proactively addressing the issues before coding. The need
            for such a tool is emphasized in the identified pain points and unmet needs.
          </p>

          <div className="mt-10 flex justify-between">
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
