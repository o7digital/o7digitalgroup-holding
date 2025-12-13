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
    "O7 Digital Consulting | Agence de consulting digital, CTO & développement web",
  description:
    "O7 Digital Consulting est une agence de consulting digital spécialisée en stratégie digitale, CTO as a Service, développement web moderne, design graphique, motion design, SEO et performance digitale.",
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
            "description": "Agence de consulting digital spécialisée en stratégie digitale, CTO as a Service, développement web moderne, design graphique, motion design, SEO et performance digitale.",
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ],
            "areaServed": [
              { "@type": "Country", "name": "France" },
              { "@type": "Country", "name": "Canada" },
              { "@type": "Country", "name": "Mexico" }
            ],
            "founder": {
              "@type": "Person",
              "name": "Olivier Steineur"
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
