"use client";
import React from "react";
import Link from "next/link";
import { footerSections, socialLinks } from "@/data/footerLinks";

const expertiseContent = {
  fr: {
    title: "Expertise digitale Paris & Montréal",
    keywords: [
      "agence de conseil digital à Paris",
      "agence de développement web à Montréal",
      "création de site web sur mesure",
      "services de développement full-stack",
      "CTO as a Service",
      "conseil DevOps et cloud",
      "intégration intelligence artificielle",
      "stratégie SEO avancée"
    ],
    followUs: "Suivez-nous",
    legalNotice: "Mentions Légales"
  },
  en: {
    title: "Digital consulting services – UK & USA",
    keywords: [
      "digital consulting agency UK",
      "web development agency USA",
      "custom website development",
      "full-stack development services",
      "CTO as a Service",
      "DevOps consulting services",
      "AI integration services",
      "SEO strategy and optimization"
    ],
    followUs: "Follow us",
    legalNotice: "Legal Notice"
  },
  es: {
    title: "Servicios digitales en Madrid y México",
    keywords: [
      "agencia de consultoría digital en Madrid",
      "agencia de desarrollo web en México",
      "desarrollo web a medida CDMX",
      "consultoría DevOps en Madrid",
      "integración de IA para empresas",
      "automatización de procesos digitales",
      "estrategia SEO profesional",
      "desarrollo e-commerce en México"
    ],
    followUs: "Síguenos",
    legalNotice: "Aviso Legal"
  },
  de: {
    title: "Digitale Beratung in Deutschland, Österreich & Schweiz",
    keywords: [
      "digitale Beratungsagentur in Berlin",
      "Webentwicklung Agentur Deutschland",
      "maßgeschneiderte Website Entwicklung",
      "Full-Stack Entwicklungsservices",
      "CTO as a Service DACH",
      "DevOps- und Cloud-Consulting",
      "KI-Integration für Unternehmen",
      "Technisches SEO & Performance"
    ],
    followUs: "Folgen Sie uns",
    legalNotice: "Impressum"
  }
};

export default function Footer2({ lang = "fr" }) {
  const content = expertiseContent[lang] || expertiseContent.fr;
  const prefix =
    lang === "en" ? "/en" : lang === "es" ? "/es" : lang === "de" ? "/de" : "";

  return (
    <footer className="rainbow-footer footer-style-default no-border">
      <div
        className="footer-top"
        style={{ paddingTop: "32px", paddingBottom: "8px" }}
      >
        <div className="container">
          <div className="row">
            {footerSections.map((section, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                <div className="rainbow-footer-widget">
                  <h4 className="title">{section.title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">{content.followUs}</h4>
                <div className="inner">
                  <ul className="social-icon social-default justify-content-start">
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>
                          <i className={link.iconClass} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--40">
            <div className="col-lg-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">{content.title}</h4>
                <div className="inner">
                  <ul className="footer-link link-hover" style={{ columns: "2", columnGap: "2rem" }}>
                    {content.keywords.map((keyword, i) => (
                      <li key={i} style={{ breakInside: "avoid", marginBottom: "8px" }}>
                        <span style={{ color: "#8f8f8f", fontSize: "14px" }}>{keyword}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="copyright-area copyright-style-one no-border"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover">
                  <li>
                    <Link href={`${prefix || ""}/privacy-policy`}>{content.legalNotice}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright-right text-center text-md-right">
                <p className="copyright-text">
                  © o7 Digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
