# LA HAUT V2 — Roadmap

> Plan de la refonte + état d'avancement + historique des sessions de travail.

---

## Historique des sessions

| Session | Date | Travail réalisé |
|---------|------|-----------------|
| S01 | 2026-05-17 | Analyse V1 en ligne + audit. Choix stack (HTML pur). Création structure dossiers. Copie 40 images. `css/style.css` complet. `index.html` homepage. Fichiers MD projet. |

---

## État d'avancement

### Fichiers projet
- [x] Structure dossiers `lahaut-v2/`
- [x] 40 images copiées et renommées dans `images/`
- [x] `css/style.css` — Design system complet
- [x] `ARCHITECTURE.md`
- [x] `ROADMAP.md`
- [x] `CONTENU.md`

### Pages du site
- [x] `index.html` — Homepage : hero, deux univers, avant/après, teaser contrats, trust strip, footer
- [ ] `entretien.html` — Pôle A : page hero, arguments cordiste, grille tarifaire, fiches prestations, CTA
- [ ] `zinguerie.html` — Pôle B : spécialiste zinc, fiches (Velux, cheminée, ardoises, gouttières), B2B sous-traitance
- [ ] `contrats.html` — 3 formules (Essentiel / Sérénité / Intégral), FAQ contractuelle, formulaire syndic
- [ ] `realisations.html` — Galerie filtrée (Zinc / Démoussage / Gouttières / Ravalement / Cheminée / Velux)
- [ ] `contact.html` — Sélecteur de besoin → formulaire contextuel + tél direct + zone intervention
- [ ] `js/main.js` — Burger menu, FAQ accordion, filtres galerie, formulaire multi-étapes

---

## Plan détaillé par page

### `entretien.html` — Pôle A
1. Page hero (fond bleu) — "Sans échafaudage. Rapide. Fiable." + CTA devis + tél
2. Arguments cordiste : 3 cards (Sans voirie, Réponse 48h, Rapport photo)
3. Grille tarifaire visible (tableau 6 lignes)
4. Fiches prestations (6 cards avec photos) :
   - Nettoyage & débouchage gouttières
   - Démoussage + traitement hydrofuge
   - Inspection toiture + rapport PDF
   - Mise en sécurité
   - Anti-pigeon
   - Petites réparations
5. Insight "Pourquoi les cordistes coûtent moins cher"
6. CTA band "Demander un devis rapide"

### `zinguerie.html` — Pôle B
1. Page hero (fond beige) — "Couverture zinc, DTU 40.41" + CTA devis
2. Expertise zinc : 3 arguments (spécialiste zinc, expérience, rapport écrit)
3. Fiches travaux (6 cards avec photos) :
   - Réfection toiture zinc joint debout
   - Velux & fenêtres de toit
   - Cheminée & solins
   - Lucarnes & ardoises
   - Remplacement gouttières & chéneaux
   - Ravalement & enduit traditionnel
4. Section B2B sous-traitance (fond bleu deep) : 400€/j, disponibilité, SIRET AE
5. CTA band "Demande de devis chantier"

### `contrats.html` — Nouveau
1. Accroche "Votre toiture entretenue chaque année, sans y penser"
2. Argument rapport PDF (valeur pour AG syndic)
3. 3 formules : Essentiel / Sérénité ⭐ / Intégral
4. Ce qui est inclus (tableau comparatif)
5. Section dédiée syndics (tarif copropriété, plusieurs bâtiments)
6. FAQ contractuelle (6 questions)
7. Formulaire de démarrage de contrat

### `realisations.html`
1. Filtres : Tous / Zinc & Ardoises / Démoussage / Gouttières / Ravalement / Cheminée / Velux
2. Grille de cards avant/après
3. Chaque card : catégorie + description + localisation (arrondissement)

### `contact.html`
1. Sélecteur de besoin : Entretien rapide / Travaux couverture / Contrat annuel
2. Formulaire multi-étapes (3 étapes) selon choix
3. Tél direct 06 59 22 75 69 (toujours visible)
4. Zone d'intervention : Paris + liste communes IDF

---

## Priorités de contenu (audit)

| Priorité | Item |
|----------|------|
| 🔴 URGENT | Grille tarifaire visible sur entretien.html |
| 🔴 URGENT | Page contrats d'entretien avec 3 formules |
| 🔴 URGENT | Bifurcation visuelle claire dès la homepage |
| 🟠 P2 | Photos perso avant/après sur toutes les pages |
| 🟠 P2 | Formulaire contextualisé selon type de besoin |
| 🟠 P2 | Galerie réalisations avec filtres |
| 🟡 P3 | Section B2B sous-traitance |
| 🟡 P3 | SEO par page (balises title, meta, H1) |

---

## Notes & décisions

- **Pas de WordPress** — site statique, plus rapide à livrer et maintenir pour un artisan solo
- **Pas de stock photos** — uniquement photos personnelles de chantier
- **Orange `#D96A2A` réservé aux CTAs** — cohérence visuelle stricte
- **Rapport PDF annuel** = argument commercial central pour les syndics (renouvellement contrat)
- Pour la mise en prod : hébergement simple (Netlify drop, OVH, etc.) — HTML pur = 0 config serveur
