# Site officiel de la Fondation Mbûrü

Site de la **Fondation Mbûrü** (Bangui, République centrafricaine) : présentation, programmes (Elles & Nous, Sara Savon, mentorat), actualités, candidatures en ligne et back-office.

« Mbûrü » veut dire palmier. Slogan : *Femme résiliente, femme debout !*

## Stack

- **Next.js 16** (App Router, Turbopack, Cache Components)
- **React 19**
- **Tailwind CSS 4** (utilitaires + design system CSS personnalisé)
- **TypeScript**
- **next/font** avec la police Poppins auto-hébergée
- **next/image** pour l'optimisation des images
- **Neon** (Postgres) avec **Drizzle ORM** pour les contenus, les demandes et le back-office

Les programmes, actualités et partenaires sont stockés en base et gérés depuis le back-office (`/admin`). Les formulaires de contact et de candidature enregistrent les demandes en base ; un lien WhatsApp reste proposé après l'envoi.

## Démarrage

1. Copiez `.env.example` en `.env.local` et renseignez les valeurs (chaîne de connexion Neon, secret de session).
2. Installez, créez les tables, chargez le contenu de départ et créez un administrateur :

```bash
npm install
npm run db:migrate                                   # crée les tables
npm run db:seed                                      # programmes, actualités, partenaires de départ
npm run admin:create -- prenom@exemple.org "Prénom Nom"  # demande le mot de passe (masqué)
npm run dev
```

Le site est disponible sur <http://localhost:3000>, le back-office sur <http://localhost:3000/admin>.

```bash
npm run build        # build de production (lit la base : DATABASE_URL requis)
npm start            # serveur de production
npm run lint         # ESLint
npm run db:generate  # nouvelle migration après une modification de src/db/schema.ts
npm run db:studio    # explorer la base dans le navigateur
```

## Back-office

- **Tableau de bord** : nouvelles demandes, contenus en ligne, derniers messages.
- **Programmes** : chaque programme en ligne apparaît sur l'accueil et la page Programmes.
- **Actualités** : rédaction, brouillons, date de publication, informations pratiques.
- **Partenaires** : bandeau défilant de l'accueil.
- **Médiathèque** : images téléversées (JPEG, PNG, WebP, 3 Mo max), stockées dans Postgres et servies par `/media/<id>`.
- **Candidatures / Messages** : étude des dossiers (à étudier, retenue, non retenue), note interne, export CSV.
- **Comptes** : ajout d'administrateurs, changement de mot de passe.

Sécurité : mots de passe hachés (scrypt), session signée dans un cookie `httpOnly`, contrôle dans `src/proxy.ts` puis à nouveau dans chaque page et action (`requireAdmin`). Les pages publiques sont mises en cache et rafraîchies dès qu'un contenu est modifié dans le back-office.

## Déploiement (Vercel)

Déclarez `DATABASE_URL`, `SESSION_SECRET` et `NEXT_PUBLIC_SITE_URL` dans les variables d'environnement du projet. Le build lit la base pour générer les pages statiques.

## Structure

```
src/app/(site)/        pages publiques (App Router)
  page.tsx             accueil
  a-propos/            présentation, valeurs, gouvernance
  nos-actions/         programmes et bénéficiaires
  programmes/          programmes et candidature
  actualites/          journal + pages d'article dynamiques
  soutenir/            don, mécénat, bénévolat
  credits/             crédits photo et licences
src/app/admin/         back-office (connexion, contenus, demandes, comptes)
src/app/media/[id]/    images téléversées depuis le back-office
src/components/        header, footer, hero, cartes, formulaires, UI
src/db/                schéma Drizzle et client Neon
src/lib/content.ts     lecture des contenus publics (mise en cache)
src/lib/auth/          mots de passe, session, contrôle d'accès
drizzle/               migrations SQL versionnées
scripts/               migration, contenu de départ, création d'administrateur
src/lib/site.ts        coordonnées et contenu éditorial
src/lib/credits.ts     crédits des photos d'illustration
public/images/         logo et visuels optimisés (WebP)
```

## Personnaliser le contenu

- **Formations, actualités, partenaires** : depuis le back-office `/admin`
- **Coordonnées, liens et textes fixes** : `src/lib/site.ts`
- **Logo** : `public/images/logo.png` (également utilisé pour l'icône du site)
- **Photos** : `public/images/*.webp` - pensez à mettre à jour `src/lib/credits.ts` et la page `/credits` si vous remplacez une image
- **URL publique** (SEO, sitemap) : variable d'environnement `NEXT_PUBLIC_SITE_URL`
- **Réseaux sociaux** : lien Facebook dans `src/lib/site.ts`

## Crédits

Les photographies d'illustration proviennent de Wikimedia Commons et sont utilisées sous licence Creative Commons (CC BY 2.0 et CC BY-SA 4.0). Le détail des attributions est disponible sur la page `/credits`. Ces images ne représentent pas nécessairement des activités conduites par l'ONG VPFA.

## Contenus à compléter

- Photos haute définition des activités (les photos actuelles sont extraites de la page Facebook, en résolution réduite).
- Logos des partenaires (Institut Pasteur, Alliance française, OFIDEF, Art d'être soi), à ajouter dans le back-office pour les afficher.
- Numéro Orange Money pour les dons (`orangeMoney` dans `src/lib/site.ts`).
- Validation du « Mot de la présidente » (`presidentMessage` dans `src/lib/site.ts`).
