# Portfolio ISCOD

## Table des matières

- [Portfolio ISCOD](#portfolio-iscod)
  - [Table des matières](#table-des-matières)
  - [Présentation](#présentation)
  - [Construire le projet](#construire-le-projet)
  - [Lancement du projet](#lancement-du-projet)
    - [Mode développement](#mode-développement)
    - [Mode production (Docker)](#mode-production-docker)
  - [Mise à jour du projet](#mise-à-jour-du-projet)
    - [Mode développement](#mode-développement-1)
    - [Mode production](#mode-production)

## Présentation

Ce dépot est mon portfolio réalisé dans le cadre de ma formation de mastère en ingénierie logicielle à ISCOD.

Le portfolio est disponible à l'adresse suivante : [https://portfolio-iscod.florobart.fr](https://portfolio-iscod.florobart.fr)

## Construire le projet

Vous n'êtes pas obligé de construire le projet pour le lancer, que se sois en mode développement ou en mode production, mais si vous souhaitez le faire, voici les étapes à suivre :

- installez les dépendances

    ```bash
    npm install
    ```

- construisez le projet

    ```bash
    npm run build
    ```

- Vous pouvez ensuite prendre vos fichiers statiques dans le dossier `dist` et les servir avec un serveur web comme nginx ou apache ou même les servir depuis des services de hosting comme github pages.

## Lancement du projet

### Mode développement

- Installez les dépendances

    ```bash
    npm install
    ```

- Lancez le projet en mode développement

    ```bash
    npm run dev
    ```

- Ouvrez votre navigateur à l'adresse suivante : [http://localhost:4321](http://localhost:4321)

### Mode production (Docker)

- Utilisez un reverse proxy comme traefik ou nginx pour rediriger les requêtes vers le serveur nginx qui sert les fichiers statiques générés par le projet.
- Lancé le projet en mode production

    ```bash
    ./run.sh
    ```

## Mise à jour du projet

### Mode développement

- La mise à jour se fait automatiquement grâce à la commande `npm run dev` qui utilise Vite pour recharger les fichiers à chaque changement.

### Mode production

- Lancez la commande `./run.sh` pour mettre à jour le projet en mode production. Cette commande va reconstruire le projet et redémarrer le serveur nginx pour servir les nouveaux fichiers statiques.
