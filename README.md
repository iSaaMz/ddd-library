# 📚 API de Gestion de Bibliothèque

Ce projet est une API développée en **TypeScript** avec **Node.js**, dans le cadre du module **Find Your Course (FYC)** de l'ESGI. Il s'inscrit dans la création d'un cours complet sur le **Domain-Driven Design (DDD)** et son intégration avec TypeScript pour le développement d'API robustes et maintenables.

## 📖 Cours inclus dans le repository

Le fichier PDF du cours est inclus dans ce repository :
`TypeScript et Domain-Driven Design.pdf`

Ce document présente :
* une introduction détaillée à TypeScript et à son écosystème,
* une explication complète de la méthodologie **Domain-Driven Design (DDD)**,
* des études de cas concrètes,
* une démonstration d'intégration de ces concepts dans une API Node.js.

## 🚀 Installation

```bash
npm install
```

## 🧪 Lancer le projet en mode développement

```bash
npm run dev
```

L'API sera accessible sur : `http://localhost:3000`

## 📌 Endpoints disponibles

### POST `/api/return`
Permet d'enregistrer le retour d'un livre.

### POST `/api/borrow`
Permet d'enregistrer l'emprunt d'un livre.

### GET `/api/books`
Récupère la liste des livres disponibles dans la bibliothèque.

## 🛠️ Stack technique
* TypeScript
* TypeORM
* SQlite
* Node.js
* Express.js
* Domain-driven design

## 📚 Objectifs pédagogiques
Ce projet est conçu pour :
* mettre en pratique les concepts de DDD,
* structurer une API selon les principes de la modélisation métier,
* adopter de bonnes pratiques de typage avec TypeScript.