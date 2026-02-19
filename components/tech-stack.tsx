"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import { SiGreensock, SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
  import { SiMysql } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiDocker } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { PiFramerLogoFill } from "react-icons/pi";

import { SiExpress } from "react-icons/si";

import { FaGolang } from "react-icons/fa6";


import { Container } from "@/components/ui/container";

import { motion } from "framer-motion";

// ... existing imports

export function TechStack() {
  return (
    <section className="py-16 sm:py-20 md:py-24 font-jakarta overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container>
          <div className="text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary bg-primary/20 px-4 py-1.5 text-sm text-foreground">
              <span className="font-bold">Our Stack</span>
              <span className="text-foreground/70">Modern & Scalable</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              Top-tier technologies for <br /> world-class products.
            </h2>
          </div>
        </Container>
        
        <div className=" flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={techStack}
            direction="left"
            speed="slow"
          />
        </div>
      </motion.div>
    </section>
  );
}

const techStack = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" />,
  },
  {
    name: "Node.js",
    icon: <FaNode className="w-12 h-12 text-[#339933]" />,
  },
  {
    name: "Golang",
    icon: <FaGolang className="w-12 h-12 text-[#00ADD8]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-12 h-12 text-[#3178C6]" />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript  className="w-12 h-12 text-[#F7DF1E]" />,
  },
  {
    name: "Framer Motion",
    icon: <PiFramerLogoFill className="w-12 h-12 text-black dark:text-white" />,
  },
  {
    name: "GSAP",
    icon: <SiGreensock className="w-12 h-12 text-[#88CE02]" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-12 h-12 text-black dark:text-white" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-12 h-12 text-[#47A248]" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-12 h-12 text-[#00758F]" />,
  },
  {
    name: "Redis",
    icon: <SiRedis className="w-12 h-12 text-[#DC382D]" />,
  },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql className="w-12 h-12 text-[#336791]" />,
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill className="w-12 h-12 text-[#3ECF8E]" />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-12 h-12 text-[#2496ED]" />,
  },
];
