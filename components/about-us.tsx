"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

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

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 scroll-mt-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 transform translate-y-8">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto opacity-0 transform translate-y-8 animation-delay-200">
            Experience our personalized approach that sets us apart. We believe in understanding your unique needs and
            preferences, tailoring our services to provide a truly customized experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Approach",
              description:
                "Trust us to deliver a personalized approach that exceeds your expectations and leaves a lasting impression.",
              image: "/persnolized-approach.jpg?height=400&width=600",
            },
            {
              title: "Excellence and Professionalism",
              description:
                "Our craftsmanship extends beyond wood carving to encompass wood engraving, embossing, MDF, WPC, grill designs, and more. We continuously strive for excellence, utilizing our 38+ years of experience in this industry.",
              image: "/Excellence-and-Professionalism.jpg?height=400&width=600",
            },
            {
              title: "Ensured and Guaranteed",
              description:
                "Experience the absolute best in guaranteed service with us. Our commitment to excellence ensures your satisfaction. Trust in our expertise, reliability, and dedication to deliver exceptional results.",
              image: "/Ensured-and-Guaranteed.jpg?height=400&width=600",
            },
          ].map((card, index) => (
            <Card
              key={index}
              className={cn(
                "overflow-hidden opacity-0 transform translate-y-8",
                `animation-delay-${(index + 3) * 100}`,
              )}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="aspect-video relative overflow-hidden group">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground mb-4">{card.description}</p>
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
      </div>
    </section>
  )
}
