"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Residential Interiors",
    description: "Transform your house into a home with our personalized residential interior design services.",
    image: "/residential.jpg?height=400&width=600",
  },
  {
    title: "Commercial Interiors",
    description: "Enhance your business environment with our commercial interior design solutions.",
    image: "/commercial.jpg?height=400&width=600",
  },
  {
    title: "Bungalow/Villa Interiors",
    description:
      "Create luxurious and elegant living spaces in your villa or bungalow. Our expert designers blend aesthetics with functionality for your dream home.",
    image: "/villa.jpg?height=400&width=600",
  },
  {
    title: "Customised Wood Crafts",
    description:
      "Bring your vision to life with our bespoke wood crafting services. From custom furniture to unique architectural elements, we create pieces that tell your story.",
    image: "/woodcraft.jpg?height=400&width=600",
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const buttonRef = useRef<HTMLDivElement>(null)

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

    if (sectionRef.current) {
      const headingEl = sectionRef.current.querySelector("h2")
      const descEl = sectionRef.current.querySelector("p")

      if (headingEl) observer.observe(headingEl)
      if (descEl) observer.observe(descEl)
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    if (buttonRef.current) observer.observe(buttonRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 bg-muted/50 scroll-mt-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 transform translate-y-8">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto opacity-0 transform translate-y-8 animation-delay-200">
            We offer a comprehensive range of interior design and wood crafting services tailored to your specific
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "overflow-hidden opacity-0 transform",
                index % 2 === 0 ? "translate-x-[-50px]" : "translate-x-[50px]",
                `animation-delay-${(index + 3) * 100}`,
              )}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="aspect-video relative overflow-hidden group">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="absolute bottom-0 left-0 text-xl font-bold text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {service.title}
                </h3>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 md:hidden">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" size="sm" className="relative overflow-hidden group">
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    Learn More
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 transform translate-y-8 animation-delay-700" ref={buttonRef}>
          <Button size="lg" asChild className="relative overflow-hidden group">
            <a href="/contact">
              <span className="relative z-10">Request a Service</span>
              <span className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
