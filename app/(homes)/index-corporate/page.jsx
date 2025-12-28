import Header3 from "@/components/headers/Header3";

import Topbar2 from "@/components/headers/Topbar2";

import Hero from "@/components/homes/index-corporate/Hero";
import Services from "@/components/homes/index-corporate/Services";
import TechnologyPartners from "@/components/homes/index-corporate/TechnologyPartners";
import KeyActivities from "@/components/homes/index-corporate/KeyActivities";
import React from "react";
import Cta from "@/components/homes/index-corporate/Cta";

import Footer4 from "@/components/footers/Footer4";
import Copywrite from "@/components/footers/Copywrite";

export const metadata = {
  title: "O7 Digital Group Holding | Infogérance & Infrastructure IT Internationale",
  description: "Groupe international d'infogérance, d'infrastructures IT et de solutions métiers. Partenaire IBM, Fujitsu et Google Cloud pour grands comptes industriels et distribution.",
};
export default function page() {
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
      <Hero />
      <TechnologyPartners />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <KeyActivities />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Services />
      <Cta />
      <Footer4 />
      <Copywrite />
    </>
  );
}
