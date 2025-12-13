import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/index-international-consulting/Hero";
import CtaSection from "@/components/o7/common/CtaSection";
import HomeIntro from "@/components/o7/home/HomeIntro";
import HomeServices from "@/components/o7/home/HomeServices";
import {
  o7HomeIntro as o7HomeIntroEs,
  o7HomeServices as o7HomeServicesEs,
  o7CtaBlock as o7CtaEs,
} from "@/data/o7.es";

export const metadata = {
  title: "O7 Digital Consulting | Ingeniería, estrategia y desarrollo web",
  description:
    "Agencia de consultoría digital especializada en CTO as a Service, desarrollo web moderno, CMS headless, IA, SEO, diseño y performance.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/es/index-digital-agency',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/index-digital-agency',
      'en': 'https://www.o7digital-consulting.com/en/index-digital-agency',
      'es': 'https://www.o7digital-consulting.com/es/index-digital-agency',
    },
  },
  openGraph: {
    locale: 'es_ES',
    alternateLocale: ['fr_FR', 'en_US'],
  },
};

export default function HomeEs() {
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
        data={o7HomeIntroEs}
        approachTitle="Nuestro enfoque"
        approachText="Creamos soluciones modernas, rápidas y escalables basadas en tecnologías fiables y adaptadas a tus objetivos. Cada proyecto se apoya en una arquitectura limpia, segura y orientada a la performance."
        expertiseTitle="Áreas de expertise"
        expertiseText="Estrategia digital, desarrollo web (React, Next.js, Astro), CMS headless, IA y automatización, SEO técnico, infogestión y soporte. Acompañamiento integral del diagnóstico a la producción."
      />
      <HomeServices
        services={o7HomeServicesEs}
        eyebrow="Servicios clave"
        title="9 servicios principales"
        description="Estrategia, desarrollo, IA, SEO, infogestión, diseño gráfico, motion design y 3D para cubrir tus necesidades digitales."
      />
      <CtaSection anchorId="cta-es" cta={o7CtaEs} />
      <Footer2 />
    </>
  );
}
