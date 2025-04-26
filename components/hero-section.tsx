"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const heroContent = [
  {
    title: "Luxury Interiors",
    subtitle: "Where Elegance Meets Functionality",
    quote: "Crafting spaces that tell your story with timeless elegance.",
    image: "/3.jpg?height=1080&width=1920",
  },
  {
    title: "Exquisite Woodwork",
    subtitle: "Handcrafted with Precision",
    quote: "Every grain tells a story of craftsmanship and dedication.",
    image: "/placeholder.jpg?height=1080&width=1920",
  },
  {
    title: "Bespoke Designs",
    subtitle: "Tailored to Your Vision",
    quote: "Transforming your ideas into breathtaking reality.",
    image: "/2.jpg?height=1080&width=1920",
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const startSlideTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroContent.length)
        setIsAnimating(false)
      }, 1000)
    }, 5000)
  }

  useEffect(() => {
    startSlideTimer()
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current])

  const goToSlide = (index: number) => {
    if (current === index) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Ken Burns effect */}
      {heroContent.map((content, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-[2s]",
            current === index ? "opacity-100 scale-100" : "opacity-0 scale-110",
            isAnimating && current === index ? "blur-sm" : "",
          )}
        >
          <div
            className={cn(
              "absolute inset-0 transition-transform duration-[15s] ease-out",
              current === index ? "scale-110" : "scale-100",
            )}
          >
            <Image
              src={content.image || "/placeholder.svg"}
              alt={content.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            {heroContent.map((content, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-1000",
                  current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 absolute",
                  isAnimating && current === index ? "blur-sm" : "",
                )}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-fade-in-up">{content.title}</h1>
                <p className="text-xl md:text-2xl mb-6 animate-fade-in-up animation-delay-300">{content.subtitle}</p>
                <blockquote className="border-l-4 border-primary pl-4 italic mb-8 animate-fade-in-up animation-delay-600">
                  {content.quote}
                </blockquote>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up animation-delay-900">
              <Button size="lg" asChild className="group">
                <a href="/contact">
                  Get a Free Consultation
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-black/50 hover:bg-black/10 border-gray-400 hover:border-gray-300 transition-all hover:scale-105"
              >
                <a href="#services">Explore Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-500",
              current === index ? "bg-primary w-8" : "bg-white/50 hover:bg-white/80",
              isAnimating ? "scale-90" : "scale-100",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
