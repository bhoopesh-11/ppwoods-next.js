import HeroSection from "@/components/hero-section"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Process from "@/components/process"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import ContactCta from "@/components/contact-cta"
import Partners from "@/components/partners"
import { Products } from "@/components/products"  // Add this import

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutUs />
      <Services />
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience Our Craft</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="/PPwods_compressed.pdf"
              className="w-full h-full border-0"
              title="PPWOODS Portfolio"
            />
          </div>
          <div className="text-center mt-6">
            <a 
              href="/PPwods_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View Full Screen
            </a>
          </div>
        </div>
      </div>
      <Products />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <ContactCta />
    </div>
  )
}
