import React from "react";

const keyActivities = [
  {
    id: 1,
    icon: "feather-server",
    title: "Infogérance & Services Managés",
    description: "Gestion 24/7 des infrastructures IT critiques pour sites industriels et bureaux internationaux. Supervision proactive, maintenance préventive et support multilingue.",
  },
  {
    id: 2,
    icon: "feather-cloud",
    title: "Infrastructure IT & Cloud",
    description: "Conception et déploiement d'infrastructures on-premise, cloud et hybrides. Solutions hautement disponibles avec nos partenaires IBM, Fujitsu et Google Cloud.",
  },
  {
    id: 3,
    icon: "feather-database",
    title: "Solutions Métiers & ERP",
    description: "Intégration de systèmes métiers critiques (ERP, MES, WMS). Expertise sectorielle industrie et distribution avec IBM Maximo, SAP et solutions spécialisées.",
  },
  {
    id: 4,
    icon: "feather-trending-up",
    title: "Conseil & Transformation IT",
    description: "Audit d'infrastructure, roadmap de modernisation et accompagnement de transformations digitales pour groupes internationaux multi-sites.",
  },
];

export default function KeyActivities() {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Nos Activités</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Solutions IT pour grands comptes
              </h2>
              <p className="description b1">
                Services d'infogérance, d'infrastructure et de solutions métiers 
                pour entreprises internationales exigeantes.
              </p>
            </div>
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {keyActivities.map((activity, index) => (
            <div
              className="col-lg-6 col-md-6 col-sm-12 col-12"
              key={activity.id}
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={(index + 1) * 100}
            >
              <div className="service service__style--1 bg-color-blackest radius mt--25">
                <div className="icon">
                  <i className={activity.icon} />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    {activity.title}
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
