import React from "react";
import Script from "next/script";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/index-international-consulting/Hero";
import CtaSection from "@/components/o7/common/CtaSection";
import HomeIntro from "@/components/o7/home/HomeIntro";
import HomeServices from "@/components/o7/home/HomeServices";
import {
  o7HomeIntro as o7HomeIntroIt,
  o7HomeServices as o7HomeServicesIt,
  o7CtaBlock as o7CtaIt,
} from "@/data/o7.it";

export const metadata = {
  title: "CTO as a Service Italia | Leadership digitale esternalizzata",
  description:
    "Servizi CTO esternalizzati e trasformazione digitale per aziende in Italia, Europa, USA e Canada. SEO tecnico internazionale, architettura web ad alte prestazioni, consulenza digitale B2B e consulenza IT strategica.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/it/index-digital-agency',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/index-digital-agency',
      'en': 'https://www.o7digital-consulting.com/en/index-digital-agency',
      'es': 'https://www.o7digital-consulting.com/es/index-digital-agency',
      'de': 'https://www.o7digital-consulting.com/de/index-digital-agency',
      'it': 'https://www.o7digital-consulting.com/it/index-digital-agency',
    },
  },
  openGraph: {
    locale: 'it_IT',
    alternateLocale: ['fr_FR', 'en_US', 'es_ES', 'de_DE'],
  },
};

export default function HomeIt() {
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
      <Script id="ld-organization-it" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.o7digital-consulting.com/it/#organization",
            "name": "O7 Digital Consulting",
            "alternateName": "O7 Digital",
            "url": "https://www.o7digital-consulting.com/it/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.o7digital-consulting.com/assets/images/logo/logo.png",
              "width": 250,
              "height": 75
            },
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ],
            "description": "Servizi CTO esternalizzati e trasformazione digitale per aziende in Italia, Europa, USA e Canada. SEO tecnico internazionale, architettura web ad alte prestazioni, consulenza digitale B2B e consulenza IT strategica.",
            "areaServed": [
              {
                "@type": "Country",
                "name": "Italia"
              },
              {
                "@type": "Country",
                "name": "Svizzera"
              },
              {
                "@type": "Country",
                "name": "Francia"
              },
              {
                "@type": "Country",
                "name": "USA"
              },
              {
                "@type": "Country",
                "name": "Canada"
              }
            ]
          }
        `}
      </Script>
      <Script id="ld-website-it" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.o7digital-consulting.com/it/#website",
            "url": "https://www.o7digital-consulting.com/it/",
            "name": "O7 Digital Consulting",
            "inLanguage": "it-IT",
            "publisher": {
              "@id": "https://www.o7digital-consulting.com/it/#organization"
            }
          }
        `}
      </Script>
      <Script id="ld-webpage-it" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.o7digital-consulting.com/it/index-digital-agency#webpage",
            "url": "https://www.o7digital-consulting.com/it/index-digital-agency",
            "name": "CTO as a Service Italia | Leadership digitale esternalizzata",
            "inLanguage": "it-IT",
            "isPartOf": {
              "@id": "https://www.o7digital-consulting.com/it/#website"
            },
            "about": {
              "@id": "https://www.o7digital-consulting.com/it/#organization"
            },
            "description": "Servizi CTO esternalizzati e trasformazione digitale per aziende in Italia, Europa, USA e Canada. SEO tecnico internazionale, architettura web ad alte prestazioni, consulenza digitale B2B e consulenza IT strategica."
          }
        `}
      </Script>
      <Hero />
      <HomeIntro introData={o7HomeIntroIt} />
      <HomeServices servicesData={o7HomeServicesIt} />
      <CtaSection anchorId="cta-home-it" cta={o7CtaIt} contactHref="/it/contact" />
      <Footer2 lang="it" />
    </>
  );
}
