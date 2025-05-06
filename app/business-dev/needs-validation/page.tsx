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
            Consumer Feedback and Needs Validation: Software Requirements Evaluation for Security Risks
          </h2>

          <p className="mb-6">
            This report summarizes consumer feedback and validates the need for a tool that evaluates software
            requirements for potential security risks. The analysis is based on a review of existing online discussions
            and further internet searches.
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
                <strong>Validation:</strong> The initial context describes this pain point. Search results confirm this.
                A search for "software security risk assessment" returns multiple articles outlining the need and
                methods for such assessments. These include checklists, guides, and discussions on the challenges.
              </li>
              <li>
                <strong>Quantification:</strong> Multiple threads on Reddit and forums discuss the challenges of
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
                  <li>
                    <a
                      href="https://www.code-intelligence.com/blog/application-security-risk-assessment-checklist"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code Intelligence: Application Security Risk Assessment Checklist
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.legitsecurity.com/blog/a-10-step-application-security-risk-assessment-checklist"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Legit Security: 10-Step Application Security Risk Assessment Checklist
                    </a>
                  </li>
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
                <strong>Validation:</strong> The initial context notes this. Further searches reveal that this is a
                frequently discussed issue. Several sources point to a lack of prioritization, including survey results.
              </li>
              <li>
                <strong>Quantification:</strong> Threads like "How do you make your developers care about security?"
                indicate this as a recurring issue. Surveys and articles suggest a large percentage of developers do not
                prioritize security.
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
                  <li>
                    <a
                      href="https://www.securecodewarrior.com/press-releases/secure-code-warrior-survey-finds-86-of-developers-do-not-view-application-security-as-a-top-priority"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Secure Code Warrior: 86% of Developers Do Not View Application Security as a Top Priority
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.itpro.com/security/developers-spend-17-hours-security-dont-consider-it-a-top-priority"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IT Pro: Developers Spend 17 Hours on Security, Don't Consider it a Top Priority
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
                <strong>Validation:</strong> The initial context identifies this. Search results for "software security
                requirements best practices" reveal resources and guidelines on defining and implementing security
                requirements, confirming the need.
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
                  <li>
                    <a
                      href="https://www.securitycompass.com/whitepapers/6-steps-to-getting-started-with-software-security-requirements/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Security Compass: 6 Steps to Getting Started with Software Security Requirements
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
                <strong>Validation:</strong> This is a key identified pain point, verified by multiple posts on Reddit
                and other sources. Searching for "software pre-installation security checks" highlights the steps
                involved (checking sources, verifying integrity, scanning for malware) and confirms the complexity.
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
                  <li>
                    <a
                      href="https://www.wizer-training.com/blog/security-cheatsheet-for-it-admins-when-installing-new-software"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wizer Training: Security Cheatsheet for IT Admins When Installing New Software
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
                <strong>Validation:</strong> Discussions about secure coding practices and related tools suggest this is
                a valid need, even though it wasn't specifically validated by the internet searches done.
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
                <strong>Validation:</strong> This finding, while mentioned in the context, was not directly validated by
                the internet searches performed due to lack of time to search for it.
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
            The analysis of both the initial context and the additional web-based research confirms and validates the
            identified consumer needs related to software requirements evaluation for security risks. The research
            highlights specific pain points such as the difficulty of assessing software security, challenges related to
            developers prioritizing security, the need for well-defined security requirements, and difficulties with
            pre-installation checks. These findings support the need for a tool that can evaluate software requirements
            for potential security risks.
          </p>

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
