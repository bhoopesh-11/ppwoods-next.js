"use client"

import { useEffect, useRef, ElementRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const partners = [
  { name: "Century Ply", logo: "/centuryply.png?height=100&width=200" },
  { name: "Jaquar", logo: "/jaquar.png?height=100&width=200" },
  { name: "Hettich", logo: "/hettich.png?height=100&width=200" },
  { name: "Saint-Gobain", logo: "/saint-gobbin.png?height=100&width=200" },
  { name: "Siemens", logo: "/siemens.jpg?height=100&width=200" },
]

export default function Partners() {
  const sectionRef = useRef<ElementRef<"section">>(null)
  const headingRef = useRef<ElementRef<"h2">>(null)
  const partnersRef = useRef<(ElementRef<"div"> | null)[]>([])

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

    partnersRef.current.forEach((partner) => {
      if (partner) observer.observe(partner)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 bg-muted/20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-2xl md:text-3xl font-bold text-center mb-12 opacity-0 transform translate-y-8"
        >
          Our Trusted Partners
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              ref={(el) => (partnersRef.current[index] = el)}
              className={cn(
                "w-32 md:w-40 h-20 relative transition-all duration-500 opacity-0 transform translate-y-8",
                `animation-delay-${(index + 1) * 100}`,
              )}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 rounded-md transition-opacity duration-300"></div>
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                fill
                className="object-contain transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
