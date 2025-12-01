import React from "react";
import SectionHeader from "../common/SectionHeader";
import { o7HomeIntro } from "@/data/o7";

export default function HomeIntro() {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-6">
            <SectionHeader
              align="left"
              eyebrow={o7HomeIntro.eyebrow}
              title={o7HomeIntro.title}
              description={o7HomeIntro.description}
            >
              <div className="mt--20">
                {o7HomeIntro.bullets.map((bullet, index) => (
                  <p key={index} className="b1 mb--10">
                    {bullet}
                  </p>
                ))}
              </div>
            </SectionHeader>
          </div>
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <div className="service service__style--1 bg-color-blackest radius text-left rbt-border">
              <div className="content">
                <h4 className="title w-600">Notre approche</h4>
                <p className="description b1 mb--0">
                  Nous développons des solutions modernes, rapides et évolutives, basées sur des technologies fiables et adaptées à vos objectifs. Chaque projet s'appuie sur une architecture propre, sécurisée et orientée performance.
                </p>
              </div>
            </div>
            <div className="service service__style--1 bg-color-blackest radius text-left rbt-border mt--20">
              <div className="content">
                <h4 className="title w-600">Domaines d'expertise</h4>
                <p className="description b1 mb--0">
                  Stratégie digitale, développement web (React, Next.js, Astro), CMS headless, IA et automatisation, SEO technique, infogérance et support. Un accompagnement complet, du diagnostic à la mise en production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
