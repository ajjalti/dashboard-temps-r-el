````markdown
# Dashboard Temps Réel - Visualisation de données capteurs

## Description

Ce projet est un dashboard web temps réel permettant de visualiser des données de capteurs (exemple : température, humidité, etc.) grâce à une API REST et un WebSocket avec Socket.IO. 

Le backend est développé avec Node.js, Express, MongoDB et utilise JWT pour l’authentification.  
Le frontend utilise Chart.js pour afficher des graphiques dynamiques et Socket.IO pour recevoir les données en temps réel.

---

## Fonctionnalités

- Authentification utilisateur avec JWT
- API REST sécurisée pour récupérer l’historique des données capteurs
- WebSocket avec Socket.IO pour push temps réel des données vers le client
- Interface utilisateur avec graphiques dynamiques (Chart.js)
- Gestion des sessions et protection des routes
- Déconnexion sécurisée

---

## Prérequis

- Node.js (version 16+ recommandée)
- MongoDB (local ou cloud)
- Navigateur moderne (Chrome, Firefox, Edge)

---

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/ajjalti/dashboard-temps-r-el.git
cd dashboard-temps-r-el
````

2. Installer les dépendances backend :

```bash
npm install
```

3. Configurer les variables d’environnement dans un fichier `.env` :

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=tonsecretjwt
```

4. Lancer le serveur :

```bash
npm start
```

5. Ouvrir `index.html` dans un navigateur (ou servir un frontend via un serveur web)

---

## Structure du projet

```
/
├── server.js          # Point d'entrée backend
├── routes/            # Routes API Express
├── middleware/        # vérification du token
├── models/            # Modèles MongoDB (Mongoose)
├── frontend/          # Frontend statique (html, js, css)
├── config/
    ├── db.js          # connexion à la base de donnée 
├── .env               # Variables d'environnement
└── README.md          # Documentation
```

---

## Utilisation

* Se connecter via `/login` (frontend)
* Accéder au dashboard pour voir les graphiques en temps réel
* Les données simulées sont envoyées via WebSocket depuis le serveur ou un script externe
* L’historique est accessible via l’API REST sécurisée

---

## Tester localement

* Utiliser Postman ou Insomnia pour tester les endpoints API
* Tester la connexion WebSocket via le frontend
* Simuler des données capteurs avec un script (ex : `sensorSimulator.js`)

---

## Technologies utilisées

* Node.js & Express
* MongoDB & Mongoose
* JWT pour authentification
* Socket.IO pour temps réel
* Chart.js pour graphiques frontend
* Fetch API côté client

---

## Contribution

N’hésite pas à ouvrir des issues ou pull requests pour améliorer ce projet !

---

## Licence

MIT

---

## Auteur

Ahmed AJJALTI - [ahmed.ajjalti@gmail.com](mailto:ahmed.ajjalti@gmail.com)

```
