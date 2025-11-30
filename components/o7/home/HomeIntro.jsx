import React from "react";
import SectionHeader from "../common/SectionHeader";
import { o7HomeIntro } from "@/data/o7";

export default function HomeIntro() {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-6">
            <SectionHeader
              align="left"
              eyebrow={o7HomeIntro.eyebrow}
              title={o7HomeIntro.title}
              description={o7HomeIntro.description}
            >
              <div className="mt--20">
                {o7HomeIntro.bullets.map((bullet, index) => (
                  <p key={index} className="b1 mb--10">
                    {bullet}
                  </p>
                ))}
              </div>
            </SectionHeader>
          </div>
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <div className="service service__style--1 bg-color-blackest radius text-left rbt-border">
              <div className="content">
                <h4 className="title w-600">Bloc descriptif placeholder</h4>
                <p className="description b1 mb--0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
            <div className="service service__style--1 bg-color-blackest radius text-left rbt-border mt--20">
              <div className="content">
                <h4 className="title w-600">Informations clés placeholder</h4>
                <p className="description b1 mb--0">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
