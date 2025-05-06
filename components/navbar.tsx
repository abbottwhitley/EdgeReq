"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { ChevronDown } from "lucide-react"

const Navbar = () => {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBusinessDevOpen, setIsBusinessDevOpen] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsBusinessDevOpen(false)
  }

  const toggleBusinessDev = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault()
      setIsBusinessDevOpen(!isBusinessDevOpen)
    }
  }

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Challenges", href: "/#challenges" },
    { name: "Market", href: "/#target-market" },
    { name: "Roadmap", href: "/#roadmap" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Team", href: "/#team" },
    { name: "Contact", href: "/#contact" },
  ]

  const businessDevLinks = [
    { name: "Overview", href: "/business-dev" },
    { name: "Market Research", href: "/business-dev/market-research" },
    { name: "Pain Points", href: "/business-dev/pain-points" },
    { name: "Needs Validation", href: "/business-dev/needs-validation" },
    { name: "Challenge Mitigation", href: "/business-dev/challenge-mitigation" },
    { name: "Concept Development", href: "/business-dev/concept" },
    { name: "Strategy", href: "/business-dev/strategy" },
    { name: "Revenue Analysis", href: "/business-dev/revenue-analysis" },
    { name: "Team Analysis", href: "/business-dev/team-analysis" },
    { name: "Seed Investment", href: "/business-dev/seed-investment" },
    { name: "Success Metrics", href: "/business-dev/success-metrics" },
    { name: "Business Proposal", href: "/business-dev/business-proposal" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-blue-600"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">EdgeReq Analytics</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                  {link.name}
                </Link>
              ))}

              {/* Business Dev Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  Business Dev
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1 max-h-96 overflow-y-auto">
                    {businessDevLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          )}

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/#contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Business Dev Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={toggleBusinessDev}
                  className="flex items-center justify-between px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <span>Business Dev</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isBusinessDevOpen ? "rotate-180" : ""}`} />
                </button>

                {isBusinessDevOpen && (
                  <div className="bg-blue-50 pl-4">
                    {businessDevLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-100"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 px-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/#contact" onClick={closeMenu}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
