import React from "react";
import Footer4 from "@/components/footers/Footer4";
import Copywrite from "@/components/footers/Copywrite";
import Header3 from "@/components/headers/Header3";
import Topbar2 from "@/components/headers/Topbar2";
import SolutionsHero from "@/components/o7/solutions/SolutionsHero";
import SolutionsList from "@/components/o7/solutions/SolutionsList";

export const metadata = {
  title: "Nos Solutions | O7 Digital Group",
  description: "Solutions de gouvernance et de structuration pour groupes internationaux : coordination de projets digitaux, gouvernance technologique et solutions corporate B2B.",
  alternates: {
    canonical: 'https://www.o7digitalgroup.com/nos-solutions',
    languages: {
      'fr': 'https://www.o7digitalgroup.com/nos-solutions',
      'en': 'https://www.o7digitalgroup.com/en/our-solutions',
      'es': 'https://www.o7digitalgroup.com/es/nuestras-soluciones',
      'de': 'https://www.o7digitalgroup.com/de/unsere-losungen',
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
      <SolutionsHero />
      <SolutionsList />
      <Footer4 />
      <Copywrite />
    </>
  );
}
