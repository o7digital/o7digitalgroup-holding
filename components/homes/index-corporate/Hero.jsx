"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const listItems = [
  "Gouvernance stratégique et coordination internationale",
  "Structuration digitale de groupes internationaux",
  "Solutions corporate pour opérations globales",
];

const SLIDES = [
  "/assets/images/hero/holding1.png",
  "/assets/images/hero/holding2.png",
  "/assets/images/hero/holding3.png",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-area slider-style-1 variation-default height-850 o7-corporate-hero-slider">
      {/* Background Images avec transition */}
      <div className="o7-hero-backgrounds">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`o7-hero-bg ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}
      </div>
      
      {/* Overlay sombre */}
      <div className="o7-hero-overlay" />

      {/* Contenu */}
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

      {/* Indicateurs de slides */}
      <div className="o7-slide-indicators">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`o7-slide-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
