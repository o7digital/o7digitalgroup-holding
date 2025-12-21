import React from "react";
import { holdingProduits } from "@/data/o7-holding";

export default function ProduitsList() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb--60">
              <h4 className="subtitle">
                <span className="theme-gradient">Écosystème technologique</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Solutions propriétaires du groupe
              </h2>
              <p className="description b1">
                O7 Digital Group développe et opère des solutions technologiques <br />
                pour optimiser la gouvernance et la coordination de ses opérations internationales.
              </p>
            </div>
          </div>
        </div>

        <div className="row row--15 service-wrapper">
          {holdingProduits.map((produit, index) => (
            <div
              key={produit.id}
              className="col-lg-4 col-md-6 col-sm-12 col-12"
            >
              <div className="service service__style--1 bg-color-blackest radius mt--25 text-center">
                <div className="icon">
                  <i className={produit.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">{produit.title}</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {produit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt--60">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">Approche produit</h3>
              <p className="description b1 mt--20">
                Les produits développés par O7 Digital Group sont conçus pour répondre 
                aux besoins spécifiques de gouvernance et de coordination d'un groupe 
                international. Ces solutions sont déployées en interne et contribuent 
                à l'efficacité opérationnelle des différentes entités du groupe.
              </p>
              
              <div className="row mt--40">
                <div className="col-lg-6">
                  <h4 className="title h5 mb--20">Caractéristiques</h4>
                  <ul className="list-icon">
                    <li>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>
                      Solutions développées en interne
                    </li>
                    <li>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>
                      Opérées par le groupe
                    </li>
                    <li>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>
                      Évolution continue
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <h4 className="title h5 mb--20">Bénéfices</h4>
                  <ul className="list-icon">
                    <li>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>
                      Harmonisation des processus
                    </li>
                    <li>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>
                      Centralisation de la gouvernance
                    </li>
                    <li>
                      <span className="icon">
                        <i className="feather-check" />
                      </span>
                      Standardisation internationale
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
