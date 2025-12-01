import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/index-international-consulting/Hero";
import CtaSection from "@/components/o7/common/CtaSection";
import HomeIntro from "@/components/o7/home/HomeIntro";
import HomeServices from "@/components/o7/home/HomeServices";

export const metadata = {
  title: "O7 Digital – Accueil (placeholders)",
  description:
    "Structure de la page d'accueil O7 Digital basée sur le template Digital Agency, avec contenus temporaires.",
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
      <Hero />
      <HomeIntro />
      <HomeServices />
      <CtaSection anchorId="cta" />
      <Footer2 />
    </>
  );
}
