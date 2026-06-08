import type { ImageMetadata } from "astro";

import FloraccessImage from "@assets/projects/floraccess/floraccess_1_white.png";
import FlowerGardenImage from "@assets/projects/flower-garden/flower-garden_1_white.png";
import FlollylistImage from "@assets/projects/flollylist/flollylist_1_white.png";
import EconorisImage from "@assets/projects/econoris/econoris_1_white.png";
import LysSecureImage from "@assets/projects/lyssecure/lyssecure_1_white.png";
import DocumentationImage from "@assets/projects/documentation/documentation_1_white.png";
import MavenLiteImage from "@assets/projects/maven-lite/maven-lite_1_white.png";
import AlloscpImage from "@assets/projects/alloscp/alloscp_1_white.png";
import ThemeVscodeImage from "@assets/projects/theme-vscode/theme-vscode_1_dark.png";
import JeuAventuriersDuRailImage from "@assets/projects/jeu-aventuriers-du-rail/jeu-aventuriers-du-rail_start_menu.png";
import GenesisImage from "@assets/projects/genesis/genesis_pc_white.png";

export interface ProjectPreview {
  id: string;
  title: string;
  description: string;
  imageSrc: ImageMetadata;
  localLink: string;
  githubLink: string;
  projectLink?: string;
  displayable: boolean;
}

export const projectsPreviewList: ProjectPreview[] = [
  {
    id: "floraccess",
    title: "FlorAccess",
    description:
      "<b>FlorAccess</b> est avant tout une <b>API d'authentification</b> utilisée par mes autres projets. Elle permet un <b>accès sécurisé</b> et <b>sans mot de passe</b> à toutes mes applications, avec un seul compte utilisateur. <b>FlorAccess</b> inclut aussi une <b>application d'administration</b>, accessible uniquement par moi, qui me permet de <b>gérer les utilisateurs</b>.",
    imageSrc: FloraccessImage,
    localLink: "/projets/floraccess",
    githubLink: "https://github.com/FloRobart/FlorAccess",
    displayable: true,
  },
  {
    id: "econoris",
    title: "Econoris",
    description:
      "<b>Econoris</b> est une application de <b>gestion de budget</b>. Elle permet d'<b>enregistrer</b> les <b>dépenses</b> et les <b>revenus</b>, et de <b>visualiser l'évolution de votre budget</b> au fil du temps. Elle se distingue par son <b>interface simple et intuitive</b> et permet de réaliser des <b>prévisions de budget</b>, c'est-à-dire de <b>savoir combien vous pourrez dépenser</b> au début de chaque mois.",
    imageSrc: EconorisImage,
    localLink: "/projets/econoris",
    githubLink: "https://github.com/FloRobart/econoris_app",
    projectLink: "https://econoris.florobart.fr/",
    displayable: true,
  },
  {
    id: "genesis",
    title: "Genesis",
    description:
      "Ce projet est une <b>application de gestion des passerelles</b>. Elle permet entre autres de <b>visualiser les passerelles</b> sur une carte, ainsi que dans un tableau représentant les bâœtiments dans lesquels elles se trouvent. L'application permet également d'ajouter des passerelles, de les modifier et de les supprimer. Elle est utilisée par les techniciens de maintenance pour gérer les passerelles et planifier les interventions de maintenance.",
    imageSrc: GenesisImage,
    localLink: "/projets/genesis",
    githubLink: "",
    displayable: true,
  },
  {
    id: "jeu-aventuriers-du-rail",
    title: "Jeu Les aventuriers du rail",
    description:
      "Ce projet est un jeu vidéo, une <b>adaptation du jeu de société 'Les aventuriers du rail'</b>. Il a été réalisé dans le cadre scolaire lors de ma troisième et dernière année d'IUT informatique, avec quatre autres personnes. J'ai occupé le rôle de <b>chef de projet</b>, responsable de la <b>gestion du projet</b> et de la <b>coordination de l'équipe</b>. J'ai aussi participé à la <b>conception du jeu</b> et à la <b>programmation de fonctionnalités</b>.",
    imageSrc: JeuAventuriersDuRailImage,
    localLink: "/projets/jeu-aventuriers-du-rail",
    githubLink: "https://github.com/FloRobart/Jeu_aventurier_du_rail",
    displayable: true,
  },
  {
    id: "lyssecure",
    title: "LysSecure",
    description:
      "<b>LysSecure</b> est une <b>application web</b> qui permet de <b>stocker des mots de passe</b> de façon <b>sécurisée</b>. Elle peut <b>générer des mots de passe forts</b> et les <b>stocker</b> de manière sécurisée. Elle permet aussi de <b>copier un mot de passe</b> en un clic. La force de ce gestionnaire réside dans sa sécurité : les mots de passe sont <b>chiffrés</b> à l'aide d'une clé <b>unique</b> pour chaque utilisateur, dérivée de trois sources différentes, dont l'une n'est pas enregistrée. Cela contribue à <b>garantir la sécurité</b> des mots de passe même si la base de données ou le code source sont compromis.",
    imageSrc: LysSecureImage,
    localLink: "/projets/lyssecure",
    githubLink: "https://github.com/FloRobart/Lys_secure",
    displayable: true,
  },
  {
    id: "flower-garden",
    title: "Flower Garden",
    description:
      "<b>Flower Garden</b> est un wrapper qui me permet de <b>lancer et gérer mes applications</b> de manière simple et rapide. C'est aussi un site de <b>présentation de mes projets</b>. Grâce à l'<b>enregistrement DNS</b> de mon domaine, <b>Flower Garden</b> <b>liste automatiquement tous les projets</b> que j'ai développés et qui sont hébergés sur mon serveur, en utilisant les sous-domaines correspondants.",
    imageSrc: FlowerGardenImage,
    localLink: "/projets/flower-garden",
    githubLink: "https://github.com/FloRobart/Flower-garden-app",
    projectLink: "https://florobart.fr/",
    displayable: false,
  },
  {
    id: "flollylist",
    title: "Flollylist",
    description:
      "<b>Flollylist</b> est une application de <b>gestion de cadeaux de Noël</b>. Elle permet d'<b>enregistrer</b> toutes <b>les personnes auxquelles vous souhaitez offrir un cadeau</b>, ainsi que les <b>idées de cadeaux</b> pour chacune d'entre elles.",
    imageSrc: FlollylistImage,
    localLink: "/projets/flollylist",
    githubLink: "https://github.com/FloRobart/flollylist_app",
    projectLink: "https://flollylist.florobart.fr/",
    displayable: false,
  },
  {
    id: "documentation",
    title: "Ma Documentation",
    description:
      "Ce projet n'est pas à proprement parler une application, c'est une <b>collection de documentations</b> que j'ai écrites. Elle <b>répertorie</b> toutes sortes d'<b>aides</b> sur <b>différents sujets</b>, depuis <b>l'installation de logiciels</b> jusqu'à des <b>tutoriels</b>. Je l'ai créée à la fois comme <b>aide-mémoire</b> et pour <b>partager mes connaissances</b> afin d'<b>aider d'autres personnes</b> à apprendre plus facilement.",
    imageSrc: DocumentationImage,
    localLink: "/projets/documentation",
    githubLink: "https://github.com/FloRobart/Documentations",
    projectLink: "https://documentation.florobart.fr/",
    displayable: false,
  },
  {
    id: "maven-lite",
    title: "Maven Lite",
    description:
      "<b>Maven Lite</b> est un <b>outil en ligne de commande</b> pour la <b>construction de projets Java</b>. Il permet de <b>gérer les dépendances</b> locales d'un projet, de le <b>compiler</b> et de l'<b>exécuter</b> très facilement, sans grande connaissance préalable. En 5 à <b>10 minutes</b>, on peut <b>apprendre à l'utiliser</b>.<br><em>Ce projet est fonctionnel mais n'est pas terminé</em>",
    imageSrc: MavenLiteImage,
    localLink: "/projets/maven-lite",
    githubLink: "https://github.com/FloRobart/Maven_lite",
    displayable: false,
  },
  {
    id: "alloscp",
    title: "All'OScp",
    description:
      "<b>AllOScp</b> (All OS cp) est un <b>client FTP et SFTP multi-plateforme</b> (Linux, Windows et macOS) qui permet de <b>transférer des fichiers</b> entre un ordinateur et un serveur distant ou localement. Il facilite la mise en place de <b>sauvegardes</b> et propose la <b>comparaison de dossiers et de fichiers</b> grâce à un système de comparaison ligne par ligne similaire à Git.<br><em>Ce projet est fonctionnel mais n'est pas terminé</em>",
    imageSrc: AlloscpImage,
    localLink: "/projets/alloscp",
    githubLink: "https://github.com/FloRobart/AllOScp",
    displayable: false,
  },
  {
    id: "theme-vscode",
    title: "Thème pour Visual Studio Code",
    description:
      "Ce projet est <b>mon thème personnalisé</b> pour Visual Studio Code. C'est un <b>thème sombre</b> aux <b>couleurs vives</b> et <b>contrastées</b> pour une <b>meilleure lisibilité</b>. Il se base sur l'<b>extension 'GitHub.github-vscode-theme'</b>. De ce fait, il ne peut pas être publié sur le Marketplace de Visual Studio Code. Un <b>script d'installation bash</b> est fourni pour installer l'extension si nécessaire, puis le thème personnalisé nommé <b>'Github dark perso'</b>.",
    imageSrc: ThemeVscodeImage,
    localLink: "/projets/theme-vscode",
    githubLink: "https://github.com/FloRobart/Themes_for_vsCode",
    displayable: false,
  },
];

export function getProjectById(projectId: string): ProjectPreview | undefined {
  try {
    return projectsPreviewList.find((project) => project.id === projectId);
  } catch (error) {
    console.error(`Error occurred while fetching project with ID ${projectId}:`, error);
    return undefined;
  }
}
