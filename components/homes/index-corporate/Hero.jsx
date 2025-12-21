import React from "react";
const listItems = [
  "Gouvernance stratégique et coordination internationale",
  "Structuration digitale de groupes internationaux",
  "Solutions corporate pour opérations globales",
];

export default function Hero() {
  return (
    <div
      className="slider-area slider-style-1 variation-default height-950 bg_image bg_image--5"
      data-black-overlay={2}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-left">
              <h4 className="subtitle">
                <span className="theme-gradient">
                  O7 DIGITAL GROUP HOLDING
                </span>
              </h4>
              <h1 className="title display-one">Holding Internationale Digital</h1>
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
  );
}
