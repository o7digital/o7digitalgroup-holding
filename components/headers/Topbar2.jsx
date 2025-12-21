"use client";
import { socialLinks } from "@/data/socials";
import React, { useRef } from "react";

export default function Topbar2() {
  const topbarRef = useRef();
  const closeTopbar = () => {
    topbarRef.current.classList.add("deactive");
  };
  return (
    <div className="header-top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="header-left">
              <p>
                <span className="corporate-tagline">
                  Holding Internationale Digital
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="header-right">
              <div className="address-content">
                <p>
                  <i className="feather-map-pin" />
                  <span>Londres, UK</span>
                </p>
                <p>
                  <i className="feather-mail" />
                  <span>
                    <a href="mailto:contact@o7digitalgroup.com">contact@o7digitalgroup.com</a>
                  </span>
                </p>
              </div>
              <div className="social-icon-wrapper">
                <ul className="social-icon social-default icon-naked">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i className={link.iconClass} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
