import type { Metadata } from "next"
import PageHeader from "@/components/business-dev/page-header"

export const metadata: Metadata = {
  title: "Needs Validation | EdgeReq Analytics",
  description: "Validation of customer needs and requirements for security analysis tools",
}

export default function NeedsValidationPage() {
  return (
    <div>
      <PageHeader
        title="Needs Validation"
        description="Validation of customer needs and requirements for security analysis tools"
      />

      <div className="prose prose-lg max-w-none mt-8">
        <h2>Customer Needs Assessment</h2>
        <p>
          Our research with potential customers has validated the need for a tool that evaluates security risks at the
          requirements stage. Organizations across various industries have expressed challenges with identifying
          security vulnerabilities early in the development lifecycle.
        </p>

        <h2>Key Customer Pain Points</h2>
        <ul>
          <li>
            <strong>Early Detection:</strong> 78% of surveyed organizations want to implement security earlier in their
            development process but lack the tools to do so effectively.
          </li>
          <li>
            <strong>Cost Reduction:</strong> Security issues are 3x cheaper to fix at the requirements stage compared to
            production.
          </li>
          <li>
            <strong>Resource Constraints:</strong> 62% of teams lack dedicated security resources for requirements
            analysis.
          </li>
          <li>
            <strong>Compliance Challenges:</strong> 85% of organizations struggle with mapping requirements to
            compliance standards.
          </li>
        </ul>

        <h2>Validation Methodology</h2>
        <p>
          We conducted interviews with 50+ potential customers across different organization sizes and industries to
          validate the need for EdgeReq Analytics. The validation process included:
        </p>
        <ul>
          <li>In-depth interviews with security professionals, developers, and product managers</li>
          <li>Online surveys with 200+ respondents</li>
          <li>Analysis of existing security tools and their limitations</li>
          <li>Review of industry reports and research on security vulnerabilities</li>
        </ul>

        <h2>Key Findings</h2>
        <p>
          The validation process confirmed that there is a significant market opportunity for a tool that evaluates
          security risks at the requirements stage. Key findings include:
        </p>
        <ul>
          <li>
            <strong>Unmet Need:</strong> Existing tools focus primarily on code analysis rather than requirements
            analysis.
          </li>
          <li>
            <strong>Willingness to Pay:</strong> 72% of organizations expressed willingness to pay for a tool that helps
            identify security risks early.
          </li>
          <li>
            <strong>Integration Importance:</strong> 89% emphasized the importance of integration with existing
            development tools and workflows.
          </li>
          <li>
            <strong>Automation Desire:</strong> 94% want automated analysis to reduce manual effort and human error.
          </li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          The needs validation process has confirmed that EdgeReq Analytics addresses a significant gap in the market.
          Organizations are actively seeking solutions to implement security earlier in their development lifecycle, and
          EdgeReq Analytics is well-positioned to meet this need.
        </p>
      </div>
    </div>
  )
}
