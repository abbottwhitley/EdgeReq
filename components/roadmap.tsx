const Roadmap = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "MVP Launch",
      timeframe: "Months 1-6",
      description: "Initial product launch with core functionality to validate market fit.",
      milestones: [
        "User login via SSO",
        "Document Upload and Parsing",
        "Automated Requirements Analysis",
        "Basic User Interface",
      ],
      status: "completed",
    },
    {
      phase: "Phase 2",
      title: "Collaborative Modeling",
      timeframe: "Months 7-12",
      description: "Enhance the platform with collaborative features and improved analysis capabilities.",
      milestones: ["Diagram editor", "Real-time multi-user editing", "Refine rule engine", "Enhanced reporting"],
      status: "in-progress",
    },
    {
      phase: "Phase 3",
      title: "Integration & Automation",
      timeframe: "Year 2",
      description: "Expand platform capabilities with integrations and automation features.",
      milestones: [
        "ALM tool integration",
        "Compliance mapping engine",
        "API access for CI/CD pipelines",
        "Advanced analytics",
      ],
      status: "planned",
    },
    {
      phase: "Phase 4",
      title: "Enterprise Scaling",
      timeframe: "Year 3+",
      description: "Scale the platform for enterprise-level deployments and advanced use cases.",
      milestones: [
        "Advanced permissions and role delegation",
        "Reporting dashboards",
        "API access for enterprise workflows",
        "Custom deployment options",
      ],
      status: "planned",
    },
  ]

  // Helper function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Completed
          </span>
        )
      case "in-progress":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            In Progress
          </span>
        )
      case "planned":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Planned
          </span>
        )
      default:
        return null
    }
  }

  return (
    <section id="roadmap" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Product Roadmap</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our development plan outlines how EdgeReq Analytics will evolve to meet the growing needs of our customers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {roadmapPhases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index < roadmapPhases.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-8 mb-12">
                {/* Timeline marker */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                      phase.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : phase.status === "in-progress"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <div className="text-center mt-2 font-medium text-gray-700 hidden md:block">{phase.timeframe}</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                        <p className="text-gray-500 md:hidden">{phase.timeframe}</p>
                      </div>
                      {getStatusBadge(phase.status)}
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Milestones:</h4>
                      <ul className="space-y-2">
                        {phase.milestones.map((milestone, milestoneIndex) => (
                          <li key={milestoneIndex} className="flex items-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-5 w-5 mr-2 ${
                                phase.status === "completed"
                                  ? "text-green-500"
                                  : phase.status === "in-progress"
                                    ? "text-blue-500"
                                    : "text-gray-400"
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
