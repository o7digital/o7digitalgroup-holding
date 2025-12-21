import React from "react";
import Script from "next/script";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/index-international-consulting/Hero";
import CtaSection from "@/components/o7/common/CtaSection";
import HomeIntro from "@/components/o7/home/HomeIntro";
import HomeServices from "@/components/o7/home/HomeServices";

export const metadata = {
  title:
    "CTO as a Service France & Europe | Direction Digitale Externalisée",
  description:
    "Direction digitale externalisée et CTO as a Service pour entreprises en France, Canada, USA, Mexique et Allemagne. SEO technique international Europe, architecture web haute performance, transformation digitale groupes internationaux et consulting IT stratégique.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/index-digital-agency',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/index-digital-agency',
      'en': 'https://www.o7digital-consulting.com/en/index-digital-agency',
      'es': 'https://www.o7digital-consulting.com/es/index-digital-agency',
      'de': 'https://www.o7digital-consulting.com/de/index-digital-agency',
      'it': 'https://www.o7digital-consulting.com/it/index-digital-agency',
    },
  },
  openGraph: {
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'es_ES', 'de_DE', 'it_IT'],
  },
};

export default function Home() {
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
      <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "O7 Digital Consulting",
            "url": "https://www.o7digital-consulting.com",
            "logo": "https://www.o7digital-consulting.com/logo.png",
            "description": "Agence de conseil digital à Paris et Montréal spécialisée en CTO as a Service, développement web sur mesure, conseil DevOps, cloud, intégration IA et stratégie SEO avancée.",
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ],
            "areaServed": [
              { 
                "@type": "City", 
                "name": "Paris",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Montréal",
                "addressCountry": "CA"
              },
              { "@type": "Country", "name": "France" },
              { "@type": "Country", "name": "Canada" }
            ],
            "founder": {
              "@type": "Person",
              "name": "Olivier Steineur"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services digitaux",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CTO as a Service",
                    "description": "Services de direction technique externalisée"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Développement web sur mesure",
                    "description": "Création de sites web et applications à Paris et Montréal"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Conseil DevOps et Cloud",
                    "description": "Conseil en infrastructure cloud et DevOps"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Stratégie SEO avancée",
                    "description": "Optimisation SEO technique et stratégique"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <Script id="ld-localbusiness" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "O7 Digital Consulting",
            "image": "https://www.o7digital-consulting.com/logo.png",
            "@id": "https://www.o7digital-consulting.com",
            "url": "https://www.o7digital-consulting.com",
            "telephone": "+33-XX-XX-XX-XX",
            "priceRange": "€€€",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Paris",
                "addressLocality": "Paris",
                "addressRegion": "Île-de-France",
                "postalCode": "75000",
                "addressCountry": "FR"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Montréal",
                "addressLocality": "Montréal",
                "addressRegion": "QC",
                "postalCode": "H0H 0H0",
                "addressCountry": "CA"
              }
            ],
            "geo": [
              {
                "@type": "GeoCoordinates",
                "latitude": 48.8566,
                "longitude": 2.3522
              },
              {
                "@type": "GeoCoordinates",
                "latitude": 45.5017,
                "longitude": -73.5673
              }
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ]
          }
        `}
      </Script>
      <Script id="ld-webpage" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "O7 Digital Consulting | Agence de consulting digital",
            "description": "Agence de conseil digital à Paris et Montréal spécialisée en CTO as a Service, développement web sur mesure, conseil DevOps, cloud, intégration IA et stratégie SEO avancée.",
            "url": "https://www.o7digital-consulting.com/index-digital-agency",
            "inLanguage": "fr-FR",
            "isPartOf": {
              "@type": "WebSite",
              "name": "O7 Digital Consulting",
              "url": "https://www.o7digital-consulting.com"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://www.o7digital-consulting.com"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.o7digital-consulting.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
      <Hero />
      <HomeIntro />
      <HomeServices />
      <CtaSection anchorId="cta" />
      <Footer2 />
    </>
  );
}
