import React from "react";
import { o7CtaBlock } from "@/data/o7";

export default function CtaSection({ anchorId }) {
  return (
    <div
      id={anchorId}
      className="rainbow-callto-action clltoaction-style-default style-6 rainbow-section-gap"
      data-sal="slide-up"
      data-sal-duration={700}
    >
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper">
          <div className="col-lg-8 col-12">
            <div className="inner">
              <div className="content text-start">
                {o7CtaBlock.eyebrow && (
                  <span className="subtitle theme-gradient d-inline-block mb--10">
                    {o7CtaBlock.eyebrow}
                  </span>
                )}
                <h2 className="title">{o7CtaBlock.title}</h2>
                <p className="description b1 mb--0">{o7CtaBlock.description}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="call-to-btn text-start text-lg-end mt_md--20 mt_sm--20 button-group">
              <a className="btn-default" href="/contact">
                {o7CtaBlock.primaryLabel}
              </a>
              {o7CtaBlock.secondaryLabel ? (
                <a className="btn-default btn-border" href="#">
                  {o7CtaBlock.secondaryLabel}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
