import React from "react";
import SectionHeader from "../common/SectionHeader";

export default function Expertise({
  eyebrow = "Expertise",
  title = "Une implication au cœur du business de nos clients",
  paragraphs = [
    "Chez O7 Digital Consulting, nous ne nous limitons pas à la création de sites web ou au déploiement de solutions techniques. Nous nous impliquons directement dans le cœur du business de nos clients, en agissant comme une véritable direction informatique et digitale externalisée.",
    "Notre rôle est d’aligner la technologie, le design et la performance digitale avec les objectifs stratégiques de l’entreprise. Nous accompagnons les dirigeants dans leurs décisions clés, structurons les outils numériques, optimisons les processus et construisons des plateformes capables de soutenir la croissance réelle du business.",
    "Nous travaillons en étroite collaboration avec les équipes internes, les partenaires et les décideurs afin de garantir une cohérence totale entre vision, exécution et résultats. Chaque projet est pensé comme un levier de performance, de rentabilité et de pérennité, au service des ambitions de nos clients.",
  ],
}) {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description=""
            />
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          <div
            className="col-lg-12"
            data-sal="slide-up"
            data-sal-duration={650}
            data-sal-delay={0}
          >
            <div className="service service__style--1 icon-circle-style text-center">
              <div className="icon">
                <i className="feather-star" />
              </div>
              <div className="content">
                {paragraphs.map((text, idx) => (
                  <p
                    key={text}
                    className={`description b1 color-gray ${
                      idx === paragraphs.length - 1 ? "mb--0" : "mb--10"
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
