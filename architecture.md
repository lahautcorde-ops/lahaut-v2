# LA HAUT V2 — Architecture

> Site vitrine de Benoit Brient, couvreur-cordiste en Île-de-France.
> V2 locale en HTML/CSS/JS pur — aucune dépendance, s'ouvre directement dans le navigateur.
> Production : haut.la

---

## Structure des fichiers

```
lahaut-v2/
├── index.html              # Homepage — bifurcation Pôle A / Pôle B
├── entretien.html          # Pôle A — Entretien sur cordes + grille tarifaire
├── zinguerie.html          # Pôle B — Couverture & Zinguerie + sous-traitance B2B
├── contrats.html           # Contrats d'entretien — 3 formules (NOUVEAU)
├── realisations.html       # Galerie avant/après filtrée par catégorie
├── contact.html            # Devis & Contact — formulaire multi-étapes contextuel
│
├── css/
│   └── style.css           # Design system complet (variables, composants, responsive)
│
├── js/
│   └── main.js             # Filtres galerie + FAQ accordion + formulaire multi-étapes
│
├── images/                 # 40 photos copiées et renommées (voir liste ci-dessous)
│
├── ARCHITECTURE.md         # Ce fichier
├── ROADMAP.md              # Avancement + historique sessions
└── CONTENU.md              # Contenus textes, tarifs, infos métier
```

---

## Navigation

```
[ LA HAUT ]  |  Entretien sur cordes  |  Couverture & Zinc  |  Contrats annuels  |  Réalisations  |  [ Demander un devis ]
```

5 entrées principales. "Demander un devis" = CTA orange en barre de nav.

---

## Design System (`css/style.css`)

### Palette
| Variable | Hex | Usage |
|----------|-----|-------|
| `--beige` | `#F0EDE8` | Fond principal (Pôle Zinc) |
| `--blue-deep` | `#1B3F6E` | Fond nav, hero, sections Pôle Cordes |
| `--blue-mid` | `#2A5FA0` | Accents, hover |
| `--blue-light` | `#5B8EC4` | Labels, borders actives |
| `--blue-pale` | `#D4E4F5` | Fond insight boxes |
| `--orange` | `#D96A2A` | **CTAs uniquement** — boutons d'action |
| `--green` | `#2E7D52` | Checkmarks, labels "Après" |
| `--text` | `#1a1a1a` | Texte courant |
| `--text-muted` | `#5a5a5a` | Texte secondaire |

### Typographie
- **Titres / corps** : Georgia (serif)
- **Labels, chiffres, codes** : Courier New (monospace)
- **UI (nav, boutons)** : system-ui (sans-serif)

### Composants disponibles
- `.btn` `.btn--orange` `.btn--outline-white` `.btn--outline-blue` `.btn--blue` `.btn--lg` `.btn--sm`
- `.nav` `.nav-logo` `.nav-links` `.nav-link` `.nav-link--cta` `.nav-burger` `.nav-mobile`
- `.hero` `.hero-bg` `.hero-blob-1/2` `.hero-content` `.hero-ctas` `.hero-trust`
- `.page-hero` `.page-hero--blue` `.page-hero--beige`
- `.universe-card` `.universe-card--cordes` `.universe-card--zinc`
- `.features-strip` `.feature-item`
- `.before-after-grid` `.ba-card` `.ba-images` `.ba-label--avant/apres`
- `.tarif-wrap` `.tarif-table` `.tarif-price`
- `.prestations-grid` `.presta-card`
- `.contrats-grid` `.contrat-card` `.contrat-card--star` `.contrat-badge`
- `.galerie-grid` `.galerie-filters` `.filter-btn`
- `.arguments-grid` `.argument-card`
- `.b2b-section` `.b2b-stats`
- `.faq-list` `.faq-item` `.faq-q` `.faq-a`
- `.form-wrap` `.form-steps` `.form-panel` `.form-group` `.type-selector`
- `.cta-band` `.trust-strip` `.insight` `.section-heading`
- `.footer` `.footer-grid` `.footer-bottom`

---

## Images disponibles (`images/`)

| Fichier | Catégorie | Usage prévu |
|---------|-----------|-------------|
| `hero-cordiste.jpg` | Présentation | Hero homepage (fond) |
| `nettoyage-1 à 7.jpg` | Nettoyage | Page entretien, galerie |
| `demoussage-1.jpg` | Démoussage | Page entretien, galerie |
| `zinc-1 à 4.jpg` | Zinguerie | Page zinc, galerie |
| `zinc-5.webp` | Zinguerie | Page zinc |
| `velux-1 à 3.jpg` | Velux | Page zinc, galerie |
| `lucarne-1 à 3.jpg` | Lucarnes | Page zinc, galerie |
| `ardoises-1/2.jpg` | Ardoises | Page zinc, galerie |
| `cheminee-1/2.jpg` | Cheminée | Page zinc, galerie |
| `gouttieres-1/2.jpg` | Gouttières | Page entretien, galerie |
| `securite-1/2.jpg` | Mise en sécurité | Page entretien, galerie |
| `ravalement-avant-1/2.jpg` | Ravalement | Avant/après homepage + galerie |
| `ravalement-apres-1/2.jpg` | Ravalement | Avant/après homepage + galerie |
| `ravalement-1 à 4.jpg` | Ravalement | Page zinc, galerie |
| `anti-pigeon-1/2.jpg` | Anti-pigeon | Page entretien, galerie |
| `reparation-1.jpg` | Réparation | Page entretien |
| `isolation-1.jpg` | Isolation | Page zinc |

---

## Stratégie des deux pôles

### Pôle A — Entretien sur cordes
- **Cible** : Syndics, particuliers, associations
- **Ambiance** : fond bleu profond, "technique, rapide, fiable"
- **Arguments clés** : sans échafaudage, 48h, tarifs visibles
- **Contenu central** : grille tarifaire + contrats annuels

### Pôle B — Couverture & Zinguerie
- **Cible** : Entreprises couverture, maîtres d'œuvre, syndics (gros travaux)
- **Ambiance** : fond beige chaud, "artisanat, savoir-faire, patrimoine"
- **Arguments clés** : spécialiste zinc DTU 40.41, sous-traitance 400€/j
- **Contenu central** : fiche technicité + proposition B2B

---

## Décisions techniques

- **HTML/CSS/JS pur** — pas de build step, pas de framework
- **Responsive** : breakpoints à 960px et 640px
- **Fonts** : Georgia + Courier New (système, pas de chargement réseau)
- **Images** : lazy loading partout (`loading="lazy"`)
- **Formulaire** : multi-étapes en JS pur, pas de backend (mailto: ou FormSpree en prod)
