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
          <div className="row align-items-start">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="rainbow-footer-widget">
                <div className="logo">
                  <Link href={`/`}>
                    <Image
                      className="logo-light"
                      alt="Corporate Logo"
                      src="/assets/images/o7digital-logo.png"
                      width={240}
                      height={83}
                    />
                    <Image
                      className="logo-dark"
                      alt="Corporate Logo"
                      src="/assets/images/o7digital-logo.png"
                      width={240}
                      height={83}
                    />
                  </Link>
                </div>
                <p className="description b3 mt--20">
                  Solutions IT & infrastructure pour groupes industriels internationaux.
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">Services</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li><Link href="/conseil">Conseil</Link></li>
                    <li><Link href="/support">Support</Link></li>
                    <li><Link href="/web-solutions">Web Solutions</Link></li>
                    <li><Link href="/design-digital">Design Digital</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">Produits</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li><Link href="/produits/ibm">IBM</Link></li>
                    <li><Link href="/produits/sectigo">Sectigo</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">Partners</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li><Link href="/partners/ibm">IBM</Link></li>
                    <li><Link href="/partners/fujitsu">Fujitsu</Link></li>
                    <li><Link href="/partners/sectigo">Sectigo</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">Legal</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li><Link href="/privacy-policy">Politique De Confidentialité</Link></li>
                    <li><Link href="/cgu">CGU</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-1 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">Contact</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
