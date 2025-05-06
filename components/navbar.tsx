"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBusinessDevOpen, setIsBusinessDevOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleBusinessDev = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsBusinessDevOpen(!isBusinessDevOpen)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span style={{ color: "#4361ee" }}>Req</span>
            <span style={{ color: "#3a0ca3" }}>Secure</span>
          </Link>

          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>

          <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:items-center">
              <li className="py-2 md:py-0 md:px-3">
                <Link href="#why" className="hover:text-blue-600">
                  Why ReqSecure
                </Link>
              </li>
              <li className="py-2 md:py-0 md:px-3">
                <Link href="#features" className="hover:text-blue-600">
                  Features
                </Link>
              </li>
              <li className="py-2 md:py-0 md:px-3">
                <Link href="#market" className="hover:text-blue-600">
                  Target Market
                </Link>
              </li>
              <li className="py-2 md:py-0 md:px-3">
                <Link href="#roadmap" className="hover:text-blue-600">
                  Roadmap
                </Link>
              </li>
              <li className="py-2 md:py-0 md:px-3">
                <Link href="#pricing" className="hover:text-blue-600">
                  Pricing
                </Link>
              </li>
              <li className="py-2 md:py-0 md:px-3">
                <Link href="#team" className="hover:text-blue-600">
                  Team
                </Link>
              </li>
              <li className="py-2 md:py-0 md:px-3 relative">
                <a href="#" className="hover:text-blue-600 flex items-center" onClick={toggleBusinessDev}>
                  Business Development
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 transition-transform duration-200 ${isBusinessDevOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>
                <div
                  className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-200 ${isBusinessDevOpen ? "block" : "hidden"}`}
                >
                  <Link
                    href="/business-dev/market-research"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsBusinessDevOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Market Research
                  </Link>
                  <Link
                    href="/business-dev/pain-points"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsBusinessDevOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Pain Point Analysis
                  </Link>
                  <Link
                    href="/business-dev/needs-validation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsBusinessDevOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Consumer Needs Validation
                  </Link>
                  <Link
                    href="/business-dev/concept"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsBusinessDevOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Concept Development
                  </Link>
                </div>
              </li>
              <li className="py-2 md:py-0 md:px-3">
                <Link
                  href="#contact"
                  className="block py-2 px-4 mt-2 md:mt-0 md:ml-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
