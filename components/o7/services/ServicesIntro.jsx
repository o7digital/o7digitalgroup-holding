import React from "react";
import SectionHeader from "../common/SectionHeader";
import { o7ServicesIntro } from "@/data/o7";

export default function ServicesIntro() {
  return (
    <div className="rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <SectionHeader
              eyebrow={o7ServicesIntro.eyebrow}
              title={o7ServicesIntro.title}
              description={o7ServicesIntro.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
