import { User, Code, BarChart3, Shield } from "lucide-react"

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder/CEO",
      description: "Leads the overall vision, strategy, business development, and sales efforts.",
      icon: <User className="h-10 w-10 text-primary" />,
      skills: ["Leadership", "Business Strategy", "Sales", "Security"],
    },
    {
      name: "Jamie Chen",
      role: "Lead Developer",
      description: "Responsible for the core EdgeReq software development, architecture, and technical implementation.",
      icon: <Code className="h-10 w-10 text-primary" />,
      skills: ["Full-Stack Development", "Cloud Infrastructure", "Security Analysis"],
    },
    {
      name: "Taylor Reed",
      role: "Marketing & Sales",
      description: "Handles marketing strategy, lead generation, customer onboarding, and support.",
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      skills: ["Digital Marketing", "Content Creation", "Customer Relations"],
    },
    {
      name: "Jordan Patel",
      role: "Security Expert",
      description: "Provides expert guidance on security requirements analysis and rule development.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      skills: ["Security Analysis", "Compliance", "Requirements Engineering"],
    },
  ]

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team brings together expertise in software development, security, and business strategy to
            deliver a comprehensive solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-center mb-4">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
