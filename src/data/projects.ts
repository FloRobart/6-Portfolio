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

export interface ProjectPreview {
  id: string;
  title: string;
  description: string;
  imageSrc: ImageMetadata;
  localLink: string;
  githubLink: string;
  projectLink?: string;
}

export const projectsPreviewList: ProjectPreview[] = [
  {
    id: "floraccess",
    title: "FlorAccess",
    description:
      "<b>FlorAccess</b> est avant tout une <b>API d'authentification</b> utilisée par mes autres projets. Elle permet un <b>accès sécurisé</b> et <b>sans mot de passe</b> à toutes mes applications, le tout avec un seul compte utilisateur. <b>FlorAccess</b> est également une <b>application d'administration</b> disponible seulement pour moi et qui me permet de <b>gérer les utilisateurs</b>.",
    imageSrc: FloraccessImage,
    localLink: "/projets/floraccess",
    githubLink: "https://github.com/FloRobart/FlorAccess",
  },
  {
    id: "flower-garden",
    title: "Flower Garden",
    description:
      "<b>Flower Garden</b> est un wrapper qui me permet de <b>lancer et de gérer mes applications</b> de manière simple et rapide. C'est également un site de <b>présentation de mes projets</b>. Grâce au <b>enregistrement DNS</b> de mon domaine, Flower garden app <b>liste automatiquement tous les projets</b> que j'ai développé et qui sont hébergés sur mon serveur, en utilisant les sous-domaines correspondants.",
    imageSrc: FlowerGardenImage,
    localLink: "/projets/flower-garden",
    githubLink: "https://github.com/FloRobart/Flower-garden-app",
    projectLink: "https://florobart.fr/",
  },
  {
    id: "flollylist",
    title: "Flollylist",
    description:
      "<b>Flollylist</b> est une application de <b>gestion de cadeau de noël</b>. Elle permet d'<b>enregistrer</b> toutes <b>les personnes à qui vous voulez offrir un cadeau</b>, ainsi que les <b>idées de cadeaux</b> pour chacune d'entre elles.",
    imageSrc: FlollylistImage,
    localLink: "/projets/flollylist",
    githubLink: "https://github.com/FloRobart/flollylist_app",
    projectLink: "https://flollylist.florobart.fr/",

  },
  {
    id: "econoris",
    title: "Econoris",
    description:
      "<b>Econoris</b> est une application de <b>gestion de budget</b>. Elle permet d'<b>enregistrer</b> toutes les <b>dépenses</b> et les <b>revenus</b>, ainsi que de <b>visualiser l'évolution de votre budget</b> au fil du temps. Elle se distingue des autres applications de gestion de budget par son <b>interface simple et intuitive</b> et elle permets de faire des <b>prévisions de budget</b>, c'est à dire qu'elle vous permet au début de chaque mois de <b>savoir combien vous pourrez dépenser</b> au cours du mois.",
    imageSrc: EconorisImage,
    localLink: "/projets/econoris",
    githubLink: "https://github.com/FloRobart/econoris_app",
    projectLink: "https://econoris.florobart.fr/",
  },
  {
    id: "lyssecure",
    title: "LysSecure",
    description:
      "<b>LysSecure</b> est une <b>application web</b> qui permet de <b>stocker ses mots de passe</b> de façon <b>sécurisée</b>. Elle permet de <b>générer des mots de passe fort</b> et de les <b>stocker</b> de façon sécurisée. Elle permet également de <b>copier un mot de passe</b> en un clic. La force de ce gestionnaire de mot de passe est sa sécurité, les mots de passe sont <b>chiffrés</b> avec une clé de chiffrement <b>unique</b> pour chaque utilisateur et formée à partir de trois sources différentes, dont une source qui n'est pas enregistrée, ce qui permet de <b>garantir la sécurité</b> des mots de passe même si la base de données et le code source sont compromis.<br><em>Ce projet n'est pas disponible en ligne et doit faire l'objet d'une réécriture totale</em>",
    imageSrc: LysSecureImage,
    localLink: "/projets/lyssecure",
    githubLink: "https://github.com/FloRobart/Lys_secure",
  },
  {
    id: "documentation",
    title: "Documentation",
    description:
      "Ce projet n'est pas vraiment un projet à proprement parler. C'est plutôt une <b>collection de documentation</b> que j'ai écrite. Elle répartorie toutes sorte d'<b>aide</b> pour <b>différents sujets</b>, cela va de <b>l'installation de certains logiciels</b> à des <b>tutoriels</b> pour apprendre à faire certaines choses. Je l'ai créé à la fois pour me servir d'<b>aide mémoire</b> et pour <b>partager mes connaissances</b> et <b>aider d'autre personnes</b> à apprendre plus facilement.",
    imageSrc: DocumentationImage,
    localLink: "/projets/documentation",
    githubLink: "https://github.com/FloRobart/Documentations",
    projectLink: "https://documentation.florobart.fr/",
  },
  {
    id: "maven-lite",
    title: "Maven Lite",
    description:
      "<b>Maven Lite</b> est un <b>logiciel en ligne de commande</b> de <b>construction de projets Java</b> qui permet de <b>gérer les dépendances</b> locales d'un projet, de le <b>compiler</b> et de l'<b>exécuter</b> très <b>facilement</b> et sans grande connaissance préalable, 5 à <b>10 minutes</b> suffisent <b>pour apprendre à l'utiliser</b>.<br><em>Ce projet est fonctionnel mais n'est pas terminé</em>",
    imageSrc: MavenLiteImage,
    localLink: "/projets/maven-lite",
    githubLink: "https://github.com/FloRobart/Maven_lite",
  },
  {
    id: "alloscp",
    title: "All'OScp",
    description:
      "<b>AllOScp</b> (All OS cp) est un <b>client FTP et SFTP multi-plateforme</b> (Linux, Windows et MacOS) qui permet de <b>transférer des fichiers</b> entre un ordinateur et un serveur distant ou en local. Il permet également de <b>faciliter la mise en place de backup</b>, ainsi que la <b>comparaison de dossiers et de fichier</b> grâce à un système de comparaison au niveau de la ligne similaire à celui de Git.<br><em>Ce projet est fonctionnel mais n'est pas terminé</em>",
    imageSrc: AlloscpImage,
    localLink: "/projets/alloscp",
    githubLink: "https://github.com/FloRobart/AllOScp",
  },
  {
    id: "theme-vscode",
    title: "Thème pour Visual Studio Code",
    description:
      "Ce projet est <b>mon thème personnalisé</b> pour Visual Studio Code, qui est un <b>thème sombre</b> avec des <b>couleurs vives</b> et <b>contrastées</b> pour une <b>meilleure lisibilité</b> du code. Il se base sur l'<b>extension 'GitHub.github-vscode-theme'</b>, par conséquent il ne peux pas être mis sur market place de Visual Studio Code. Il est fourni avec un <b>script d'installation bash</b> qui permet d'installer l'extension s'il n'est pas déjà installé puis installe ensuite le thème personnalisé nommé <b>'Github dark perso'</b>.",
    imageSrc: ThemeVscodeImage,
    localLink: "/projets/theme-vscode",
    githubLink: "https://github.com/FloRobart/Themes_for_vsCode",
  },
];

export function getProjectById(projectId: string): ProjectPreview | undefined {
  return projectsPreviewList.find((project) => project.id === projectId);
}
