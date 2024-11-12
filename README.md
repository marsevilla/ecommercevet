# Projet E-commerce de Vêtements Féminins

Ce projet est un site e-commerce conçu pour offrir une expérience de shopping en ligne pour des vêtements féminins. Le back-end est construit avec Laravel, tandis que le front-end utilise React avec Vite, et le style est géré avec Tailwind CSS.

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
   git clone https://github.com/marsevilla/ecommercevet.git
   cd ecommercevet

- installer les dépendances backend :
cd Ecommercevet-backend
composer install
-installer les dépendances frontend :
cd ../Ecommercevet
npm install

Configurer le fichier .env :
Duplique le fichier .env.example et renomme-le en .env.
Mettez à jour les paramètres de la base de données et d'autres configurations nécessaires.

Générer la clé d'application :
  php artisan key:generate
  
Migrations de la base de données :
  php artisan migrate
  
## Démarrage du Projet
Démarrer le back-end
Dans le dossier backend, exécute la commande suivante pour démarrer le serveur de développement Laravel :
  php artisan serve

Démarrer le front-end
Dans le dossier frontend, exécute la commande suivante pour démarrer Vite :
  npm run dev
