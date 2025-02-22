import type React from "react"
import { MainNav } from "@/components/ui/main-nav"
import { Footer } from "@/components/ui/footer"
import { Montserrat } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "New Thai Institute of Fashion Designing",
  description: "Transform your passion for fashion into a successful career with our expert-led courses.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <MainNav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

