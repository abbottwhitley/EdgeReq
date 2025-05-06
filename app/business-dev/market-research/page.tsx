import type { Metadata } from "next"
import PageHeader from "@/components/business-dev/page-header"

export const metadata: Metadata = {
  title: "Market Research | EdgeReq Analytics",
  description: "Market research analysis for EdgeReq Analytics security requirements evaluation tool",
}

export default function MarketResearchPage() {
  return (
    <div>
      <PageHeader title="Market Research" description="Analysis of the market for security risk assessment tools" />

      <div className="prose prose-lg max-w-none mt-8">
        <h2>Market Overview</h2>
        <p>
          The market for security risk assessment tools is growing rapidly as organizations increasingly recognize the
          importance of identifying and addressing security vulnerabilities early in the software development lifecycle.
        </p>

        <h2>Market Size and Growth</h2>
        <p>
          The global security assessment market was valued at approximately $3.2 billion in 2022 and is projected to
          reach $6.7 billion by 2027, growing at a CAGR of 15.8% during the forecast period.
        </p>

        <h2>Key Market Drivers</h2>
        <ul>
          <li>Increasing frequency and sophistication of cyber attacks</li>
          <li>Growing adoption of cloud services and digital transformation initiatives</li>
          <li>Stringent regulatory requirements for data protection and privacy</li>
          <li>Rising costs associated with security breaches and data leaks</li>
          <li>Shift-left security movement emphasizing early security integration</li>
        </ul>

        <h2>Market Segments</h2>
        <p>
          The security assessment market can be segmented based on type (vulnerability assessment, risk assessment,
          penetration testing, security program assessment), organization size (large enterprises, SMEs), deployment
          mode (on-premises, cloud), vertical, and region.
        </p>

        <h2>Competitive Landscape</h2>
        <p>
          The market includes a range of players, from established cybersecurity vendors to niche providers. Some
          general risk assessment tool providers include AssessNET, RAMs App, EcoOnline, SentinelOne, and DataGuard.
        </p>

        <h2>Market Trends</h2>
        <ul>
          <li>
            <strong>Shift Left Security:</strong> Growing trend to integrate security earlier in the SDLC.
          </li>
          <li>
            <strong>Automation:</strong> Automation of security tasks is becoming increasingly important.
          </li>
          <li>
            <strong>Integration:</strong> Need for seamless integration of security tools.
          </li>
          <li>
            <strong>Focus on Supply Chain Security:</strong> Addressing vulnerabilities in the software supply chain is
            critical.
          </li>
          <li>
            <strong>Cloud Security:</strong> Securing cloud environments is a primary concern.
          </li>
        </ul>

        <h2>Market Opportunities</h2>
        <p>
          There is a significant opportunity for tools that specifically evaluate security risks at the software
          requirements stage, as few existing solutions focus on this early phase of the SDLC. EdgeReq Analytics is
          positioned to address this gap in the market.
        </p>
      </div>
    </div>
  )
}
