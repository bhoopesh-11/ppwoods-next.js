"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const products = [
  { title: "Bedroom", video: "/bedroom.mp4" },
  { title: "Living Room", video: "/livingroom.mp4" },
  { title: "Bathroom", video: "/bathroom.mp4" },
  { title: "Kitchen", video: "/kitchen.mp4" },
  { title: "Wardrobe", video: "/wardrobe.mp4" },
  { title: "Dinning Room", video: "/dinningroom.mp4" },
]

export function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const videosRef = useRef<(HTMLDivElement | null)[]>([])

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
      { threshold: 0.1 }
    )

    if (headingRef.current) observer.observe(headingRef.current)
    videosRef.current.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="py-20 scroll-mt-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold opacity-0 transform translate-y-8"
          >
            Our Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (videosRef.current[index] = el)}
              className={cn(
                "aspect-[9/16] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-8 relative group",
                `animation-delay-${(index + 1) * 100}`
              )}
            >
              <video
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={product.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
