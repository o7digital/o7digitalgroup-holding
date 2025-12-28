import React from "react";
import Image from "next/image";
import { holdingContact } from "@/data/o7-holding";

export default function ContactHoldingContent() {
  return (
    <>
      <div className="o7-contact-hero" style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
        <Image
          src="/assets/hammer-group.webp"
          alt="Nous Contacter - O7 Digital Group"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          textAlign: 'center',
          width: '100%',
          padding: '0 20px'
        }}>
          <h1 className="title" style={{ color: '#ffffff', fontSize: '3.5rem', fontWeight: '700', marginBottom: '20px' }}>
            Nous Contacter
          </h1>
          <p className="description" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem' }}>
            Contactez O7 Digital Group Holding
          </p>
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
