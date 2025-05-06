import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EdgeReq Analytics - Defining the security perimeter through structured requirements",
  description:
    "EdgeReq Analytics is a SaaS solution that proactively identifies and mitigates security risks in software requirements before code is written.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {children}
        <button
          id="back-to-top"
          className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-blue-600 text-white shadow-md flex items-center justify-center z-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </body>
    </html>
  )
}
