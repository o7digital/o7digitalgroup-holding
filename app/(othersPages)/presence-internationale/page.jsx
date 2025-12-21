import React from "react";
import Footer4 from "@/components/footers/Footer4";
import Copywrite from "@/components/footers/Copywrite";
import Header3 from "@/components/headers/Header3";
import Topbar2 from "@/components/headers/Topbar2";
import PresenceHero from "@/components/o7/presence/PresenceHero";
import EntitesList from "@/components/o7/presence/EntitesList";
import PresenceMap from "@/components/o7/presence/PresenceMap";

export const metadata = {
  title: "Présence Internationale | O7 Digital Group",
  description: "O7 Digital Group est présent à Londres (Holding), Los Angeles (Real Estate), Montréal (Onzark 365) et Mexico (Integra 365).",
  alternates: {
    canonical: 'https://www.o7digitalgroup.com/presence-internationale',
    languages: {
      'fr': 'https://www.o7digitalgroup.com/presence-internationale',
      'en': 'https://www.o7digitalgroup.com/en/international-presence',
      'es': 'https://www.o7digitalgroup.com/es/presencia-internacional',
      'de': 'https://www.o7digitalgroup.com/de/internationale-prasenz',
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
      <PresenceHero />
      <PresenceMap />
      <EntitesList />
      <Footer4 />
      <Copywrite />
    </>
  );
}
