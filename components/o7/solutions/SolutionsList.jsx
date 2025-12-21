import React from "react";
import Image from "next/image";
import { holdingSolutions } from "@/data/o7-holding";

export default function SolutionsList() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb--60">
              <h4 className="subtitle">
                <span className="theme-gradient">Solutions groupe</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Structuration digitale internationale
              </h2>
              <p className="description b1">
                O7 Digital Group propose des solutions de haut niveau pour la gouvernance <br />
                et la coordination de projets digitaux complexes à l'échelle internationale.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row row--30">
          {holdingSolutions.map((solution, index) => (
            <div key={solution.id} className="col-lg-6 col-md-6 col-12 mt--40">
              <div className="service-card">
                <div className="inner">
                  <div className="image mb--30">
                    <Image
                      alt={solution.title}
                      src={solution.image}
                      width={590}
                      height={332}
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">{solution.title}</a>
                    </h4>
                    <p className="description b1 color-gray mb--0 mt--20">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt--60">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">Approche groupe</h3>
              <p className="description b1 mt--20">
                Nos solutions sont conçues pour répondre aux enjeux de gouvernance 
                et de coordination des groupes internationaux. Nous intervenons au 
                niveau stratégique pour assurer l'alignement des différentes entités 
                et la cohérence des initiatives digitales à l'échelle mondiale.
              </p>
              <ul className="list-icon mt--30">
                <li>
                  <span className="icon">
                    <i className="feather-check" />
                  </span>
                  Vision stratégique : pilotage des orientations technologiques au niveau groupe
                </li>
                <li>
                  <span className="icon">
                    <i className="feather-check" />
                  </span>
                  Coordination internationale : harmonisation des processus entre entités
                </li>
                <li>
                  <span className="icon">
                    <i className="feather-check" />
                  </span>
                  Standards de qualité : définition et application de normes communes
                </li>
                <li>
                  <span className="icon">
                    <i className="feather-check" />
                  </span>
                  Gouvernance centralisée : supervision des projets digitaux majeurs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
