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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="o7-corporate-hero-slider">
      {/* Images avec Next.js Image optimisé */}
      <div className="o7-hero-images-container">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`o7-hero-image-wrapper ${index === currentSlide ? "active" : ""}`}
          >
            <Image
              src={slide}
              alt={`O7 Digital Group Holding - Slide ${index + 1}`}
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Overlay sombre fixe */}
      <div className="o7-hero-overlay" />

      {/* Zone safe - Contenu texte */}
      <div className="o7-hero-content-safe">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="o7-hero-text">
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    O7 DIGITAL GROUP HOLDING
                  </span>
                </h4>
                <h1 className="title">Holding Internationale Digital</h1>
                <ul className="list-icon">
                  {listItems.map((item, index) => (
                    <li key={index}>
                      <span className="icon">
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
