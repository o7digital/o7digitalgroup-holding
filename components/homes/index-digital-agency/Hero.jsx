"use client";

import { NextArrow, PrevArrow } from "@/components/common/SliderArrows";
import { o7HeroSlides } from "@/data/o7";
import Slider from "react-slick";

export default function Hero() {
  const options = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider
      {...options}
      className="rainbow-testimonial-area slider-style-4 slider-activation slider-dot rainbow-slick-dot rainbow-slick-arrow"
    >
      {o7HeroSlides.map((slider) => (
        <div
          key={slider.id}
          className={`single-rainbow-slider height-950 slider-bg-image bg-overlay ${slider.bgImageClass} d-flex align-items-center`}
        >
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-7">
                <div className="inner text-left">
                  <h1 className="title">{slider.title}</h1>
                  <p className="description">{slider.description}</p>
                  <div className="button-group mt--30">
                    <a
                      className="btn-default"
                      href="/contact"
                    >
                      CTA placeholder
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
