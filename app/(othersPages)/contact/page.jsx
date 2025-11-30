import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import ContactContent from "@/components/o7/contact/ContactContent";

export const metadata = {
  title: "O7 Digital – Contact (placeholders)",
  description:
    "Structure de la page contact O7 Digital avec formulaire et informations placeholders.",
};

export default function Page() {
  return (
    <>
      <Header2 parentClass="rainbow-header header-default header-left-align header-transparent header-sticky" />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <ContactContent />
      <Footer2 />
    </>
  );
}
