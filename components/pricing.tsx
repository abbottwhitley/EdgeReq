import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$99",
      description: "Perfect for startups and small teams getting started with security requirements.",
      features: [
        "Basic requirements analysis",
        "Up to 5 projects",
        "100 requirements per month",
        "Standard security rules",
        "Email support",
        "Basic reporting",
        "Community access",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$299",
      description: "Ideal for growing teams that need more advanced features and analysis capabilities.",
      features: [
        "Advanced requirements analysis",
        "Up to 15 projects",
        "500 requirements per month",
        "Extended security rule set",
        "Priority email support",
        "Advanced reporting & analytics",
        "API access",
        "SDLC integration",
        "Compliance mapping",
      ],
      cta: "Try Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$799",
      description: "For organizations that need unlimited analysis, custom rules, and dedicated support.",
      features: [
        "Unlimited requirements analysis",
        "Unlimited projects",
        "Custom rule development",
        "Dedicated support",
        "Unlimited users",
        "Custom integrations",
        "Advanced compliance mapping",
        "Audit trail",
        "SSO authentication",
        "SLA guarantees",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that&apos;s right for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`flex-1 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                tier.popular ? "border-2 border-primary lg:-mt-4 lg:mb-4" : "border border-gray-200"
              }`}
            >
              {tier.popular && <div className="bg-primary text-white text-center py-2 font-medium">Most Popular</div>}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <Button
                  className={`w-full mb-8 ${tier.popular ? "" : "bg-gray-800 hover:bg-gray-700"}`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What&apos;s included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom plan? Contact our sales team for a tailored solution.</p>
          <Button variant="outline" className="mx-auto">
            Contact Sales
          </Button>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer annual billing?</h4>
              <p className="text-gray-600">
                Yes, we offer annual billing with a 15% discount compared to monthly billing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I upgrade or downgrade my plan?</h4>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
