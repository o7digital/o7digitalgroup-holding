import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import CtaSection from "@/components/o7/common/CtaSection";
import AboutDetails from "@/components/o7/about/AboutDetails";
import AboutHero from "@/components/o7/about/AboutHero";
import Expertise from "@/components/o7/about/Expertise";
import Methodology from "@/components/o7/about/Methodology";

export const metadata = {
  title:
    "À propos de O7 Digital Consulting | Direction digitale & consulting stratégique",
  description:
    "Découvrez O7 Digital Consulting, agence de consulting digital impliquée au cœur du business de ses clients, agissant comme direction informatique et digitale externalisée.",
};

export default function Page() {
  return (
    <>
      <Header2 parentClass="rainbow-header header-default header-left-align header-transparent header-sticky" />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <AboutHero />
      <AboutDetails />
      <Methodology />
      <Expertise />
      <CtaSection anchorId="cta-about" />
      <Footer2 />
    </>
  );
}
