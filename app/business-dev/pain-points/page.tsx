import type { Metadata } from "next"
import PageHeader from "@/components/business-dev/page-header"

export const metadata: Metadata = {
  title: "Pain Points | EdgeReq Analytics",
  description: "Identification of key pain points and challenges in the security requirements space",
}

export default function PainPointsPage() {
  return (
    <div>
      <PageHeader
        title="Pain Points"
        description="Identification of key pain points and challenges in the security requirements space"
      />

      <div className="prose prose-lg max-w-none mt-8">
        <h2>Market Pain Points</h2>
        <p>
          Through extensive market research and customer interviews, we have identified several critical pain points
          that organizations face when dealing with security requirements in software development. These pain points
          represent significant opportunities for EdgeReq Analytics to provide value.
        </p>

        <h3>1. Lack of Early Security Integration</h3>
        <p>
          <strong>Pain Point:</strong> Security considerations are often introduced too late in the software development
          lifecycle, leading to costly rework and delays.
        </p>
        <p>
          <strong>Impact:</strong> Organizations face significant costs when security vulnerabilities are discovered
          late in the development process or after deployment. The cost to fix a security issue in production can be 30x
          higher than addressing it at the requirements stage.
        </p>
        <p>
          <strong>Customer Quote:</strong> &quot;We spend weeks reworking features because security requirements
          weren&apos;t considered until after development was nearly complete.&quot;
        </p>

        <h3>2. Manual and Inconsistent Security Analysis</h3>
        <p>
          <strong>Pain Point:</strong> Security analysis of requirements is often manual, inconsistent, and dependent on
          the expertise of individual security professionals.
        </p>
        <p>
          <strong>Impact:</strong> Manual processes lead to inconsistent results, missed vulnerabilities, and
          inefficient use of limited security resources. Organizations struggle to maintain consistent security
          standards across projects.
        </p>
        <p>
          <strong>Customer Quote:</strong> &quot;Our security review process varies widely depending on which security
          analyst is assigned to the project.&quot;
        </p>

        <h3>3. Security Expertise Shortage</h3>
        <p>
          <strong>Pain Point:</strong> There is a significant shortage of security professionals with the expertise to
          evaluate requirements for security implications.
        </p>
        <p>
          <strong>Impact:</strong> Organizations struggle to hire and retain security experts, leading to security
          reviews becoming a bottleneck in the development process. Many organizations proceed without adequate security
          review due to resource constraints.
        </p>
        <p>
          <strong>Customer Quote:</strong> &quot;We have one security architect for over 20 development teams. It&apos;s
          impossible for them to review everything thoroughly.&quot;
        </p>

        <h3>4. Disconnect Between Development and Security Teams</h3>
        <p>
          <strong>Pain Point:</strong> Development and security teams often work in silos, with different priorities,
          tools, and communication styles.
        </p>
        <p>
          <strong>Impact:</strong> This disconnect leads to friction, delays, and security requirements being
          misunderstood or improperly implemented. Security becomes viewed as a hindrance rather than an enabler.
        </p>
        <p>
          <strong>Customer Quote:</strong> "Our developers see security as a roadblock that slows them down, not as an
          essential part of building good software."
        </p>

        <h3>5. Compliance Complexity</h3>
        <p>
          <strong>Pain Point:</strong> Organizations struggle to map security requirements to various compliance
          standards and regulations.
        </p>
        <p>
          <strong>Impact:</strong> Ensuring compliance becomes a complex, time-consuming process that often requires
          specialized expertise. Organizations risk non-compliance penalties and reputation damage.
        </p>
        <p>
          <strong>Customer Quote:</strong> "We spend weeks mapping our requirements to different compliance frameworks
          for each new project."
        </p>

        <h3>6. Lack of Actionable Security Guidance</h3>
        <p>
          <strong>Pain Point:</strong> When security issues are identified, developers often receive vague or overly
          technical feedback without clear remediation steps.
        </p>
        <p>
          <strong>Impact:</strong> Developers struggle to address security concerns effectively, leading to incomplete
          fixes or unnecessary rework. This creates frustration and delays.
        </p>
        <p>
          <strong>Customer Quote:</strong> "Security reviews often result in feedback like 'this isn't secure enough'
          without explaining what specifically needs to change."
        </p>

        <h3>7. Difficulty Measuring Security ROI</h3>
        <p>
          <strong>Pain Point:</strong> Organizations struggle to quantify the return on investment for security
          initiatives, especially preventive measures.
        </p>
        <p>
          <strong>Impact:</strong> Security investments are often undervalued and underfunded because their benefits are
          difficult to measure. This leads to reactive rather than proactive security approaches.
        </p>
        <p>
          <strong>Customer Quote:</strong> "It's hard to justify investment in security tools when we can't clearly show
          the executive team how much money they're saving us."
        </p>

        <h2>How EdgeReq Analytics Addresses These Pain Points</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Pain Point</th>
                <th className="py-3 px-4 border-b text-left">EdgeReq Analytics Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Lack of Early Security Integration</td>
                <td className="py-3 px-4 border-b">
                  Provides automated security analysis at the requirements stage, enabling "shift-left" security
                  practices.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Manual and Inconsistent Security Analysis</td>
                <td className="py-3 px-4 border-b">
                  Automates the security analysis process with consistent rule application and standardized evaluation
                  criteria.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Security Expertise Shortage</td>
                <td className="py-3 px-4 border-b">
                  Encapsulates security expertise in automated rules, reducing dependency on scarce security
                  professionals.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Disconnect Between Development and Security Teams</td>
                <td className="py-3 px-4 border-b">
                  Provides a common platform and language for both teams, facilitating collaboration and shared
                  understanding.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Compliance Complexity</td>
                <td className="py-3 px-4 border-b">
                  Automatically maps requirements to relevant compliance standards, simplifying the compliance process.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Lack of Actionable Security Guidance</td>
                <td className="py-3 px-4 border-b">
                  Provides specific, actionable recommendations for addressing identified security issues.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Difficulty Measuring Security ROI</td>
                <td className="py-3 px-4 border-b">
                  Includes reporting and analytics that quantify the value of early security intervention and track
                  security improvements over time.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Conclusion</h2>
        <p>
          The identified pain points represent significant challenges for organizations trying to implement secure
          software development practices. EdgeReq Analytics is uniquely positioned to address these pain points by
          providing automated, consistent, and actionable security analysis at the requirements stage. By focusing on
          these specific customer needs, EdgeReq Analytics can deliver substantial value and differentiate itself in the
          market.
        </p>
      </div>
    </div>
  )
}
