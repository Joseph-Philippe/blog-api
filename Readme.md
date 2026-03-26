# 📘 API Blog- INF222

## 🧠 Description

Cette application est une API REST développée avec Node.js et Express. Elle permet de gérer des articles de blog à travers différentes opérations : création, consultation, modification, suppression et recherche.

---

## ⚙️ Technologies utilisées

* Node.js
* Express.js
* Swagger (documentation API)
* Postman (tests)

---

## 🚀 Installation et lancement

### 1. Installer les dépendances

npm install

### 2. Lancer le serveur

node server.js

---

## 🌐 Accès à l'application

API : http://localhost:3000
Swagger : http://localhost:3000/api-docs

---

## 📦 Endpoints disponibles

Créer un article
POST /api/articles

Récupérer tous les articles
GET /api/articles

Récupérer un article par ID
GET /api/articles/:id

Modifier un article
PUT /api/articles/:id

Supprimer un article
DELETE /api/articles/:id

Rechercher des articles
GET /api/articles/search?query=mot

---

## 🧪 Exemple de requête (POST)

{
"titre": "Mon premier article",
"contenu": "Contenu de test",
"auteur": "Joseph",
"categorie": "Tech"
}

---

## 📚 Documentation

La documentation complète de l’API est disponible via Swagger :

http://localhost:3000/api-docs

---

## 👨‍💻 Auteur

K. Joseph Philippe
Étudiant en informatique

---

## 🎯 Objectif du projet

Ce projet a été réalisé dans le cadre du cours INF222 afin de comprendre le fonctionnement des API REST et la manipulation des requêtes HTTP.
