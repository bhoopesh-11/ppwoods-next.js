"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const processSteps = [
  {
    number: "1",
    title: "Design Consultation & Requirement Gathering",
    description:
      "We begin with understanding your lifestyle, space requirements, and budget preferences to create a tailored design solution just for you.",
  },
  {
    number: "2",
    title: "Concept & Visual Presentation",
    description:
      "Our creative team prepares mood boards, layouts, and 3D views — so you can visualize how your dream space will look even before execution begins.",
  },
  {
    number: "3",
    title: "Execution & On-site Implementation",
    description:
      "From modular furniture setup to lighting, decor, and detailing — our skilled team manages complete execution with perfection and professionalism.",
  },
  {
    number: "4",
    title: "Styling, Finishing & Project Handover",
    description:
      "We style your space with thoughtful final touches, ensuring every detail is in place before the perfect handover of your ready-to-live space.",
  },
]

export default function Process() {
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
    <section id="process" className="py-20 scroll-mt-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 transform translate-y-8">
            Our Process to Transform Your Space
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto opacity-0 transform translate-y-8 animation-delay-200">
            We follow a structured approach to ensure your project is completed to the highest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className={cn("relative opacity-0 transform translate-y-8", `animation-delay-${(index + 3) * 100}`)}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl animate-pulse-slow">
                {step.number}
              </div>
              <CardContent className="p-6 pt-10">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
              <div className="absolute h-1 bg-primary/70 bottom-0 left-0 w-0 group-hover:w-full transition-all duration-700"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
