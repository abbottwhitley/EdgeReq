"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "EdgeReq Analytics has transformed how we approach security in our development process. By identifying potential vulnerabilities at the requirements stage, we've reduced security-related rework by over 60%.",
      author: "Sarah Chen",
      title: "CTO",
      company: "FinTech Innovations",
      avatar: "/professional-woman-glasses.png",
    },
    {
      quote:
        "As a startup with limited security resources, EdgeReq has been a game-changer. It's like having a security expert on the team reviewing our requirements before we write a single line of code.",
      author: "Michael Rodriguez",
      title: "Lead Developer",
      company: "HealthTech Solutions",
      avatar: "/professional-bearded-man.png",
    },
    {
      quote:
        "Implementing EdgeReq Analytics helped us achieve compliance with industry regulations much faster. The automated mapping of requirements to compliance standards saves us countless hours of manual work.",
      author: "Jennifer Park",
      title: "Security Compliance Manager",
      company: "SecureBank",
      avatar: "/professional-woman-dark-hair.png",
    },
    {
      quote:
        "The ROI on EdgeReq Analytics was evident within the first month. We caught critical security issues that would have cost us tens of thousands to fix if they had made it to production.",
      author: "David Thompson",
      title: "VP of Engineering",
      company: "CloudScale Systems",
      avatar: "/professional-man-suit.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what teams using EdgeReq Analytics have to say.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonial Carousel */}
          <div className="hidden md:block relative bg-gray-50 rounded-xl shadow-md p-8 mb-8">
            <div className="absolute top-8 left-8 text-primary/20">
              <Quote size={48} />
            </div>
            <div className="relative z-10">
              <p className="text-xl text-gray-700 italic mb-8 pl-6">"{testimonials[currentIndex].quote}"</p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Testimonials */}
          <div className="md:hidden space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-6">
                <div className="text-primary/20 mb-2">
                  <Quote size={32} />
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Indicators */}
          <div className="hidden md:flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${currentIndex === index ? "bg-primary" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Join hundreds of satisfied customers who trust EdgeReq Analytics</p>
          <Button asChild>
            <a href="#contact">Request a Demo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
