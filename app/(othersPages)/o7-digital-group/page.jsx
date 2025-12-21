import React from "react";
import Footer4 from "@/components/footers/Footer4";
import Copywrite from "@/components/footers/Copywrite";
import Header3 from "@/components/headers/Header3";
import Topbar2 from "@/components/headers/Topbar2";
import O7GroupHero from "@/components/o7/o7-group/O7GroupHero";
import O7GroupIntro from "@/components/o7/o7-group/O7GroupIntro";
import O7GroupValues from "@/components/o7/o7-group/O7GroupValues";

export const metadata = {
  title: "O7 Digital Group | Holding internationale digital",
  description: "O7 Digital Group est une holding internationale spécialisée dans la gouvernance et la coordination stratégique d'opérations digitales à l'échelle mondiale.",
  alternates: {
    canonical: 'https://www.o7digitalgroup.com/o7-digital-group',
    languages: {
      'fr': 'https://www.o7digitalgroup.com/o7-digital-group',
      'en': 'https://www.o7digitalgroup.com/en/o7-digital-group',
      'es': 'https://www.o7digitalgroup.com/es/o7-digital-group',
      'de': 'https://www.o7digitalgroup.com/de/o7-digital-group',
    },
  },
};

export default function Page() {
  return (
    <>
      <div className="header-transparent-with-topbar">
        <Topbar2 />
        <Header3 btnClass="btn-default btn-small " />
      </div>
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <O7GroupHero />
      <O7GroupIntro />
      <O7GroupValues />
      <Footer4 />
      <Copywrite />
    </>
  );
}
