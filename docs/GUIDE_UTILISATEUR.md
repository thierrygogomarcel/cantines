# Guide Utilisateur Cantin2025 🍽️

## Table des matières

1. [Présentation générale](#présentation-générale)
2. [Guide du personnel](#guide-du-personnel)
3. [Guide des parents](#guide-des-parents)
4. [Guide des investisseurs](#guide-des-investisseurs)
5. [Guide des développeurs](#guide-des-développeurs)

## Présentation générale

### À propos de Cantin2025

Cantin2025 est une solution innovante de gestion de cantines scolaires qui modernise et simplifie la gestion quotidienne des repas scolaires. Notre plateforme offre :

- 🎫 Gestion numérique des tickets-repas
- 📱 Interface moderne et responsive
- 💳 Paiements sécurisés
- 📊 Suivi en temps réel
- 🔒 Sécurité des données

### Impact et objectifs

- Réduction du gaspillage alimentaire
- Optimisation des coûts de gestion
- Amélioration de la communication parents-école
- Traçabilité et sécurité alimentaire
- Inclusion numérique dans le milieu scolaire

## Guide du personnel

### Pour les administrateurs

#### Tableau de bord administrateur
- Accès : `/dashboard/admin`
- Fonctionnalités principales :
  - Vue d'ensemble des statistiques
  - Gestion des menus
  - Suivi des paiements
  - Gestion des incidents

#### Gestion des menus
1. Cliquez sur "Créer un menu"
2. Remplissez les champs :
   - Date
   - Entrée
   - Plat principal
   - Dessert
3. Validez pour publier

#### Suivi des présences
- Scanner le QR Code de l'élève
- Validation automatique du ticket
- Historique des présences consultable

### Pour le personnel de cantine

#### Scanner les tickets
1. Accédez à `/dashboard/staff`
2. Utilisez la caméra pour scanner le QR Code
3. Vérifiez la validité du ticket
4. Confirmez la présence

#### Gestion des incidents
1. Cliquez sur "Signaler un incident"
2. Sélectionnez le type d'incident
3. Ajoutez une description
4. Joignez des photos si nécessaire

## Guide des parents

### Inscription et configuration

1. Créez votre compte :
   - Via email/mot de passe
   - Ou avec Google/Facebook/GitHub
2. Complétez votre profil
3. Ajoutez vos informations de paiement

### Gestion des repas

#### Achat de tickets
1. Accédez à votre tableau de bord
2. Cliquez sur "Recharger"
3. Choisissez le nombre de tickets :
   - 5 tickets :  2500 FCFA
   - 10 tickets : 4500 FCFA
   - 20 tickets : 8500 FCFA
4. Procédez au paiement

#### Suivi des repas
- Consultez l'historique des repas
- Visualisez les menus à venir
- Recevez des notifications

### QR Code de l'élève
- Accessible depuis le tableau de bord
- À présenter à la cantine
- Peut être téléchargé ou imprimé

## Guide des investisseurs

### Aperçu du marché

- Marché cible : Établissements scolaires
- Potentiel de croissance : +25% par an
- Modèle économique : SaaS + Commission sur transactions

### Métriques clés

- Nombre d'utilisateurs actifs
- Taux de conversion
- Revenu moyen par utilisateur
- Taux de rétention

### Avantages compétitifs

1. Solution tout-en-un
2. Interface intuitive
3. Sécurité renforcée
4. Scalabilité native

### Roadmap

- Q2 2025 : Intégration IA pour prévisions
- Q3 2025 : Application mobile native
- Q4 2025 : Extension internationale

## Guide des développeurs

### Stack technique

- **Frontend** :
  - Nuxt 3
  - Vue 3
  - TailwindCSS
  - HeadlessUI

- **Backend** :
  - Nhost (BaaS)
  - PostgreSQL
  - Hasura GraphQL

- **Services tiers** :
  - Stripe (paiements)
  - PayPal (paiements)
  - OAuth (authentification)

### Structure du projet

```
cantin2025/
├── components/         # Composants réutilisables
├── composables/       # Logique métier réutilisable
├── layouts/           # Layouts de l'application
├── pages/             # Routes et pages
├── plugins/           # Plugins Nuxt
└── public/            # Assets statiques
```

### Installation

```bash
# Cloner le projet
git clone https://github.com/votre-org/cantin2025.git

# Installer les dépendances
npm install

# Configuration
cp .env.example .env
# Remplir les variables d'environnement

# Démarrer en développement
npm run dev
```

### Services requis

1. **Nhost**
   - Créer un projet
   - Configurer les variables d'environnement
   - Activer l'authentification

2. **Stripe**
   - Créer un compte
   - Configurer les clés API
   - Activer le mode test

3. **PayPal**
   - Créer un compte développeur
   - Configurer les credentials
   - Tester en sandbox

### Déploiement

```bash
# Build de production
npm run build

# Preview local
npm run preview

# Déploiement (exemple avec Netlify)
netlify deploy --prod
```

### Bonnes pratiques

1. **Code**
   - Suivre les conventions Vue 3/Nuxt 3
   - Utiliser TypeScript
   - Documenter les composants

2. **Sécurité**
   - Valider les entrées utilisateur
   - Utiliser HTTPS
   - Suivre les bonnes pratiques OWASP

3. **Performance**
   - Optimiser les images
   - Utiliser le lazy loading
   - Implémenter le caching

### Améliorations suggérées

1. **Fonctionnalités**
   - Application mobile native
   - Système de notifications push
   - Analytics avancés

2. **Infrastructure**
   - CI/CD automatisé
   - Tests E2E
   - Monitoring en production

3. **Intégrations**
   - APIs de nutrition
   - Systèmes de gestion scolaire
   - Solutions de comptabilité

## Support et ressources

- Documentation : `/docs`
- Issues : GitHub Issues
- Contact : support@cantin2025.com

---

Pour toute question ou suggestion, n'hésitez pas à contacter l'équipe de développement.