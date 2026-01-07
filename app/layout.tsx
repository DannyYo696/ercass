import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"

const _poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ERCAS - Digital Finance Infrastructure",
  description:
    "Digital finance infrastructure built for banks, enterprises, and institutions that require reliability, compliance, and scale.",
  icons: {
    icon: [
      {
        url: "https://raw.githubusercontent.com/DannyYo696/svillage/2d84cc5e2ff7790841b9b185e060219de74e2c2b/ercas%20icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://raw.githubusercontent.com/DannyYo696/svillage/2d84cc5e2ff7790841b9b185e060219de74e2c2b/ercas%20icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://raw.githubusercontent.com/DannyYo696/svillage/2d84cc5e2ff7790841b9b185e060219de74e2c2b/ercas%20icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "https://raw.githubusercontent.com/DannyYo696/svillage/2d84cc5e2ff7790841b9b185e060219de74e2c2b/ercas%20icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
