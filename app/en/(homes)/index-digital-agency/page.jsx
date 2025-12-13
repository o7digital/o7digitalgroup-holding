import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/index-international-consulting/Hero";
import CtaSection from "@/components/o7/common/CtaSection";
import HomeIntro from "@/components/o7/home/HomeIntro";
import HomeServices from "@/components/o7/home/HomeServices";
import {
  o7HomeIntro as o7HomeIntroEn,
  o7HomeServices as o7HomeServicesEn,
  o7CtaBlock as o7CtaEn,
} from "@/data/o7.en";

export const metadata = {
  title: "O7 Digital Consulting | Engineering, strategy and web development",
  description:
    "Digital consulting agency specialised in CTO as a Service, modern web development, headless CMS, AI, SEO, design and performance.",
};

export default function HomeEn() {
  return (
    <>
      <Header2
        btnClass="btn-default btn-small "
        parentClass="rainbow-header header-default header-left-align header-transparent header-sticky"
      />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero />
      <HomeIntro
        data={o7HomeIntroEn}
        approachTitle="Our approach"
        approachText="We build modern, fast, scalable solutions based on reliable technologies and tailored to your objectives. Each project relies on clean, secure architecture focused on performance."
        expertiseTitle="Areas of expertise"
        expertiseText="Digital strategy, web development (React, Next.js, Astro), headless CMS, AI and automation, technical SEO, managed services and support. End-to-end support from diagnosis to production."
      />
      <HomeServices
        services={o7HomeServicesEn}
        eyebrow="Key services"
        title="9 core services"
        description="Strategy, development, AI, SEO, managed services, graphic design, motion design and 3D to cover your digital needs."
      />
      <CtaSection anchorId="cta-en" cta={o7CtaEn} />
      <Footer2 />
    </>
  );
}
