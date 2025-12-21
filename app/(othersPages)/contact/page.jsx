import React from "react";
import Footer4 from "@/components/footers/Footer4";
import Copywrite from "@/components/footers/Copywrite";
import Header3 from "@/components/headers/Header3";
import Topbar2 from "@/components/headers/Topbar2";
import ContactHoldingContent from "@/components/o7/contact/ContactHoldingContent";

export const metadata = {
  title: "Contact | O7 Digital Group Holding",
  description: "Contactez O7 Digital Group Holding - Holding internationale basée à Londres.",
  alternates: {
    canonical: 'https://www.o7digitalgroup.com/contact',
    languages: {
      'fr': 'https://www.o7digitalgroup.com/contact',
      'en': 'https://www.o7digitalgroup.com/en/contact',
      'es': 'https://www.o7digitalgroup.com/es/contacto',
      'de': 'https://www.o7digitalgroup.com/de/kontakt',
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
      <ContactHoldingContent />
      <Footer4 />
      <Copywrite />
    </>
  );
}
