# 🎬 Etna Flix

Etna Flix est une application mobile **cross‑plateforme (iOS & Android)** développée en **React Native avec Expo**. Elle permet d’explorer un catalogue de **films et séries**, d’afficher leurs détails, d’effectuer des recherches et d’accéder à du contenu via un **système d’authentification (login)** en s’appuyant sur une **API externe**.

Ce projet a été réalisé dans un objectif pédagogique afin de maîtriser les bases du développement mobile avec React Native, la consommation d’API et la navigation multi‑écrans.

---

## 🚀 Fonctionnalités

- 🔐 **Authentification utilisateur** (login)
- 🎞️ **Catalogue de films et séries** récupéré depuis une API
- 🔍 **Recherche de films / séries** par mot‑clé
- 📄 **Page de détails** pour chaque film ou série
- 🧭 **Navigation multi‑écrans** avec React Navigation
- ⏳ **Gestion des états de chargement** (loader)
- ⚠️ **Gestion des erreurs** (API, réseau, etc.)

---

## 🛠️ Technologies utilisées

- **React Native**
- **Expo**
- **JavaScript (ES6+)**
- **React Navigation**
- **API externe (type TMDB / API personnalisée)**
- **Fetch / Axios**

---

## 📱 Aperçu de l’application

- Écran de connexion
- Liste des films et séries
- Barre de recherche
- Détails d’un film ou d’une série

_(Les données sont chargées dynamiquement depuis l’API)_

---

## ⚙️ Installation et lancement du projet

### Prérequis

- **Node.js** (version recommandée LTS)
- **npm** ou **yarn**
- **Expo CLI**
- Application **Expo Go** installée sur un téléphone (Android ou iOS)

### Installation

```bash
npm install -g expo-cli
```

```bash
git clone git@github.com:JustKIKS/com.EtnaFlix.git
cd etna-flix
npm install
```

### Lancement

```bash
expo start
```

- Scanner le **QR code** avec l’application **Expo Go**
- Le téléphone et l’ordinateur doivent être sur le **même réseau Wi‑Fi**

---

## 🔑 Configuration de l’API

Créer un fichier de configuration (ex : `config.js` ou `.env`) pour stocker les clés sensibles :

```js
export const API_URL = "https://votre-api.com";
export const API_KEY = "VOTRE_CLE_API";
```

⚠️ **Ne jamais publier vos clés API en clair sur un dépôt public.**

---

## 🧭 Navigation

La navigation est gérée avec **React Navigation (Stack Navigator)** :

- Login
- Home (liste des films / séries)
- Détails

<p>
  <img src="./assets/login.png" width="15%" style="margin-right: 10px;" />
  <img src="./assets/accueil.png" width="15%" style="margin-right: 10px;" />
  <img src="./assets/details.png" width="15%" style="margin-right: 10px;" />
</p>

---

## 🧪 Améliorations possibles

- ⭐ Gestion des **favoris** (AsyncStorage)
- 📄 **Pagination** pour charger plus de contenus
- 🧪 **Tests unitaires**
- 🎨 Amélioration de l’UI / UX
- 🔔 Gestion des sessions utilisateur

---

## 📚 Ressources

- React Native : [https://reactnative.dev](https://reactnative.dev)
- Expo : [https://docs.expo.dev](https://docs.expo.dev)
- React Navigation : [https://reactnavigation.org](https://reactnavigation.org)
- TMDB API : [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)

---

## 👤 Auteur

Projet réalisé par **Luka Brouard**
Dans le cadre d’un projet de formation React Native.

---
