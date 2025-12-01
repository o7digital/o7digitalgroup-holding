import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import CtaSection from "@/components/o7/common/CtaSection";
import ServicesIntro from "@/components/o7/services/ServicesIntro";
import ServiceSection from "@/components/o7/services/ServiceSection";
import {
  o7ConsultingSupport,
  o7DirectionSupport,
  o7InfogeranceSupport,
  o7ServicesMain,
} from "@/data/o7";

export const metadata = {
  title: "O7 Digital – Services",
  description:
    "Services O7 Digital : stratégie digitale, développement web, IA, SEO, infogérance, infrastructures, gouvernance IT et conseil.",
};

export default function Page() {
  return (
    <>
      <Header2 parentClass="rainbow-header header-default header-left-align header-transparent header-sticky" />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <ServicesIntro />
      <ServiceSection
        eyebrow="Services principaux"
        title="6 services principaux"
        description="Stratégie, développement, IA, SEO et infogérance pour soutenir vos projets digitaux."
        items={o7ServicesMain}
      />
      <ServiceSection
        eyebrow="Infogérance & Support"
        title="Infogérance & services d’exploitation"
        description="Support, administration, infrastructures, réseaux, sécurité, VoIP et continuité énergétique."
        items={o7InfogeranceSupport}
      />
      <ServiceSection
        eyebrow="Appui à Direction Informatique"
        title="Appui DSI, MOA, gouvernance"
        description="Renfort opérationnel, décisions technologiques, gestion de projets et maîtrise des risques."
        items={o7DirectionSupport}
      />
      <ServiceSection
        eyebrow="Conseil & Accompagnement"
        title="Conseil & accompagnement"
        description="Audits, optimisation des processus, sélection technologique, budget et gouvernance IT."
        items={o7ConsultingSupport}
      />
      <CtaSection anchorId="cta-services" />
      <Footer2 />
    </>
  );
}
