"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "ErcasPay", href: "/ercaspay" },
    { label: "SageCloud", href: "/sagecloud" },
    { label: "SageCloud Business", href: "/sagecloud-business" },
    { label: "SageHive", href: "/sagehive" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
          <img src="/images/image.png" alt="Ercas Logo" className="h-5 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block"
          >
            Log In
          </Link>
          <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white transition-all duration-200 hover:shadow-lg hover:scale-105 hidden md:flex">
            Sign Up
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Button
              className="rounded-full w-full bg-primary hover:bg-primary/90 text-white transition-all duration-200 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
