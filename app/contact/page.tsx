"use client"

import { useEffect, useRef } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const formRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    if (formRef.current) observer.observe(formRef.current)
    if (mapRef.current) observer.observe(mapRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="text-center mb-12 opacity-0 transform translate-y-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Write to us or give us a call now, we're always happy to provide a free consultation and help out with any
            questions you may ask.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Phone className="h-6 w-6 text-primary" />,
              title: "Phone",
              content: "+91 9082093288",
            },
            {
              icon: <Mail className="h-6 w-6 text-primary" />,
              title: "Email",
              content: "punitlimbavat99@gmail.com",
            },
            {
              icon: <MapPin className="h-6 w-6 text-primary" />,
              title: "Address",
              content: "Ramasagara Rd, Muthanallur, Bengaluru, Karnataka 560099",
            },
          ].map((card, index) => (
            <Card
              key={index}
              className={cn(
                "text-center opacity-0 transform translate-y-8 hover:shadow-lg transition-all duration-300",
                `animation-delay-${(index + 2) * 100}`,
              )}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 animate-pulse-slow">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div ref={formRef} className="opacity-0 transform translate-x-[-50px] animation-delay-500">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  placeholder="+91 98765 43210"
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Interior Design Consultation"
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <Button type="submit" className="w-full group relative overflow-hidden">
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Button>
            </form>
          </div>

          <div ref={mapRef} className="opacity-0 transform translate-x-[50px] animation-delay-500">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="aspect-square w-full bg-muted rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2307428693257!2d77.6982!3d12.8782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzQxLjUiTiA3N8KwNDEnNTMuNSJF!5e0!3m2!1sen!2sin!4v1650956351193!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-8 animate-fade-in animation-delay-700">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between group hover:bg-muted/50 p-2 rounded-md transition-colors duration-300">
                  <span className="group-hover:text-primary transition-colors duration-300">Monday - Friday</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between group hover:bg-muted/50 p-2 rounded-md transition-colors duration-300">
                  <span className="group-hover:text-primary transition-colors duration-300">Saturday</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between group hover:bg-muted/50 p-2 rounded-md transition-colors duration-300">
                  <span className="group-hover:text-primary transition-colors duration-300">Sunday</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
