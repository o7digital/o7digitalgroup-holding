import React from "react";
import { holdingEntites } from "@/data/o7-holding";

export default function EntitesList() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row row--30">
          {holdingEntites.map((entite) => (
            <div key={entite.id} className="col-lg-6 col-md-6 col-12 mt--40">
              <div className="service-card service__style--2 bg-color-blackest radius-big">
                <div className="inner">
                  <div className="icon">
                    <i className={entite.icon} />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">{entite.ville}, {entite.pays}</a>
                    </h4>
                    <h5 className="subtitle mt--10 mb--20 theme-gradient">
                      {entite.entite}
                    </h5>
                    <p className="description b1 color-gray mb--0">
                      {entite.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt--80">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">Organisation internationale</h3>
              <p className="description b1 mt--20">
                O7 Digital Group structure ses opérations à travers différentes entités 
                spécialisées, chacune ayant un rôle spécifique dans l'organisation globale 
                du groupe. Cette structure permet d'assurer une coordination optimale tout 
                en maintenant une expertise locale dans chaque zone géographique.
              </p>
              
              <div className="row mt--40">
                <div className="col-lg-6">
                  <h4 className="title h5 mb--20">Gouvernance</h4>
                  <p className="description b1">
                    La holding basée à Londres assure la gouvernance stratégique, 
                    la coordination des orientations technologiques et l'harmonisation 
                    des processus à l'échelle du groupe.
                  </p>
                </div>
                <div className="col-lg-6">
                  <h4 className="title h5 mb--20">Opérations</h4>
                  <p className="description b1">
                    Les entités opérationnelles en Amérique du Nord et Latine assurent 
                    la mise en œuvre des stratégies définies au niveau groupe, tout en 
                    s'adaptant aux spécificités locales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
