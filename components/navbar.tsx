"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links on the homepage
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const element = document.getElementById(targetId)
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
        setIsOpen(false)
      }
    } else {
      setIsOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-background shadow-sm",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold tracking-tight transition-all duration-300 group-hover:scale-105">
              PP
              <span className="text-primary relative overflow-hidden group-hover:text-foreground">
                WOODS
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors overflow-hidden",
                  "hover:text-primary group",
                )}
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute inset-0 w-full h-full bg-primary/10 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom z-[-1] rounded-md"></span>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 relative overflow-hidden group"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
              <span className="absolute inset-0 w-full h-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-full"></span>
            </Button>
            <Button asChild className="ml-4 group overflow-hidden relative">
              <Link href="/contact">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get a Quote</span>
                <span className="absolute inset-0 w-full h-full bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2 relative overflow-hidden group"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
              <span className="absolute inset-0 w-full h-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-full"></span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="relative overflow-hidden group"
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-0 group-hover:rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              )}
              <span className="absolute inset-0 w-full h-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-full"></span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden bg-background/95 backdrop-blur-md border-t overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-3 py-2 text-sm font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all",
                  "transform translate-y-4 opacity-0",
                  isOpen && `animate-fade-in-up animation-delay-${index * 100}`,
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className={cn(
                "mt-2 transform translate-y-4 opacity-0",
                isOpen && "animate-fade-in-up animation-delay-600",
              )}
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
