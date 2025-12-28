"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <>
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
                  objectPosition: "center 35%",
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Overlay sombre fixe */}
        <div className="o7-hero-overlay" />

        {/* Titre uniquement dans le slider */}
        <div className="o7-hero-content-safe">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="o7-hero-text">
                  <h1 className="title">O7 Digital Group Holding</h1>
                  <p className="subtitle-corporate">
                    Groupe international d'infogérance, d'infrastructures IT et de solutions métiers
                  </p>
                  <div className="button-group mt--40">
                    <Link 
                      className="btn-default btn-large"
                      href="/nos-solutions"
                    >
                      Nos Solutions
                    </Link>
                    <Link 
                      className="btn-default btn-large btn-border"
                      href="/presence-internationale"
                    >
                      Présence internationale
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Flèche de scroll */}
      <div 
        className="o7-scroll-indicator"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <i className="feather-chevron-down" />
      </div>
    </div>
    </>
