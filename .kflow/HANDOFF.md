# LA HAUT V2 — Handoff

> État courant du projet + ce qu'il faut faire à la prochaine session.
> **Mettre à jour ce fichier à la fin de chaque session.**

---

## État au 2026-05-17 (fin S05)

### Nettoyage contenu + captures client
- ✅ Supprimé toute notion de prix fixe (grille tarifaire entretien, 400€/j zinguerie, prix /ml /m² sous fiches)
- ✅ Lightbox au clic sur les images (overlay JS, fermeture ESC / clic extérieur / ✕)
- ✅ Titre "Ce que je fais sur cordes" → "Chantiers réalisés" (entretien.html:90)
- ✅ 6 screenshots desktop 1280px sauvegardés dans `C:\Users\matlocal\Desktop\LAHAUT_Presentation\`
  - 01_homepage.png · 02_entretien.png · 03_zinguerie.png · 04_contrats.png · 05_realisations.png · 06_contact.png

### Prochaines étapes
- [ ] Connecter le formulaire à FormSpree ou Netlify Forms
- [ ] Mise en prod sur haut.la

---

## État au 2026-05-17 (fin S04)

### DA fusion validée visuellement
- ✅ Palette audit : beige `#F0EDE8`, bleu `#1B3F6E`, orange `#D96A2A` (CTAs strict)
- ✅ Typo V1 : Inter + JetBrains Mono, headings uppercase 800, labels mono 11.5px tracked
- ✅ 6 pages testées dans le navigateur, toutes cohérentes
- ✅ Inline styles contrat-cards supprimés → règles CSS `.section--blue .contrat-card`
- ✅ Bug nav CTA corrigé sur contact.html (classe `active` écrasait l'orange)

## État au 2026-05-17 (fin S03)

### DA refonte
- ✅ Design system aligné sur le V1 en ligne (haut.la) : fond `#0A0A0A`, accent cyan `#27AAE1`, Inter + JetBrains Mono
- ✅ Toutes les pages re-skinnées sans toucher au HTML (réécriture CSS uniquement)
- ✅ Visible et opérationnel sur `http://lahaut.local`

## État au 2026-05-17 (fin S01)

### Ce qui est fait et fonctionnel
- ✅ `css/style.css` — Design system complet, responsive
- ✅ `index.html` — Homepage complète, visible sur `http://localhost:3000`
- ✅ 40 images organisées dans `images/`
- ✅ Serveur local configuré (`npm start`)

### Ce qui est fait — site complet ✅
- ✅ `index.html` — Homepage
- ✅ `entretien.html` — Pôle A + grille tarifaire
- ✅ `zinguerie.html` — Pôle B + B2B sous-traitance
- ✅ `contrats.html` — 3 formules + FAQ + formulaire
- ✅ `realisations.html` — Galerie filtrée 16 chantiers
- ✅ `contact.html` — Formulaire multi-étapes
- ✅ `js/main.js` — Burger, FAQ, filtres, formulaire

### Ce qui reste (phase 2)
- [ ] Tester et ajuster sur `http://lahaut.local`
- [ ] Corriger les textes avec Benoit (tarifs, descriptions)
- [ ] Connecter le formulaire à FormSpree ou Netlify Forms
- [ ] Ajouter d'autres photos au fil des chantiers
- [ ] SEO : vérifier balises title/meta de chaque page
- [ ] Mise en prod sur haut.la (upload ou Netlify drop)

---

## Pour démarrer la prochaine session

1. Ouvrir **Local WP** (nécessaire pour le routeur nginx sur port 80)
2. Double-cliquer sur **`start.bat`** dans `lahaut-v2/` → démarre le serveur sur le port 10010
3. Ouvrir **http://lahaut.local** dans le navigateur
4. Lire ce fichier + `ROADMAP.md` pour reprendre où on en est
5. Continuer par `contrats.html` (priorité haute)

## Architecture locale (lahaut.local)

- Local WP router (nginx port 80) → lit `route.lahaut.local.conf` → forward vers `localhost:10010`
- `start.bat` → `npx serve . -l 10010` → sert les fichiers statiques de `lahaut-v2/`
- Hosts file → `lahaut.local` = `127.0.0.1` (déjà configuré, ne plus toucher)

## Points d'attention

- Le CSS est 100% prêt — ne pas le modifier sans raison
- Tous les composants sont documentés dans `ARCHITECTURE.md`
- Les textes et tarifs sont dans `CONTENU.md` — source de vérité
- Orange `#D96A2A` = CTAs uniquement (règle stricte)
