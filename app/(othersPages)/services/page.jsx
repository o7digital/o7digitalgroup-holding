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
  title: "O7 Digital – Services (placeholders)",
  description:
    "Structure de la page services O7 Digital avec sections placeholders pour migration future.",
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
        title="6 services principaux (placeholders)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi in faucibus sapien."
        items={o7ServicesMain}
      />
      <ServiceSection
        eyebrow="Infogérance & Support"
        title="12 cartes placeholders"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        items={o7InfogeranceSupport}
      />
      <ServiceSection
        eyebrow="Appui à Direction Informatique"
        title="5 cartes placeholders"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        items={o7DirectionSupport}
      />
      <ServiceSection
        eyebrow="Conseil & Accompagnement"
        title="5 cartes placeholders"
        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        items={o7ConsultingSupport}
      />
      <CtaSection anchorId="cta-services" />
      <Footer2 />
    </>
  );
}
