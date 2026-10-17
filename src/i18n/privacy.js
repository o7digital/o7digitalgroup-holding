// Legal identity and policy supplied by the site owner:
// https://www.o7digital.com/privacy-policy
// Hosting and site URL are adapted to this Vercel deployment.
const legal = {
  lang: 'fr',
  title: 'Mentions légales & Politique de confidentialité',
  eyebrow: 'MENTIONS LÉGALES / CONFIDENTIALITÉ',
  updated: 'Dernière mise à jour : 17 octobre 2026',
  intro: 'Le site O7 Digital Group est édité par O7 Digital Consulting SASU. Ces mentions présentent l’éditeur du site et les modalités de traitement de vos données personnelles.',
  sections: [
    ['Éditeur du site', [
      'O7 Digital Consulting SASU — Entreprise immatriculée au RCS de Paris.',
      'SIREN : 899 748 560 — SIRET : 899 748 560 00013.',
      'Siège social : 10 rue de Penthièvre, 75008 Paris – France.',
      'Email : info@o7digital-consulting.com — Site : https://www.o7digitalgroup.com.',
      'Directeur de la publication : Olivier Steineur.'
    ]],
    ['Hébergement', [
      'Ce site est hébergé par Vercel, Inc. — États-Unis. Site : https://vercel.com.',
      'Politique de confidentialité de l’hébergeur : https://vercel.com/legal/privacy-notice.'
    ]],
    ['Développement', ['Développé par O7 Digital Consulting, 10 rue de Penthièvre, 75008 Paris – France.']],
    ['Conditions d’utilisation', ['Le site www.o7digitalgroup.com est mis à disposition en l’état. Le visiteur reconnaît disposer des compétences techniques nécessaires pour l’utiliser et s’engage à l’utiliser conformément à la législation en vigueur. O7 Digital Consulting ne garantit pas l’absence totale d’erreurs et décline toute responsabilité en cas d’indisponibilité ou de dysfonctionnement.']],
    ['Propriété intellectuelle', ['L’intégralité du contenu du site (textes, images, logo, code, éléments graphiques) est protégée par le Code de la propriété intellectuelle. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation écrite préalable, est strictement interdite.']],
    ['Liens hypertextes', ['Le site peut contenir des liens pointant vers des ressources externes. O7 Digital Consulting n’exerce aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur disponibilité, leur contenu ou leur sécurité. La création de liens vers ce site nécessite une autorisation écrite préalable de l’éditeur.']],
    ['Cookies', ['Le site peut utiliser des cookies techniques ou statistiques. L’utilisateur peut refuser les cookies via les paramètres de son navigateur. Le refus peut altérer certaines fonctionnalités.']],
    ['Données personnelles – Données collectées', ['Nom, prénom, adresse email, téléphone, nom de l’entreprise et informations que vous transmettez lors d’une prise de contact.', 'Adresse IP et données de navigation : pages vues, type de navigateur, durée de visite. Aucune donnée sensible n’est collectée.']],
    ['Base légale du traitement', ['Le consentement pour les demandes de contact, l’intérêt légitime pour l’analyse du trafic et l’obligation légale pour les données comptables.']],
    ['Finalités du traitement', ['Répondre aux demandes, établir une relation commerciale ou informative, analyser la fréquentation du site, assurer son bon fonctionnement technique et respecter les obligations légales de conservation.', 'Les données ne sont jamais revendues.']],
    ['Destinataires des données', ['O7 Digital Consulting et les prestataires techniques nécessaires, notamment l’hébergeur Vercel. Aucun transfert non autorisé.']],
    ['Durée de conservation', ['Demandes de contact : 12 mois. Prospects / clients : 3 ans. Données comptables : 10 ans. Cookies : selon les règles du navigateur (13 mois recommandé).']],
    ['Sécurité', ['HTTPS, hébergement sécurisé, restrictions d’accès, surveillance et mises à jour techniques.']],
    ['Droits des utilisateurs', ['Vous disposez des droits d’accès, de rectification, de suppression, d’opposition, de portabilité et de limitation du traitement.', 'Pour exercer un droit, contactez : info@o7digital-consulting.com (réponse sous 30 jours).']],
    ['Transferts hors UE', ['Le recours à Vercel peut impliquer un traitement de données aux États-Unis. Les garanties applicables aux transferts sont décrites dans les engagements de protection des données de Vercel : https://vercel.com/legal/dpa.']],
    ['Modification de la politique', ['O7 Digital Consulting peut modifier ces mentions à tout moment. La version applicable est celle en ligne au moment de la consultation.']],
    ['Droit applicable', ['Le présent site est soumis au droit français. En cas de litige, compétence exclusive des tribunaux de Paris.']]
  ]
};

// The same French legal notice identifies the publisher on every language route.
export const privacy = Object.fromEntries(['fr', 'en', 'es', 'de', 'it', 'pt'].map(lang => [lang, legal]));
