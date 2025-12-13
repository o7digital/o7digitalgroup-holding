import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import CtaSection from "@/components/o7/common/CtaSection";
import ServicesIntro from "@/components/o7/services/ServicesIntro";
import ServiceSection from "@/components/o7/services/ServiceSection";
import {
  o7ServicesMain,
} from "@/data/o7";

export const metadata = {
  title:
    "Services de consulting digital & direction informatique – O7 Digital Consulting",
  description:
    "Découvrez les services de O7 Digital Consulting : direction digitale, CTO as a Service, développement web moderne, SEO, design graphique, motion design et performance business.",
};

export default function Page() {
  const servicesIndex = Object.fromEntries(
    o7ServicesMain.map((service) => [service.title, service])
  );

  const strategieDirection = [
    servicesIndex["Stratégie digitale & CTO as a Service"],
    servicesIndex["SEO technique & performance digitale"],
    servicesIndex["Infogérance IT & support opérationnel"],
  ].filter(Boolean);

  const developpementPlateformes = [
    servicesIndex["Développement web moderne & applications performantes"],
    servicesIndex["CMS headless & backends sur mesure"],
    servicesIndex["Intelligence artificielle & automatisation des processus"],
  ].filter(Boolean);

  const designContenusExperience = [
    servicesIndex["Design graphique & identité digitale"],
    servicesIndex["Animations & motion design pour le digital"],
    servicesIndex["Design 3D & expériences visuelles immersives"],
  ].filter(Boolean);

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
        title="Stratégie & direction digitale"
        description=""
        items={strategieDirection}
      />
      <ServiceSection
        eyebrow="Services principaux"
        title="Développement & plateformes"
        description=""
        items={developpementPlateformes}
      />
      <ServiceSection
        eyebrow="Services principaux"
        title="Design, contenus & expérience"
        description=""
        items={designContenusExperience}
      />
      <CtaSection anchorId="cta-services" />
      <Footer2 />
    </>
  );
}
