import type { Metadata } from "next"
import PageHeader from "@/components/business-dev/page-header"

export const metadata: Metadata = {
  title: "Strategy | EdgeReq Analytics",
  description: "Strategic plan for market entry, growth, and scaling of EdgeReq Analytics",
}

export default function StrategyPage() {
  return (
    <div>
      <PageHeader
        title="Strategy"
        description="Strategic plan for market entry, growth, and scaling of EdgeReq Analytics"
      />

      <div className="prose prose-lg max-w-none mt-8">
        <h2>Strategic Overview</h2>
        <p>
          EdgeReq Analytics will enter the market with a focused strategy that emphasizes education, early adoption, and
          continuous improvement. Our approach is designed to establish EdgeReq as the leading solution for security
          requirements analysis while building a sustainable business model.
        </p>

        <h2>Market Entry Strategy</h2>
        <h3>Phase 1: MVP Launch (Months 1-6)</h3>
        <p>
          <strong>Focus:</strong> Acquire early adopters, establish product-market fit, and build brand awareness.
        </p>
        <ul>
          <li>
            <strong>Target Audience:</strong> Security-conscious startups and mid-sized companies with active
            development teams.
          </li>
          <li>
            <strong>Marketing Channels:</strong>
            <ul>
              <li>Content marketing (blog posts, whitepapers, case studies)</li>
              <li>Social media presence on LinkedIn, Twitter, and developer communities</li>
              <li>SEO optimization for security requirements-related keywords</li>
              <li>Limited PPC advertising on targeted platforms</li>
              <li>Participation in industry events and webinars</li>
              <li>Public relations outreach to security publications</li>
            </ul>
          </li>
          <li>
            <strong>Sales Strategy:</strong>
            <ul>
              <li>Freemium model with limited features to encourage adoption</li>
              <li>Sales-assisted sales process for larger prospects</li>
              <li>Targeted outreach to companies with known security initiatives</li>
              <li>Partnerships with security consulting firms</li>
            </ul>
          </li>
          <li>
            <strong>Customer Success:</strong>
            <ul>
              <li>High-touch onboarding for early customers</li>
              <li>Dedicated customer support</li>
              <li>Regular feedback collection and product improvement</li>
            </ul>
          </li>
        </ul>

        <h3>Phase 2: Growth and Expansion (Months 7-24)</h3>
        <p>
          <strong>Focus:</strong> Scale customer acquisition, expand product features, and increase market share.
        </p>
        <ul>
          <li>
            <strong>Target Audience:</strong> Expand to larger enterprises and regulated industries.
          </li>
          <li>
            <strong>Marketing Channels:</strong>
            <ul>
              <li>Expanded content marketing with industry-specific materials</li>
              <li>Increased paid advertising budget</li>
              <li>Marketing automation for lead nurturing</li>
              <li>Strategic partnerships with complementary security tools</li>
              <li>Customer advocacy program</li>
            </ul>
          </li>
          <li>
            <strong>Sales Strategy:</strong>
            <ul>
              <li>Expansion of sales team</li>
              <li>Refined sales process with clear qualification criteria</li>
              <li>Account-based marketing for enterprise prospects</li>
              <li>Channel partner program</li>
            </ul>
          </li>
          <li>
            <strong>Customer Success:</strong>
            <ul>
              <li>Implementation of customer relationship management (CRM) system</li>
              <li>Expansion of customer success team</li>
              <li>Development of self-service resources</li>
              <li>Customer loyalty and referral programs</li>
            </ul>
          </li>
        </ul>

        <h3>Phase 3: Enterprise Scaling (Year 3+)</h3>
        <p>
          <strong>Focus:</strong> Target enterprise clients, expand product features, and establish market leadership.
        </p>
        <ul>
          <li>
            <strong>Target Audience:</strong> Fortune 500 companies, government agencies, and highly regulated
            industries.
          </li>
          <li>
            <strong>Marketing Channels:</strong>
            <ul>
              <li>Enterprise-focused content and thought leadership</li>
              <li>Presence at major industry events</li>
              <li>Strategic public relations</li>
              <li>Industry analyst relationships</li>
            </ul>
          </li>
          <li>
            <strong>Sales Strategy:</strong>
            <ul>
              <li>Enterprise sales team with industry specialization</li>
              <li>Complex sales cycles with multiple stakeholders</li>
              <li>Strategic partnerships with major consulting firms</li>
              <li>Custom enterprise solutions</li>
            </ul>
          </li>
          <li>
            <strong>Customer Success:</strong>
            <ul>
              <li>Dedicated account managers for enterprise clients</li>
              <li>Premium support options</li>
              <li>Customer advisory board</li>
              <li>Executive relationship management</li>
            </ul>
          </li>
        </ul>

        <h2>Product Strategy</h2>
        <p>Our product strategy follows a phased approach aligned with our market entry strategy:</p>
        <ul>
          <li>
            <strong>Phase 1 (MVP):</strong> Core functionality including document upload, basic requirements analysis,
            and security risk identification.
          </li>
          <li>
            <strong>Phase 2:</strong> Enhanced features including collaborative modeling, integration with popular
            development tools, and advanced reporting.
          </li>
          <li>
            <strong>Phase 3:</strong> Enterprise features including advanced permissions, custom rule development, and
            comprehensive compliance mapping.
          </li>
        </ul>

        <h2>Pricing Strategy</h2>
        <p>EdgeReq Analytics will use a tiered pricing model:</p>
        <ul>
          <li>
            <strong>Basic:</strong> $99/month - Limited features for small teams and startups.
          </li>
          <li>
            <strong>Pro:</strong> $299/month - Full feature set for growing teams.
          </li>
          <li>
            <strong>Enterprise:</strong> $799/month - Advanced features for large organizations.
          </li>
        </ul>
        <p>
          Annual billing options will be available with a 15% discount. Custom pricing will be offered for large
          enterprise deployments.
        </p>

        <h2>Competitive Strategy</h2>
        <p>EdgeReq Analytics will differentiate from competitors through:</p>
        <ul>
          <li>Focus on requirements-stage security analysis (vs. code-level analysis)</li>
          <li>Ease of use and accessibility for non-security experts</li>
          <li>Seamless integration with existing development workflows</li>
          <li>Actionable recommendations with clear remediation steps</li>
          <li>Comprehensive compliance mapping capabilities</li>
        </ul>

        <h2>Key Performance Indicators</h2>
        <p>We will track the following KPIs to measure the success of our strategy:</p>
        <ul>
          <li>Customer acquisition cost (CAC)</li>
          <li>Customer lifetime value (LTV)</li>
          <li>Monthly recurring revenue (MRR)</li>
          <li>Churn rate</li>
          <li>Net promoter score (NPS)</li>
          <li>Feature adoption rates</li>
          <li>Time to value for new customers</li>
        </ul>

        <h2>Risk Management</h2>
        <p>Key risks and mitigation strategies include:</p>
        <ul>
          <li>
            <strong>Market adoption risk:</strong> Mitigated through education, free trials, and demonstrable ROI.
          </li>
          <li>
            <strong>Competitive risk:</strong> Mitigated through rapid innovation and clear differentiation.
          </li>
          <li>
            <strong>Technical risk:</strong> Mitigated through rigorous testing and continuous improvement.
          </li>
          <li>
            <strong>Financial risk:</strong> Mitigated through careful cash management and phased investment.
          </li>
        </ul>
      </div>
    </div>
  )
}
