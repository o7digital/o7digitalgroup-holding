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
              <div
                className={`service service__style--1 icon-circle-style ${
                  service.align || "text-center"
                }`}
              >
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
                  {service.points && (
                    <ul className="list-style--1 text-start mt--15 mb--0">
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {service.image && (
                  <div className="image mt--20">
                    <img
                      src={service.image.src}
                      alt={service.image.alt}
                      className="w-100 radius"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
