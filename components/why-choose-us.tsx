"use client"

import { useEffect, useRef } from "react"
import { Award, Clock, CheckCircle, Users, MapPin, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const reasons = [
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "No Hidden Costs",
    description: "Transparent pricing with no surprises—what you see is what you pay.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "10-Year Warranty*",
    description: "Enjoy peace of mind with our long-term warranty on all services.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "45-day Move-in Guarantee*",
    description: "We promise a swift, hassle-free move-in within 45 days.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "150 Quality Checks*",
    description: "Rigorous inspections ensure the highest standards in every project.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "500+ Happy Clients",
    description: "Join our growing family of satisfied clients across the country.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Mumbai",
    description: "Our trusted services are available in over 10 cities nationwide.",
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const disclaimerRef = useRef<HTMLDivElement>(null)

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

    if (disclaimerRef.current) observer.observe(disclaimerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-muted/30 scroll-mt-16" id="why-choose-us" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 transform translate-y-8">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto opacity-0 transform translate-y-8 animation-delay-200">
            Discover the advantages of working with PPWOODS for your interior design and wood crafting needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className={cn(
                "border-none shadow-sm hover:shadow-md transition-all duration-300 opacity-0 transform translate-y-8 hover:translate-y-[-5px]",
                `animation-delay-${(index + 3) * 100}`,
              )}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="text-center mt-12 text-sm text-muted-foreground opacity-0 transform translate-y-8 animation-delay-900"
          ref={disclaimerRef}
        >
          <p>* Terms and conditions apply. Please contact us for details.</p>
        </div>
      </div>
    </section>
  )
}
