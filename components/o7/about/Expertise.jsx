import React from "react";
import SectionHeader from "../common/SectionHeader";
import { o7Expertise } from "@/data/o7";

export default function Expertise() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              eyebrow="Expertise"
              title="Expertise"
              description=""
            />
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {o7Expertise.map((item, index) => (
            <div
              key={item.title}
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={650}
              data-sal-delay={index * 50}
            >
              <div className="service service__style--1 icon-circle-style text-center">
                <div className="icon">
                  <i className="feather-star" />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">{item.title}</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
