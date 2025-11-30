import React from "react";
import SectionHeader from "../common/SectionHeader";
import { o7HomeServices } from "@/data/o7";

export default function HomeServices() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              eyebrow="Services phares"
              title="6 services principaux en placeholders"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nisi ac nibh porttitor volutpat."
            />
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {o7HomeServices.map((service, index) => (
            <div
              key={service.title}
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={600}
              data-sal-delay={index * 50}
            >
              <div className="service service__style--1 icon-circle-style text-center">
                <div className="icon">
                  <i className={service.iconClass} />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">{service.title}</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {service.description}
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
