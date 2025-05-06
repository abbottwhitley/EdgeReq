import type { Metadata } from "next"
import PageHeader from "@/components/business-dev/page-header"

export const metadata: Metadata = {
  title: "Team Analysis | EdgeReq Analytics",
  description: "Analysis of team composition, roles, and responsibilities",
}

export default function TeamAnalysisPage() {
  return (
    <div>
      <PageHeader title="Team Analysis" description="Analysis of team composition, roles, and responsibilities" />

      <div className="prose prose-lg max-w-none mt-8">
        <h2>Team Structure Overview</h2>
        <p>
          The success of EdgeReq Analytics depends on assembling a skilled and dedicated team with the right mix of
          technical expertise, security knowledge, and business acumen. This analysis outlines the optimal team
          structure, key roles, and growth plan.
        </p>

        <h2>Core Team Composition</h2>
        <p>
          For the initial launch and early growth phase (Years 1-2), we recommend a lean team of 3-4 full-time
          employees, supplemented by contractors for specialized needs:
        </p>

        <h3>1. Founder/CEO</h3>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>Overall vision and strategy</li>
          <li>Fundraising and investor relations</li>
          <li>Business development and high-level sales</li>
          <li>Product direction and roadmap</li>
          <li>Team leadership and culture development</li>
        </ul>
        <p>
          <strong>Required Skills:</strong>
        </p>
        <ul>
          <li>Leadership and strategic thinking</li>
          <li>Understanding of security domain</li>
          <li>Business development experience</li>
          <li>Communication and presentation skills</li>
          <li>Startup experience (preferred)</li>
        </ul>

        <h3>2. Lead Developer/Software Engineer</h3>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>Architecture and development of the core platform</li>
          <li>Technical decision-making</li>
          <li>Infrastructure setup and management</li>
          <li>Security implementation</li>
          <li>Code quality and technical debt management</li>
        </ul>
        <p>
          <strong>Required Skills:</strong>
        </p>
        <ul>
          <li>Full-stack development expertise</li>
          <li>Experience with cloud infrastructure (AWS/Azure)</li>
          <li>Security analysis knowledge</li>
          <li>Understanding of software development lifecycles</li>
          <li>Experience with SaaS platforms</li>
        </ul>

        <h3>3. Marketing/Sales & Customer Success</h3>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>Marketing strategy and execution</li>
          <li>Content creation and management</li>
          <li>Lead generation and qualification</li>
          <li>Sales process and customer onboarding</li>
          <li>Customer support and success</li>
        </ul>
        <p>
          <strong>Required Skills:</strong>
        </p>
        <ul>
          <li>B2B SaaS marketing experience</li>
          <li>Content marketing and SEO knowledge</li>
          <li>Sales experience in software/security</li>
          <li>Customer relationship management</li>
          <li>Technical understanding to communicate product value</li>
        </ul>

        <h3>4. Security/Requirements Expert (Contractor)</h3>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>Security requirements analysis expertise</li>
          <li>Rule development and validation</li>
          <li>Compliance mapping guidance</li>
          <li>Security best practices consultation</li>
        </ul>
        <p>
          <strong>Required Skills:</strong>
        </p>
        <ul>
          <li>Deep security domain expertise</li>
          <li>Experience with requirements engineering</li>
          <li>Knowledge of compliance frameworks</li>
          <li>Understanding of secure development practices</li>
        </ul>

        <h2>Team Growth Plan</h2>
        <p>
          As EdgeReq Analytics grows, the team will expand to support increased customer demand and product development:
        </p>

        <h3>Year 2 (6-8 FTEs)</h3>
        <ul>
          <li>Additional software engineers (2)</li>
          <li>Dedicated customer success manager</li>
          <li>Sales representative</li>
          <li>Convert security expert from contractor to full-time</li>
        </ul>

        <h3>Year 3 (10-15 FTEs)</h3>
        <ul>
          <li>Engineering team expansion</li>
          <li>Product manager</li>
          <li>Additional sales representatives</li>
          <li>Marketing specialist</li>
          <li>Customer support team</li>
        </ul>

        <h2>Organizational Structure</h2>
        <p>The organizational structure will evolve as the company grows:</p>

        <h3>Initial Structure (Years 1-2)</h3>
        <p>Flat organization with all team members reporting to the Founder/CEO.</p>

        <h3>Growth Structure (Years 3+)</h3>
        <p>Departmental structure with the following teams:</p>
        <ul>
          <li>Engineering (led by CTO/VP Engineering)</li>
          <li>Product (led by Product Manager)</li>
          <li>Sales and Marketing (led by VP Sales/Marketing)</li>
          <li>Customer Success (led by Customer Success Manager)</li>
          <li>Operations (led by COO/Operations Manager)</li>
        </ul>

        <h2>Team Culture and Values</h2>
        <p>EdgeReq Analytics will foster a culture built on the following values:</p>
        <ul>
          <li>Security-first mindset</li>
          <li>Customer obsession</li>
          <li>Continuous learning and improvement</li>
          <li>Transparency and open communication</li>
          <li>Work-life balance and sustainable pace</li>
        </ul>

        <h2>Compensation Strategy</h2>
        <p>Our compensation strategy will be competitive to attract and retain top talent:</p>
        <ul>
          <li>Base salaries at or above market rates</li>
          <li>Equity options for all full-time employees</li>
          <li>Performance-based bonuses</li>
          <li>Comprehensive benefits package</li>
          <li>Professional development budget</li>
        </ul>

        <h2>Key Success Factors</h2>
        <p>The following factors will be critical for team success:</p>
        <ul>
          <li>Strong technical leadership</li>
          <li>Security domain expertise</li>
          <li>Effective communication across functions</li>
          <li>Customer-focused mindset</li>
          <li>Ability to execute with limited resources</li>
          <li>Adaptability and willingness to learn</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          The proposed team structure provides a solid foundation for launching and growing EdgeReq Analytics. By
          starting with a small, highly skilled core team and expanding strategically, we can build a sustainable
          organization capable of delivering exceptional value to customers while achieving our business objectives.
        </p>
      </div>
    </div>
  )
}
