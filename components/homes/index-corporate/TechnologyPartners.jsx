import React from "react";
import { technologyPartners } from "@/data/o7-holding";

export default function TechnologyPartners() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
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
                <span className="theme-gradient">Partenaires Technologiques</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Expertise reconnue avec les leaders mondiaux
              </h2>
              <p className="description b1">
                O7 Digital Group s'appuie sur des partenariats stratégiques avec IBM, Fujitsu et Google 
                pour délivrer des solutions d'infrastructure et de services managés de niveau entreprise.
              </p>
            </div>
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {technologyPartners.map((partner) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              key={partner.id}
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={partner.id * 100}
            >
              <div className="service service__style--1 bg-color-blackest radius mt--25 rbt-border">
                <div className="content">
                  <h4 className="title w-600">
                    <span className="theme-gradient">{partner.name}</span>
                  </h4>
                  <p className="subtitle">
                    <strong>{partner.status}</strong>
                  </p>
                  <p className="description b1 color-gray mb--20">
                    {partner.description}
                  </p>
                  <ul className="list-style">
                    {partner.expertise.map((item, idx) => (
                      <li key={idx}>
                        <i className="feather-check" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
