export const languages = [
  { code:'en', label:'English' }, { code:'fr', label:'Français' },
  { code:'es', label:'Español' }, { code:'de', label:'Deutsch' },
  { code:'it', label:'Italiano' }, { code:'pt', label:'Português' }
];

export const localePath = (code) => code === 'en' ? '/' : `/${code}/`;

export const translations = {
  en:{meta:{title:'O7 Digital Group Holding — International Technology Group'},contact:{next:'NEXT',title:['Build what’s','next','with us.'],text:'Corporate opportunities, strategic partnerships, enterprise technology and international projects.'},footer:{tagline:['International technology group.','Build. Operate. Scale.'],rights:'All rights reserved.'}},
  fr:{meta:{title:'O7 Digital Group Holding — Groupe technologique international'},contact:{next:'PROCHAINE ÉTAPE',title:['Construisons','la suite','ensemble.'],text:'Opportunités corporate, partenariats stratégiques, technologies d’entreprise et projets internationaux.'},footer:{tagline:['Groupe technologique international.','Créer. Opérer. Accélérer.'],rights:'Tous droits réservés.'}},
  es:{meta:{title:'O7 Digital Group Holding — Grupo tecnológico internacional'},contact:{next:'SIGUIENTE',title:['Construyamos','lo próximo','juntos.'],text:'Oportunidades corporativas, alianzas estratégicas, tecnología empresarial y proyectos internacionales.'},footer:{tagline:['Grupo tecnológico internacional.','Construir. Operar. Escalar.'],rights:'Todos los derechos reservados.'}},
  de:{meta:{title:'O7 Digital Group Holding — Internationale Technologiegruppe'},contact:{next:'NÄCHSTER SCHRITT',title:['Gestalten wir','das Nächste','gemeinsam.'],text:'Unternehmerische Chancen, strategische Partnerschaften, Enterprise-Technologie und internationale Projekte.'},footer:{tagline:['Internationale Technologiegruppe.','Entwickeln. Betreiben. Skalieren.'],rights:'Alle Rechte vorbehalten.'}},
  it:{meta:{title:'O7 Digital Group Holding — Gruppo tecnologico internazionale'},contact:{next:'PROSSIMO',title:['Costruiamo','il futuro','insieme.'],text:'Opportunità corporate, partnership strategiche, tecnologia enterprise e progetti internazionali.'},footer:{tagline:['Gruppo tecnologico internazionale.','Costruire. Operare. Crescere.'],rights:'Tutti i diritti riservati.'}},
  pt:{meta:{title:'O7 Digital Group Holding — Grupo tecnológico internacional'},contact:{next:'PRÓXIMO',title:['Vamos construir','o futuro','juntos.'],text:'Oportunidades corporativas, parcerias estratégicas, tecnologia empresarial e projetos internacionais.'},footer:{tagline:['Grupo tecnológico internacional.','Construir. Operar. Escalar.'],rights:'Todos os direitos reservados.'}}
};
