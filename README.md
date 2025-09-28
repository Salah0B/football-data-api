# Football-data-api / NestJS

Cette application est une API développée avec NestJS permettant de gérer des clubs de football.
Elle combine des données provenant d’un fichier local dataset.json et de l’API [football-data.org](http://football-data.org).

L’objectif est de pouvoir ajouter, rechercher, lister et gérer des clubs, avec un système de favoris et de persistance locale.

## 📂 Structure des données
### 🔹 Club

- **id**: identifiant unique du club.
- **name**: nom complet du club.
- **tla**: abréviation officielle du club (3 lettres, ex : PSG pour Paris Saint-Germain).
- **logo**: URL du logo / écusson.
- **address**: adresse / centre d'entrainement du club.
- **founded**: année de fondation du club.
- **clubColors**: couleurs du club.
- **players**: liste des joueurs, contient les informations suivantes sur le joueur : id, nom, position, date de naissance, nationalité.

### 🔹 ApiClub
Structure des clubs renvoyés par l’API externe. Chaque ApiClub contient :

- **id**: identifiant du club.
- **name**: nom complet.
- **shortName**: nom abrégé.
- **tla**: abréviation officielle.
- **crest**: URL du logo.
- **address**: adresse postale.
- **website**: site officiel.
- **founded**: année de fondation.
- **clubColors**: couleurs officielles.
- **venue**: stade principal.
- **squad**: effectif complet.

## 🚀 Fonctionnalités

- `GET /clubs` : 
    - Récupérer et lister tous les clubs (nom, TLA, logo, joueurs ...)
    - Filtrer par TLA (?tla=XXX).
- `POST /clubs` : Ajouter un club (dans le stockage en mémoire et fichier).
- `GET /clubs/details/:id` : Obtenir les détails complets d’un club par son id
- `DELETE /clubs/:id` : Supprimer un club par son id.
 

- `GET /clubs/favori` : Lister les clubs favoris.
- `POST /clubs/favori` : Ajouter un club aux favoris (et l’enregistrer dans dataset.json).


- `POST /clubs/search` : Rechercher un club par son nom, son TLA, ou le nom d’un joueur.

## ⭐ Démarrage
Au démarrage, l’application charge :
- les clubs du fichier dataset.json,
- les clubs de l’API externe.
- Les favoris sont enregistrés à la fois en mémoire et dans dataset.json.