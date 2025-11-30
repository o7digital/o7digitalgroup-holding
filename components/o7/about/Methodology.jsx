import React from "react";
import SectionHeader from "../common/SectionHeader";
import { o7Methodology } from "@/data/o7";

export default function Methodology() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              eyebrow="Méthodologie / Mission / Vision"
              title="Piliers en placeholders"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl et neque accumsan faucibus."
            />
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {o7Methodology.map((item, index) => (
            <div
              key={item.title}
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={650}
              data-sal-delay={index * 50}
            >
              <div className="service service__style--1 bg-color-blackest radius text-left rbt-border">
                <div className="content">
                  <h4 className="title w-600 mb--10">{item.title}</h4>
                  <p className="description b1 mb--0">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
