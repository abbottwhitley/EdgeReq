const Challenges = () => {
  const marketChallenges = [
    {
      title: "Lack of Awareness and Understanding",
      description:
        "Many organizations and developers lack awareness of the importance of incorporating security early in the SDLC.",
      solution: "Education and awareness campaigns to raise understanding of early security integration.",
    },
    {
      title: "Complexity of Security Requirements",
      description: "Defining and managing comprehensive security requirements can be complex and overwhelming.",
      solution: "Simplified security requirements frameworks and pre-built templates based on industry best practices.",
    },
    {
      title: "Integration with Existing Development Processes",
      description: "Integrating security tools into existing SDLCs can be challenging and disruptive.",
      solution: "Seamless integration with popular development tools and workflows to minimize disruption.",
    },
    {
      title: "Manual and Time-Consuming Evaluation",
      description: "Manual evaluation methods are time-consuming and error-prone.",
      solution: "Automation of the requirements evaluation process to save time and improve accuracy.",
    },
    {
      title: "Skill Gap and Expertise Shortage",
      description:
        "A shortage of skilled security professionals makes it difficult to implement proper security measures.",
      solution: "Knowledge base and expert guidance to supplement existing skills and expertise.",
    },
    {
      title: "Cost and Affordability",
      description: "Existing security tools can be expensive, especially for smaller organizations.",
      solution: "Affordable and scalable SaaS model with flexible pricing options.",
    },
    {
      title: "Evolving Threat Landscape",
      description: "The ever-changing threat landscape requires constant adaptation and updates.",
      solution: "Continuous threat intelligence integration to stay current with emerging threats.",
    },
  ]

  return (
    <section id="challenges" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Market Challenges & Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EdgeReq Analytics addresses key challenges in the software security market with innovative solutions
            designed to make security accessible and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketChallenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <h4 className="font-semibold text-blue-600 mb-2">Our Solution:</h4>
                  <p className="text-gray-700">{challenge.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Challenges
