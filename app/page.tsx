import { ContactSection } from "@/components/Contact";
import { GlowingEffectDemo } from "@/components/DefineUs";
import FAQ from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Skiper19 } from "@/components/Good-Animation";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import PricingCards from "@/components/Pricing";
import { TechStack } from "@/components/tech-stack";
import { AnimatedTestimonialsDemo } from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <Hero />
      <Skiper19 />

      <GlowingEffectDemo />
      <TechStack />
      <AnimatedTestimonialsDemo />
      <PricingCards />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}
