import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import ContactContent from "@/components/o7/contact/ContactContent";

export const metadata = {
  title: "O7 Digital – Contact",
  description:
    "Contactez O7 Digital pour vos projets digitaux : stratégie, développement web, IA, infogérance et infrastructures.",
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
