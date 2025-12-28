import React from "react";
import Image from "next/image";

export default function O7GroupIntro() {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail" style={{ minHeight: "700px", position: "relative" }}>
              <Image
                alt="O7 Digital Group"
                src="/assets/images/o7digital-group/Gemini_Generated_Image_en0pt7en0pt7en0p.png"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="col-lg-7 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="section-title">
                <h4 className="subtitle">
                  <span className="theme-gradient">La holding</span>
                </h4>
                <h2 className="title mt--10">Gouvernance et stratégie</h2>
                <p className="mb--20">
                  O7 Digital Group est une holding internationale basée à Londres, 
                  spécialisée dans la gouvernance et la coordination stratégique d'opérations 
                  digitales à l'échelle mondiale.
                </p>
                <p className="mb--20">
                  Notre rôle consiste à assurer la structuration, le pilotage et l'alignement 
                  des différentes entités du groupe présentes en Europe, Amérique du Nord et 
                  Amérique Latine.
                </p>
                <h3 className="title h4 mt--40 mb--20">Notre mission</h3>
                <ul className="list-icon">
                  <li>
                    <span className="icon">
                      <i className="feather-check" />
                    </span>
                    Coordination des orientations technologiques et opérationnelles
                  </li>
                  <li>
                    <span className="icon">
                      <i className="feather-check" />
                    </span>
                    Harmonisation des processus et standards à l'échelle mondiale
                  </li>
                  <li>
                    <span className="icon">
                      <i className="feather-check" />
                    </span>
                    Pilotage stratégique des projets digitaux du groupe
                  </li>
                  <li>
                    <span className="icon">
                      <i className="feather-check" />
                    </span>
                    Gouvernance technologique centralisée
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
