import React from "react";
import Script from "next/script";
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
  title: "CTO as a Service UK & USA | Outsourced Digital Leadership",
  description:
    "Outsourced CTO services and digital transformation for companies in UK, USA, Canada and Mexico. Technical SEO international, high-performance web architecture, B2B digital consulting and strategic IT consulting.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/en/index-digital-agency',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/index-digital-agency',
      'en': 'https://www.o7digital-consulting.com/en/index-digital-agency',
      'es': 'https://www.o7digital-consulting.com/es/index-digital-agency',
      'de': 'https://www.o7digital-consulting.com/de/index-digital-agency',
      'it': 'https://www.o7digital-consulting.com/it/index-digital-agency',
    },
  },
  openGraph: {
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'es_ES', 'de_DE', 'it_IT'],
  },
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
      <Script id="ld-organization-en" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.o7digital-consulting.com/en/#organization",
            "name": "O7 Digital Consulting",
            "url": "https://www.o7digital-consulting.com/en",
            "logo": "https://www.o7digital-consulting.com/logo.png",
            "description": "Digital consulting agency UK & USA specializing in CTO as a Service, custom website development, DevOps consulting, cloud infrastructure, AI integration and technical SEO consulting.",
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ],
            "areaServed": [
              { 
                "@type": "Country", 
                "name": "United Kingdom"
              },
              { 
                "@type": "Country", 
                "name": "United States"
              }
            ],
            "founder": {
              "@type": "Person",
              "name": "Olivier Steineur"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CTO as a Service",
                    "description": "Fractional CTO services for UK and USA companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Website Development",
                    "description": "Bespoke web development services UK and USA"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "DevOps Consulting Services",
                    "description": "Cloud infrastructure and DevOps consulting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical SEO Consulting",
                    "description": "Advanced SEO strategy and implementation"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <Hero
        title={
          <>
            We support your growth <br />
            and development
          </>
        }
        description="Go-to-market, digital marketing, and IT & Cloud services (managed services, cybersecurity, consulting)."
        ctaLabel="Talk to an expert →"
        ctaHref="/en/contact"
      />
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
      <CtaSection anchorId="cta-en" cta={o7CtaEn} contactHref="/en/contact" />
      <Footer2 lang="en" />
    </>
  );
}
