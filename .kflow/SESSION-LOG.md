# LA HAUT V2 — Session Log

> Historique chronologique de chaque session de travail.
> Une entrée par session, de la plus récente à la plus ancienne.

---

## S05 — 2026-05-17 (nettoyage + captures client)

**Objectif** : Retirer les prix fixes, ajouter lightbox, préparer la présentation client

### Réalisé
- Grille tarifaire complète supprimée de `entretien.html`
- Prix fixes sous fiches prestations supprimés (8–14€/ml, 12–20€/m², 250–400€)
- Tarif 400€/journée supprimé de `zinguerie.html` (section B2B stats)
- Lightbox JS ajoutée (`js/main.js` + `css/style.css`) — clic sur image → overlay plein écran
- Titre "Ce que je fais sur cordes" → **"Chantiers réalisés"** sur `entretien.html`
- 6 captures PNG desktop 1280px générées via Chrome headless dans `C:\Users\matlocal\Desktop\LAHAUT_Presentation\`

### État des pages
| Page | Statut |
|---|---|
| index.html | ✅ |
| entretien.html | ✅ (prix retirés, titre corrigé) |
| zinguerie.html | ✅ (400€/j retiré) |
| contrats.html | ✅ |
| realisations.html | ✅ |
| contact.html | ✅ |

---

## S04 — 2026-05-17 (vérification visuelle + correctifs)

**Objectif** : Valider le rendu de la DA fusion dans le navigateur, corriger les résidus

### Réalisé
- Tour complet des 6 pages sur `http://lahaut.local` avec screenshots
- Confirmé : hero navy + beige body + orange CTAs + Inter/JetBrains Mono → rendu correct partout
- **Fix 1** — inline styles sur les contrat-cards de `index.html` supprimés, remplacés par règle CSS `.section--blue .contrat-card` dans `style.css`
- **Fix 2** — classe `active` sur le bouton CTA de la nav dans `contact.html` supprimée (écrasait l'orange)
- Sections avant/après, features strip, filtres réalisations : tous validés

### État des pages
| Page | Statut |
|---|---|
| index.html | ✅ |
| entretien.html | ✅ |
| zinguerie.html | ✅ |
| contrats.html | ✅ |
| realisations.html | ✅ |
| contact.html | ✅ (bug nav CTA corrigé) |

---

## S01 — 2026-05-17

**Durée estimée** : ~1h  
**Objectif** : Poser les bases du projet, lancer le site local

### Réalisé
- Analyse du site V1 en ligne (haut.la) et lecture de l'audit stratégique complet
- Décision stack : HTML/CSS/JS pur (pas de WordPress ni framework)
- Création structure dossiers `lahaut-v2/`
- Copie et renommage de 40 photos dans `images/` (noms propres, sans espaces ni accents)
- `css/style.css` — Design system complet : palette, typo, tous les composants, responsive
- `index.html` — Homepage : hero, deux univers (Pôle A/B), avant/après, teaser contrats, trust strip, footer
- Fichiers MD projet : `ARCHITECTURE.md`, `ROADMAP.md`, `CONTENU.md`, `.kflow/`
- Installation Node.js LTS via winget
- Script `start.bat` pour lancer le serveur local (`http://localhost:3000`)

### Décisions prises
- HTML pur (pas de WordPress) — plus rapide à livrer pour un artisan solo
- Pas de stock photos — uniquement photos personnelles de chantier
- Orange `#D96A2A` réservé strictement aux CTAs
- Bifurcation homepage : deux cards visuelles cliquables dès le premier scroll

### En attente / prochain
- Tester chaque page sur `http://lahaut.local`
- Ajuster les textes et images selon les retours de Benoit
- Connecter le formulaire à un vrai service d'envoi (FormSpree ou Netlify Forms)

---

## S02 — 2026-05-17 (suite S01)

**Objectif** : Finir toutes les pages + configurer lahaut.local

### Réalisé
- `entretien.html` — Page Pôle A complète : arguments cordiste, grille tarifaire, 6 fiches prestations, CTA
- `zinguerie.html` — Page Pôle B complète : 6 fiches travaux, section B2B sous-traitance 400€/j, réalisations zinc
- `contrats.html` — 3 formules (Essentiel / Sérénité / Intégral), tableau comparatif, FAQ 6 questions, formulaire
- `realisations.html` — Galerie filtrée 16 chantiers (7 catégories), filtres JS fonctionnels
- `contact.html` — Formulaire multi-étapes 3 étapes, sélecteur de type, zone d'intervention par département
- `js/main.js` — Burger mobile, FAQ accordion, filtres galerie, formulaire multi-étapes, params URL
- **`lahaut.local` configuré** : hosts file modifié + `route.lahaut.local.conf` dans le routeur Local WP
- Node.js installé, `start.bat` créé

### Pour voir le site
1. Ouvrir **Local WP** (le routeur nginx doit tourner)
2. Double-cliquer sur `start.bat` dans `lahaut-v2/`
3. Aller sur **http://lahaut.local**

---

## S03 — 2026-05-17 (refonte DA)

**Objectif** : Aligner la direction artistique sur celle du site V1 en ligne (haut.la)

### Réalisé
- Inspection du site live haut.la via Chrome extension + extraction des couleurs/polices exactes via JS injecté (computed styles)
- **Système V1 identifié** :
  - Fond : `#0A0A0A` (body), `#111111` (sections alt)
  - Surfaces cards : `rgba(255,255,255,0.04)` + border `rgba(255,255,255,0.07)`
  - Texte : `#E5E5E5` (body), `#A3A3A3` (muted), `#737373` (faint), `#525252` (mono labels)
  - Accent unique : **cyan/sky `#27AAE1`** (boutons, liens, icônes, badges)
  - Polices : **Inter** partout + **JetBrains Mono** pour labels uppercase tracked
- `css/style.css` — Réécriture complète du design system en gardant tous les class names (HTML pas touché)
- Import Google Fonts (Inter + JetBrains Mono) en haut du CSS
- Composants rendus dans le nouveau langage : hero all-caps, pills outline, cards subtiles avec hover, contrats avec carte centrale glowing cyan, mobile sticky CTA bar
- Configuration nginx standalone validée (port 80, `lahaut.local`, charset utf-8)
- Test visuel des 6 pages : homepage, entretien, contact OK

### Décisions
- Pas de toucher au HTML — uniquement le CSS, pour préserver le travail de structure et permettre une réversion facile
- Accent unique (cyan) au lieu de la double palette V2 (bleu + orange) → plus cohérent avec V1
- Garde la stat strip avec gros chiffres mono (+5 ANS, RC PRO, etc.) en bas

### En attente
- Adapter les contenus textuels avec Benoit si besoin
- Connecter formulaire à FormSpree
