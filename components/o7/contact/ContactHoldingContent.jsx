import React from "react";
import { holdingContact } from "@/data/o7-holding";

export default function ContactHoldingContent() {
  return (
    <>
      <div className="rainbow-breadcrumb-area breadcrumb-style-default breadcrumb-style-3">
        <div className="breadcrumb-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content-wrapper text-center">
                  <div className="breadcrumb-title">
                    <h1 className="title theme-gradient">Contact</h1>
                  </div>
                  <p className="description mt--30">
                    Contactez O7 Digital Group Holding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rainbow-contact-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--60">
                <h4 className="subtitle">
                  <span className="theme-gradient">Nous contacter</span>
                </h4>
                <h2 className="title w-600 mb--20">{holdingContact.nom}</h2>
              </div>
            </div>
          </div>

          <div className="row row--15">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="rainbow-address">
                <div className="icon">
                  <i className="feather-globe" />
                </div>
                <div className="inner">
                  <h4 className="title">Localisation</h4>
                  <p>{holdingContact.localisation}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="rainbow-address">
                <div className="icon">
                  <i className="feather-mail" />
                </div>
                <div className="inner">
                  <h4 className="title">Email</h4>
                  <p>
                    <a href={`mailto:${holdingContact.email}`}>
                      {holdingContact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="rainbow-address">
                <div className="icon">
                  <i className="feather-briefcase" />
                </div>
                <div className="inner">
                  <h4 className="title">Type</h4>
                  <p>Holding internationale</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <p className="description b1">
                  O7 Digital Group est une holding internationale spécialisée dans <br />
                  la gouvernance et la coordination stratégique d'opérations digitales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
