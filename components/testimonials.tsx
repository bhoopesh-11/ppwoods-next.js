"use client"

import { useRef, useEffect } from "react"

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

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

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-20 scroll-mt-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4 opacity-0 transform translate-y-8">
            What Our Clients Say
          </h2>
          <p
            ref={descRef}
            className="text-lg text-muted-foreground max-w-3xl mx-auto opacity-0 transform translate-y-8 animation-delay-200"
          >
            Watch what our clients have to say about their experience with PPWOODS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/y-ROTGETnTc?si=RgJKhhbx7Xx2Z9DH&autoplay=1&mute=1" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="border-0"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/YXR05k3yvE8?si=qPe1Ysk_iQ1x1yby&autoplay=1&mute=1" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="border-0"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/7WqLAh6Eigk?si=FukMvju1BSwbcaYa&autoplay=1&mute=1" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="border-0"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/Bl8Zm-0ZmqE?si=2sY2UoVMCXb1Bw1C&autoplay=1&mute=1" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="border-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
