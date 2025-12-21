import React from "react";
import Footer4 from "@/components/footers/Footer4";
import Copywrite from "@/components/footers/Copywrite";
import Header3 from "@/components/headers/Header3";
import Topbar2 from "@/components/headers/Topbar2";
import ProduitsHero from "@/components/o7/produits/ProduitsHero";
import ProduitsList from "@/components/o7/produits/ProduitsList";

export const metadata = {
  title: "Nos Produits | O7 Digital Group",
  description: "Plateformes digitales, solutions propriétaires et frameworks internes développés et opérés par O7 Digital Group pour la coordination internationale.",
  alternates: {
    canonical: 'https://www.o7digitalgroup.com/nos-produits',
    languages: {
      'fr': 'https://www.o7digitalgroup.com/nos-produits',
      'en': 'https://www.o7digitalgroup.com/en/our-products',
      'es': 'https://www.o7digitalgroup.com/es/nuestros-productos',
      'de': 'https://www.o7digitalgroup.com/de/unsere-produkte',
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
      <ProduitsHero />
      <ProduitsList />
      <Footer4 />
      <Copywrite />
    </>
  );
}
