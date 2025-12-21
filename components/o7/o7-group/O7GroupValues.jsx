import React from "react";

const values = [
  {
    icon: "feather-shield",
    title: "Gouvernance",
    description: "Pilotage stratégique et coordination des orientations du groupe à l'échelle internationale.",
  },
  {
    icon: "feather-globe",
    title: "Vision internationale",
    description: "Harmonisation des opérations entre les entités présentes en Europe, Amérique du Nord et Latine.",
  },
  {
    icon: "feather-settings",
    title: "Standards de qualité",
    description: "Définition et application de standards technologiques et opérationnels au niveau groupe.",
  },
  {
    icon: "feather-trending-up",
    title: "Croissance structurée",
    description: "Développement coordonné et structuré des différentes entités du groupe.",
  },
];

export default function O7GroupValues() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb--60">
              <h4 className="subtitle">
                <span className="theme-gradient">Nos valeurs</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Piliers de notre organisation
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {values.map((value, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 col-sm-12 col-12"
            >
              <div className="service service__style--1 bg-color-blackest radius mt--25">
                <div className="icon">
                  <i className={value.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">{value.title}</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
