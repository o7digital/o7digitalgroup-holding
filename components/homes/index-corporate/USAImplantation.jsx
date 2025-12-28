import React from "react";

export default function USAImplantation() {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="about-content bg-color-blackest p-5 radius">
              <div
                className="section-title"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">États-Unis</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Accompagnement implantation & opérations
                </h2>
                <p className="description b1 mb--30">
                  Aux États-Unis, <strong>O7 Digital USA</strong> accompagne les entrepreneurs 
                  et entreprises internationales dans leur implantation : structuration opérationnelle, 
                  infrastructure IT et digitalisation.
                </p>
                <p className="description b1 mb--30">
                  Avec une expertise complémentaire en immobilier via <strong>O7 Digital Real Estate</strong>, 
                  nous fournissons un accompagnement global pour réussir votre développement sur le marché américain.
                </p>
                <div className="row mt--30">
                  <div className="col-lg-6">
                    <div className="service service__style--1 bg-color-extra01 radius p-4 mb--20">
                      <div className="content">
                        <h5 className="title w-600">
                          <i className="feather-briefcase mr--10"></i>
                          O7 Digital USA
                        </h5>
                        <p className="description b2 color-gray mb--0">
                          IT, infrastructure, digital et structuration opérationnelle
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service service__style--1 bg-color-extra01 radius p-4 mb--20">
                      <div className="content">
                        <h5 className="title w-600">
                          <i className="feather-home mr--10"></i>
                          O7 Digital Real Estate
                        </h5>
                        <p className="description b2 color-gray mb--0">
                          Expertise immobilier et implantation physique
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
