# SPÉCIFICATIONS IMAGES SLIDER — O7 DIGITAL GROUP HOLDING

## DIMENSIONS REQUISES

### Desktop
- **Largeur** : 1920 px
- **Hauteur** : 960 px
- **Ratio** : 2:1
- **Format** : JPG ou WebP (optimisé)
- **Poids max** : 300 KB par image

### Zone de sécurité (Safe Zone)
- **Horizontale** : 60% central (576px de marge de chaque côté)
- **Verticale** : 50% central (240px de marge en haut et bas)
- **Zone texte** : Centre de l'image, éviter les zones basses

## STYLE VISUEL

### Éléments à privilégier
✅ Architecture moderne et corporate
✅ Skyline de villes internationales (Londres, New York, Los Angeles, etc.)
✅ Bureaux modernes et design épuré
✅ Espaces corporate premium
✅ Tons sobres : gris, bleu, noir, blanc
✅ Ambiance professionnelle et internationale

### Éléments à éviter
❌ Visuels "startup" colorés
❌ Photos marketing génériques avec stock models
❌ Illustrations cartoon ou graphiques
❌ Personnes en gros plan
❌ Texte incrusté dans l'image
❌ Couleurs vives et flashy

## OVERLAY ET TRAITEMENT

- **Overlay sombre** : 60% d'opacité (déjà appliqué en CSS)
- **Contraste** : Assurer une bonne lisibilité du texte blanc
- **Filtre** : Légère désaturation recommandée pour ton sobre

## PROMPT RECOMMANDÉ POUR GEMINI

```
Generate a corporate, premium business image for an international holding company.
Dimensions: 1920x960 px, ratio 2:1.
Style: modern architecture, international business skyline, London or New York cityscape,
professional office spaces, sober corporate atmosphere, no text, no people close-up,
neutral tones (grey, blue, black, white), ultra-modern glass buildings.
Photorealistic, high-quality, professional photography style.
```

## IMAGES À GÉNÉRER

### Image 1 : Londres Skyline
- Vue panoramique de la City de Londres
- Buildings modernes (Gherkin, Shard, etc.)
- Ambiance crépusculaire ou nuit
- Tons bleu foncé / gris

### Image 2 : Architecture Corporate
- Immeuble de bureaux moderne en verre
- Perspective low-angle
- Ciel dégagé ou nuages
- Tons gris / blanc

### Image 3 : International Business (optionnel)
- Vue aérienne de gratte-ciels
- Ambiance corporate mondiale
- Éclairage professionnel
- Tons neutres premium

## NOMMAGE DES FICHIERS

- `o7-hero-london-skyline.jpg`
- `o7-hero-corporate-architecture.jpg`
- `o7-hero-business-international.jpg`

## INTÉGRATION

Les images doivent être placées dans :
```
/public/assets/images/bg/
```

Puis référencées dans le Hero component ou via CSS :
```css
.bg_image--o7-1 {
    background-image: url('/assets/images/bg/o7-hero-london-skyline.jpg');
}
```

## OPTIMISATION

- Compression : utiliser TinyPNG ou ImageOptim
- Format WebP en priorité avec fallback JPG
- Lazy loading pour performances
- Responsive : prévoir versions mobile si nécessaire (1200x600)

---

**Note** : Ces specs garantissent un rendu premium et corporate, avec texte 100% visible et zone safe respectée.
