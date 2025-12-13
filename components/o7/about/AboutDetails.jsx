import React from "react";
import SectionHeader from "../common/SectionHeader";
import { o7AboutDetails } from "@/data/o7";

export default function AboutDetails({
  eyebrow = "Présentation",
  title = "Présentation",
  description = "",
  details = o7AboutDetails,
}) {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <SectionHeader
              align="center"
              eyebrow={eyebrow}
              title={title}
              description={description}
            >
              <div className="mt--10">
                {details.map((paragraph, index) => (
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
