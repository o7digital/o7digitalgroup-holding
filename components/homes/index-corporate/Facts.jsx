import React from "react";

const holdingFacts = [
  {
    title: "Présence internationale",
    description: "4 localisations stratégiques",
  },
  {
    title: "Continents",
    description: "Europe, Amérique du Nord et Latine",
  },
  {
    title: "Coordination",
    description: "Gouvernance centralisée",
  },
];

export default function Facts() {
  return (
    <div className="rainbow-counterup-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Le groupe en chiffres</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Présence internationale
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {holdingFacts.map((fact, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="count-box counter-style-2 text-center">
                <h5 className="title">{fact.title}</h5>
                <p className="description">{fact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
