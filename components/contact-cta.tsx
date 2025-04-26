"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ContactCta() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)

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

    if (headingRef.current) observer.observe(headingRef.current)
    if (descRef.current) observer.observe(descRef.current)
    if (buttonsRef.current) observer.observe(buttonsRef.current)
    if (contactInfoRef.current) observer.observe(contactInfoRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-primary/10" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center">
        <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4 opacity-0 transform translate-y-8">
          Get in Touch!
        </h2>
        <p
          ref={descRef}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 transform translate-y-8 animation-delay-200"
        >
          Write to us or give us a call now, we're always happy to provide a free consultation and help out with any
          questions you may ask.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12 opacity-0 transform translate-y-8 animation-delay-400"
        >
          <Button size="lg" asChild className="group relative overflow-hidden">
            <a href="/contact">
              <span className="relative z-10">Contact Us</span>
              <ChevronRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </Button>
          <Button size="lg" variant="outline" className="group relative overflow-hidden">
            <a href="tel:+919082093288">
              <span className="relative z-10">Call Us: +91 9082093288</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </a>
          </Button>
        </div>

        <div
          ref={contactInfoRef}
          className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto opacity-0 transform translate-y-8 animation-delay-600"
        >
          <div className="group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">Phone</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              +91 9082093288
            </p>
          </div>

          <div className="group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">Email</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              punitlimbavat99@gmail.com
            </p>
          </div>

          <div className="group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">Address</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Ramasagara Rd, Muthanallur, Bengaluru, Karnataka 560099
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
