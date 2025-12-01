"use client";
import React from "react";
import Link from "next/link";
import { footerSections } from "@/data/footerLinks";
export default function Footer2() {
  return (
    <footer className="rainbow-footer footer-style-default no-border">
      <div className="footer-top">
        <div className="container">
          <div className="row">
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
      <div className="copyright-area copyright-style-one no-border">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover">
                  <li>
                    <Link href={`/privacy-policy`}>Privacy Policy</Link>
                  </li>
                  <li>
                    <a href="#">Terms And Condition</a>
                  </li>
                  <li>
                    <Link href={`/contact`}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright-right text-center text-md-right">
                <p className="copyright-text">
                  © Doob {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
