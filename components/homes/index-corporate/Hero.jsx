import React from "react";
const listItems = [
  "Gouvernance stratégique et coordination internationale",
  "Structuration digitale de groupes internationaux",
  "Solutions corporate pour opérations globales",
];

export default function Hero() {
  return (
    <div
      className="slider-area slider-style-1 variation-default height-850 bg_image bg_image--5 o7-corporate-hero"
      data-black-overlay={4}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h4 className="subtitle mb--20">
                <span className="theme-gradient">
                  O7 DIGITAL GROUP HOLDING
                </span>
              </h4>
              <h1 className="title display-one mb--30">Holding Internationale Digital</h1>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <ul className="list-icon">
                    {listItems.map((item, index) => (
                      <li key={index}>
                        <span className="icon background-transparent">
                          <i className="feather-check" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
