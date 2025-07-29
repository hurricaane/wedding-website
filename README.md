# 💍 Site Web de Mariage - Yannick & Louise

> Un site web élégant pour le mariage construit avec Nuxt 4, TypeScript et TailwindCSS v4

## 🎯 Objectif du Projet

Ce site web sert d'invitation numérique et de centre d'information pour la célébration du mariage de Yannick & Louise le **20 décembre 2025 à Dakar, Sénégal**. Le site fournit aux invités toutes les informations essentielles du mariage tout en maintenant une expérience élégante, accessible et conviviale.

## ✨ Fonctionnalités

### 🏠 **Section Héros**
- Belle annonce de mariage avec les noms du couple
- Date et lieu du mariage
- Animations élégantes et effets visuels
- Appel à l'action pour confirmer la présence

### 📝 **Système de Confirmation (RSVP)**
- Formulaire interactif avec validation côté serveur
- Sélection du nombre d'invités
- Restrictions alimentaires et demandes spéciales
- Envoi d'emails de confirmation via Resend
- Système de notifications en temps réel

### ❓ **Section FAQ**
- Chronologie et programme du mariage
- Informations sur les lieux et directions
- Code vestimentaire et détails d'hébergement
- Transport et logistique

### 📅 **Programme des Événements**
- Chronologie détaillée de la cérémonie
- Programme de la réception
- Moments importants et activités

### 🗺️ **Cartes de Localisation**
- Intégration Google Maps
- Plusieurs lieux de célébration
- Informations de transport
- Navigation interactive

### 💬 **Formulaire de Contact**
- Formulaire de contact pour les demandes
- Envoi d'emails via Resend
- Communication directe avec le couple
- Questions et support liés au mariage

## 🛠️ Stack Technique

- **Framework** : [Nuxt 4](https://nuxt.com/) - Framework Vue.js avec SSR
- **Langage** : [TypeScript](https://www.typescriptlang.org/) - JavaScript typé et sécurisé
- **Styles** : [TailwindCSS v4](https://tailwindcss.com/) - Framework CSS utility-first
- **Email** : [Resend](https://resend.com/) - Service d'envoi d'emails
- **Icônes** : [Iconify](https://iconify.design/) - Bibliothèque d'icônes complète
- **Polices** : [Google Fonts](https://fonts.google.com/) - Typographie élégante
- **Cartes** : [API Google Maps](https://developers.google.com/maps) - Intégration de localisation
- **Validation** : [Zod](https://zod.dev/) - Validation de schémas TypeScript

## 🎨 Système de Design

### Palette de Couleurs
- **Primaire** : Tons champagne et ivoire élégants
- **Accent** : Reflets dorés chaleureux
- **Arrière-plan** : Dégradés ivoire et crème doux
- **Texte** : Brun profond et anthracite pour la lisibilité

### Typographie
- **Titres** : Polices serif pour l'élégance et la cérémonie
- **Corps** : Sans-serif propre pour la lisibilité
- **Accents** : Polices script pour les touches spéciales

### Style Visuel
- **Esthétique** : Élégant, romantique et intemporel
- **Mise en page** : Propre, spacieuse et mobile-first
- **Animations** : Transitions subtiles et effets de survol
- **Imagerie** : Photos et illustrations de haute qualité

## 🚀 Démarrage

### Prérequis
- Node.js 18+ et pnpm
- Git pour le contrôle de version
- Compte Resend pour l'envoi d'emails

### Variables d'Environnement
Créer un fichier `.env` avec :
```bash
# Resend API
RESEND_API_KEY=your_resend_api_key

# Email Configuration
CONTACT_EMAIL=yannick.louise.mariage@email.com
FROM_EMAIL=noreply@votredomaine.com

# Google Maps (optionnel)
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Installation
```bash
# Cloner le dépôt
git clone <url-du-dépôt>
cd wedding-website

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos clés API

# Démarrer le serveur de développement
pnpm run dev
```

### Commandes de Développement
```bash
pnpm run dev        # Démarrer le serveur de développement SSR
pnpm run build      # Construire pour la production
pnpm run preview    # Prévisualiser le build de production
pnpm run lint       # Exécuter ESLint
pnpm run typecheck  # Exécuter la vérification TypeScript
```

## 📁 Structure du Projet

```
/
├── assets/           # Images, polices, styles globaux
├── components/       # Composants Vue
│   ├── ui/          # Composants UI réutilisables
│   └── sections/    # Sections de page (Hero, FAQ, etc.)
├── composables/     # Composables Vue
├── layouts/         # Composants de mise en page
├── pages/           # Pages de routes
├── public/          # Assets statiques
├── server/          # Routes API et logique serveur
│   └── api/         # Endpoints API
│       ├── rsvp.post.ts      # Traitement RSVP
│       └── contact.post.ts   # Formulaire de contact
├── types/           # Définitions de types TypeScript
└── utils/           # Fonctions utilitaires
```

## 🌍 Déploiement

Le site web utilise le rendu côté serveur (SSR) et peut être déployé sur :

### Plateformes Recommandées
- **Vercel** - Déploiement automatique avec support Nuxt SSR
- **Netlify** - Support complet pour les applications Nuxt
- **Railway** - Hébergement simple avec support Node.js
- **DigitalOcean App Platform** - Déploiement containerisé

### Configuration de Production
```bash
# Construire l'application
pnpm run build

# Démarrer en production
pnpm run preview
```

### Variables d'Environnement Production
Configurer sur votre plateforme de déploiement :
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `FROM_EMAIL`
- `GOOGLE_MAPS_API_KEY` (optionnel)

## 📧 Intégration Resend

### Configuration
```typescript
// server/api/rsvp.post.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  // Logique de traitement RSVP et envoi d'email
})
```

### Templates d'Emails
- **Confirmation RSVP** : Email de confirmation pour les invités
- **Notification Couple** : Notification pour le couple des nouvelles réponses
- **Réponse Contact** : Réponse automatique aux questions

## 📱 Design Responsive

Le site web est construit avec une approche mobile-first et supporte :

- 📱 **Appareils mobiles** (320px+)
- 📋 **Tablettes** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Grands écrans** (1440px+)

## ♿ Accessibilité

Engagé à la conformité WCAG 2.1 AA :

- Structure HTML sémantique
- Support de navigation au clavier
- Compatibilité avec les lecteurs d'écran
- Conformité du contraste des couleurs
- Texte alternatif pour les images
- Gestion du focus

## 🌐 Internationalisation

- **Langue Principale** : Français (fr)
- **Langue Secondaire** : Anglais (en) - si nécessaire
- **Adaptation Culturelle** : Contexte et coutumes sénégalaises

## 🔒 Confidentialité et Sécurité

- Validation côté serveur avec Zod
- Protection CSRF intégrée par Nuxt
- Connexion HTTPS sécurisée
- Gestion sécurisée des variables d'environnement
- Aucun stockage de données sensibles
- Conformité RGPD

## 🤝 Contribution

### Conventions Git
Tous les commits doivent suivre le format [Conventional Commits](https://www.conventionalcommits.org/) :

```
<type>[scope optionnel]: <description>

[corps optionnel]

[pied de page optionnel]
```

**Exemples :**
- `feat: ajouter le composant section hero`
- `fix: résoudre le problème de validation du formulaire RSVP`
- `feat(api): intégrer Resend pour l'envoi d'emails`
- `docs: mettre à jour le README avec les instructions de déploiement`

### Workflow de Développement
1. Créer une branche feature à partir de `main`
2. Apporter des modifications suivant les standards de code
3. Tester les fonctionnalités côté serveur
4. Créer une pull request avec un titre descriptif
5. S'assurer que toutes les vérifications passent

## 📄 Licence

Ce projet est privé et créé spécifiquement pour la célébration du mariage de Yannick & Louise.

## 👰🤵 À Propos du Couple

Yannick & Louise sont ravis de partager leur jour spécial avec leur famille et leurs amis. Ce site web représente leur parcours ensemble et leur célébration de l'amour dans la belle ville de Dakar, Sénégal.

---

**Fait avec 💕 pour le Mariage de Yannick & Louise**

*20 décembre 2025 • Dakar, Sénégal*