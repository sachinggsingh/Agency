"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";

export function AnimatedTestimonialsDemo() {
  // const testimonials = [
  //   {
  //     quote:
  //       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
  //     name: "Sarah Chen",
  //     designation: "Product Manager at TechFlow",
  //     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
  //     name: "Michael Rodriguez",
  //     designation: "CTO at InnovateSphere",
  //     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
  //     name: "Emily Watson",
  //     designation: "Operations Director at CloudScale",
  //     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
  //     name: "James Kim",
  //     designation: "Engineering Lead at DataPro",
  //     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
  //     name: "Lisa Thompson",
  //     designation: "VP of Technology at FutureNet",
  //     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
const testimonials = [
  {
    quote:
      "They redesigned our entire website and completely transformed our online presence. The new UI feels modern, loads faster, and our conversion rate improved within weeks.",
    name: "Amit Verma",
    designation: "Founder, UrbanCart",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
  },
  {
    quote:
      "We needed a custom internal software system to manage orders and reporting. Their team delivered a clean dashboard, secure backend, and automation that eliminated hours of manual work.",
    name: "Rachel Morgan",
    designation: "Operations Manager, BrightSupply",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
  },
  {
    quote:
      "Their UI/UX team truly understands user behavior. They redesigned our mobile and web flows, making the product much easier for customers to use while keeping the design visually stunning.",
    name: "Carlos Mendes",
    designation: "Product Lead, NovaPay",
    src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800",
  },
  {
    quote:
      "We partnered with them for promotional video editing and social media content. The quality, pacing, and branding consistency helped our marketing campaigns perform far better than before.",
    name: "Sneha Kapoor",
    designation: "Marketing Head, Elevate Studio",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800",
  },
  {
    quote:
      "What makes them stand out is their ability to handle everything — website, design, backend software, and media assets. It felt like working with a full in-house digital team.",
    name: "David Collins",
    designation: "CEO, LaunchBridge",
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800",
  },
];

  return (
    <div className="py-16 sm:py-20 relative font-jakarta">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-tight text-[#547792] dark:text-[#AAC4F5]">What our clients say</h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </motion.div>
    </div>
  );
}
