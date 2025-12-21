import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="rainbow-callto-action-area rainbow-section-gapBottom">
      <div className="wrapper">
        <div className="rainbow-callto-action clltoaction-style-default style-5">
          <div className="container">
            <div className="row row--0 align-items-center content-wrapper theme-shape">
              <div className="col-lg-12">
                <div className="inner">
                  <div className="content text-center">
                    <h2 className="title">
                      Découvrez O7 Digital Group
                    </h2>
                    <h6 className="subtitle">
                      Holding internationale digital
                    </h6>
                    <div className="call-to-btn">
                      <Link className="btn-default btn-icon" href="/contact">
                        Nous contacter <i className="feather-arrow-right" />
                      </Link>
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
