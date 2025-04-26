"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const columnsRef = useRef<(HTMLDivElement | null)[]>([])
  const copyrightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    columnsRef.current.forEach((column) => {
      if (column) observer.observe(column)
    })

    if (copyrightRef.current) observer.observe(copyrightRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="bg-muted/30 pt-16 pb-8" ref={footerRef}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div ref={(el) => (columnsRef.current[0] = el)} className="opacity-0 transform translate-y-8">
            <h3 className="text-xl font-bold mb-4">PPWOODS</h3>
            <p className="text-muted-foreground mb-4">
              Crafting exceptional interiors and woodwork with over 38 years of experience.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <a
                  href="https://www.facebook.com/people/P-P-Woods/100063755722144/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <a
                  href="https://www.instagram.com/pp_woods999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <a href="mailto:punitlimbavat99@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <a
                  href="https://api.whatsapp.com/send/?phone=9082093288&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div
            ref={(el) => (columnsRef.current[1] = el)}
            className="opacity-0 transform translate-y-8 animation-delay-200"
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/#about" },
                { name: "Services", href: "/#services" },
                { name: "Our Process", href: "/#process" },
                { name: "Testimonials", href: "/#testimonials" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li
                  key={index}
                  className="transform translate-x-0 hover:translate-x-2 transition-transform duration-300"
                >
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={(el) => (columnsRef.current[2] = el)}
            className="opacity-0 transform translate-y-8 animation-delay-400"
          >
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Residential Interiors",
                "Commercial Interiors",
                "Bungalow/Villa Interiors",
                "Customised Wood Crafts",
                "Wood Carving",
                "Wood Engraving",
              ].map((service, index) => (
                <li
                  key={index}
                  className="transform translate-x-0 hover:translate-x-2 transition-transform duration-300"
                >
                  <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={(el) => (columnsRef.current[3] = el)}
            className="opacity-0 transform translate-y-8 animation-delay-600"
          >
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  +91 9082093288
                </span>
              </li>
              <li className="flex items-start group">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  punitlimbavat99@gmail.com
                </span>
              </li>
              <li className="flex items-start group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Ramasagara Rd, Muthanallur, Bengaluru, Karnataka 560099
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          ref={copyrightRef}
          className="border-t pt-8 text-center text-sm text-muted-foreground opacity-0 transform translate-y-8 animation-delay-800"
        >
          <p>&copy; {new Date().getFullYear()} PPWOODS. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
