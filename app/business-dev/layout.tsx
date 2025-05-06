import type React from "react"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "ReqSecure - Business Development",
  description: "Business development resources and research for ReqSecure",
}

export default function BusinessDevLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">{children}</div>
    </>
  )
}
