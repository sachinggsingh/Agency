"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function ContactSection() {

  const placeholders = [
    "Tell us about your project...",
    "Need a website or custom software?",
    "Looking for UI/UX design?",
    "Need video editing services?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="py-24 px-4 bg-background">
      <Container>

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            Let's Build Something Great
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your vision into reality? Get in touch with our team.
          </p>
        </div>

        {/* CENTER STACK */}
        <div className="max-w-2xl mx-auto space-y-8">

          {/* FORM CARD */}
          {/* <div className="shadow-input rounded-2xl bg-card border border-border p-8"> */}
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          {/* </div> */}

          {/* CONTACT INFO CARD */}
          {/* <div className="shadow-input rounded-2xl bg-card border border-border p-8">

            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Get in touch
            </h3>

            <div className="space-y-6">

              <ContactInfo
                icon={<IconMail size={20} />}
                title="Email"
                content="satluxservices@gmail.com"
                href="mailto:satluxservices@gmail.com"
              />

              <ContactInfo
                icon={<IconPhone size={20} />}
                title="Phone"
                content="+91 9979068777"
              />

              <ContactInfo
                icon={<IconMapPin size={20} />}
                title="Location"
                content="Vadodara, Gujarat"
              />

            </div>
          </div> */}

          {/* WHY CARD */}
          <div className="shadow-input rounded-2xl bg-card border border-border p-8">

            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Why work with us?
            </h3>

            <ul className="space-y-3 text-muted-foreground text-center">

              <li>✓ Fast turnaround times</li>
              <li>✓ Dedicated project manager</li>
              <li>✓ Scalable solutions</li>
              <li>✓ Ongoing support & maintenance</li>

            </ul>

          </div>

        </div>

      </Container>
    </section>
  );
}

/* PERFECTLY ALIGNED CONTACT ITEM */

const ContactInfo = ({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) => {

  const Item = (
    <div className="flex items-center gap-4 justify-center">

      {/* ICON BOX */}
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>

      {/* TEXT */}
      <div className="text-left">
        <div className="font-semibold text-foreground">{title}</div>
        <div className="text-muted-foreground text-sm">{content}</div>
      </div>

    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition">
        {Item}
      </a>
    );
  }

  return Item;
};
