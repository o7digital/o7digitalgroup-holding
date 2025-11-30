import React from "react";
import SectionHeader from "../common/SectionHeader";
import { o7AboutDetails } from "@/data/o7";

export default function AboutDetails() {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <SectionHeader
              align="center"
              eyebrow="Présentation détaillée"
              title="Bloc de présentation en placeholders"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique lorem ut dui dignissim, vitae porta nisi hendrerit."
            >
              <div className="mt--10">
                {o7AboutDetails.map((paragraph, index) => (
                  <p key={index} className="description b1">
                    {paragraph}
                  </p>
                ))}
              </div>
            </SectionHeader>
          </div>
        </div>
      </div>
    </div>
  );
}
