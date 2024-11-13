# Projet E-commerce de Vêtements Féminins

Ce projet est un site e-commerce conçu pour offrir une expérience de shopping en ligne pour des vêtements féminins. Le back-end est construit avec Laravel, tandis que le front-end utilise React avec Vite, et le style est géré avec Tailwind CSS.

## Fonctionnalités
- Inscription et connexion des utilisateurs
- Navigation et filtrage des produits
- Ajout au panier
- Processus de paiement

## Technologies Utilisées

- **Back-end** : [Laravel](https://laravel.com/)
- **Front-end** : [React](https://reactjs.org/) avec [Vite](https://vitejs.dev/)
- **CSS** : [Tailwind CSS](https://tailwindcss.com/)
- **Base de données** : MySQL

### Prérequis

- PHP >= 7.3
- Composer
- Node.js >= 14
- npm ou yarn

## Installation
**Clone le dépôt** :
```bash
   git clone https://github.com/marsevilla/ecommercevet.git
   cd ecommercevet
```

**installer les dépendances backend** :
```bash
cd Ecommercevet-backend
composer install
```

**installer les dépendances frontend** :
```bash
cd ../Ecommercevet
npm install
```

**Configurer le fichier .env** :

Duplique le fichier .env.example et renomme-le en .env.
Mettez à jour les paramètres de la base de données et d'autres configurations nécessaires.
  
Migrations de la base de données :
```bash
  php artisan migrate
```
  
## Démarrage du Projet
Démarrer le back-end
Dans le dossier backend, exécute la commande suivante pour démarrer le serveur de développement Laravel :
```bash
  php artisan serve
```

Démarrer le front-end
Dans le dossier frontend, exécute la commande suivante pour démarrer Vite :
```bash
  npm run dev
```
