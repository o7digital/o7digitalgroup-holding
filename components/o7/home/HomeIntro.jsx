import React from "react";
import SectionHeader from "../common/SectionHeader";
import { o7HomeIntro } from "@/data/o7";

export default function HomeIntro({
  data = o7HomeIntro,
  approachTitle = "Notre approche",
  approachText = "Nous développons des solutions modernes, rapides et évolutives, basées sur des technologies fiables et adaptées à vos objectifs. Chaque projet s'appuie sur une architecture propre, sécurisée et orientée performance.",
  expertiseTitle = "Domaines d'expertise",
  expertiseText = "Stratégie digitale, développement web (React, Next.js, Astro), CMS headless, IA et automatisation, SEO technique, infogérance et support. Un accompagnement complet, du diagnostic à la mise en production.",
}) {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-6">
            <SectionHeader
              align="left"
              eyebrow={data.eyebrow}
              title={data.title}
              description={data.description}
            >
              <div className="mt--20">
                {data.bullets.map((bullet, index) => (
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
                <h4 className="title w-600">{approachTitle}</h4>
                <p className="description b1 mb--0">{approachText}</p>
              </div>
            </div>
            <div className="service service__style--1 bg-color-blackest radius text-left rbt-border mt--20">
              <div className="content">
                <h4 className="title w-600">{expertiseTitle}</h4>
                <p className="description b1 mb--0">{expertiseText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
