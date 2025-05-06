import Challenges from "@/components/challenges"
import Contact from "@/components/contact"
import Features from "@/components/features"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Pricing from "@/components/pricing"
import Roadmap from "@/components/roadmap"
import TargetMarket from "@/components/target-market"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import WhyRequirementGuard from "@/components/why-requirement-guard"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyRequirementGuard />
      <Features />
      <Challenges />
      <TargetMarket />
      <Roadmap />
      <Pricing />
      <Testimonials />
      <Team />
      <Contact />
    </main>
  )
}
