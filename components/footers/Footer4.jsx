"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerSections } from "@/data/footerLinks";
export default function Footer4() {
  return (
    <footer className="rainbow-footer footer-style-default footer-style-1">
      <div
        className="footer-top"
        style={{ paddingTop: "32px", paddingBottom: "8px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="rainbow-footer-widget">
                <div className="logo">
                  <Link href={`/`}>
                    <Image
                      className="logo-light"
                      alt="Corporate Logo"
                      src="/assets/images/o7digital-logo.png"
                      width={288}
                      height={100}
                    />
                    <Image
                      className="logo-dark"
                      alt="Corporate Logo"
                      src="/assets/images/o7digital-logo.png"
                      width={288}
                      height={100}
                    />
                  </Link>
                </div>
                <h3 className="text-big">
                  Solutions IT & infrastructure pour groupes industriels internationaux.
                </h3>
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                <div className="rainbow-footer-widget">
                  <h4 className="title">{section.title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
