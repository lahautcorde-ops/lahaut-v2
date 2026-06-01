# LA HAUT V2 — Project Brief

> Site vitrine de Benoit Brient, couvreur-cordiste en Île-de-France.
> Refonte complète de haut.la — version locale de développement.

---

## Contexte

La V1 (haut.la) souffre d'un problème fondamental : elle mélange deux cibles totalement différentes (syndics/particuliers pour l'entretien, et entreprises couverture pour la sous-traitance) sans les distinguer. Résultat : ni l'un ni l'autre ne se reconnaît immédiatement dans l'offre.

## Objectif V2

Une seule marque **LA HAUT**, deux portes d'entrée distinctes dès la homepage.

### Pôle A — Entretien sur cordes
- Cible : syndics de copropriété, particuliers, associations
- Argument clé : sans échafaudage, intervention rapide, tarifs visibles, contrats annuels

### Pôle B — Couverture & Zinguerie  
- Cible : entreprises couverture, maîtres d'œuvre, syndics (gros travaux)
- Argument clé : spécialiste zinc DTU 40.41, sous-traitance cordiste 400€/j

## Stack technique

- **HTML / CSS / JS pur** — aucune dépendance, aucun framework, aucun CMS
- Serveur local : `npm start` → `http://localhost:3000`
- Déploiement : drag & drop sur Netlify ou upload OVH

## Infos métier

| Champ | Valeur |
|-------|--------|
| Contact | Benoit Brient |
| Tél | 06 59 22 75 69 |
| Email | lahaut.corde@gmail.com |
| SIRET | 813 062 031 00022 |
| Zone | Paris & Île-de-France |
| URL prod | haut.la |

## Pages à livrer

1. `index.html` — Homepage
2. `entretien.html` — Pôle A
3. `zinguerie.html` — Pôle B
4. `contrats.html` — Contrats annuels (nouveau)
5. `realisations.html` — Galerie avant/après
6. `contact.html` — Devis & Contact

## Docs projet

| Fichier | Rôle |
|---------|------|
| `ARCHITECTURE.md` | Structure, palette, composants |
| `ROADMAP.md` | Avancement + checklist |
| `CONTENU.md` | Textes, tarifs, FAQ |
| `.kflow/PROJECT-BRIEF.md` | Ce fichier |
| `.kflow/SESSION-LOG.md` | Historique des sessions |
| `.kflow/HANDOFF.md` | État courant + prochaine session |
