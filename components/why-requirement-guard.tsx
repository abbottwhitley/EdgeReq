const WhyRequirementGuard = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Why EdgeReq Analytics?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our proactive approach to security requirements can transform your software development
            lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Proactive Security</h3>
            <p className="text-gray-600">
              Identify and address security vulnerabilities early in the development process, reducing the risk of
              costly rework.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Cost Savings</h3>
            <p className="text-gray-600">
              Reduce development costs by preventing security flaws before they become embedded in your codebase.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Compliance Ready</h3>
            <p className="text-gray-600">
              Ensure your software meets industry regulations and compliance standards with automated security
              validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyRequirementGuard
