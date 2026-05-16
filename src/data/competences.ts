import type { ImageMetadata } from "astro";

/* Soft skills images */
import OrganisationImage from "@assets/competences/soft/organisation.png";
import travailEquipeImage from "@assets/competences/soft/travail_equipe.png";
import IngeniositeImage from "@assets/competences/soft/ingeniosite.png";
import PolyvalenceImage from "@assets/competences/soft/polyvalence.png";

/* Hard skills images */
import FlutterImage from "@assets/competences/hard/flutter.png";
import NodejsImage from "@assets/competences/hard/nodejs.png";
import DockerImage from "@assets/competences/hard/docker.png";
import LinuxImage from "@assets/competences/hard/linux.jpeg";
import DocumentationImage from "@assets/competences/hard/documentation.png";
import GestionProjetImage from "@assets/competences/hard/gestion_projet.png";

export interface CompetencePreview {
  id: string;
  title: string;
  description: string;
  imageSrc: ImageMetadata;
  localLink: string;
  externalLink?: string;
  type: "hard" | "soft";
  displayable: boolean;
}

export const competencesPreviewList: CompetencePreview[] = [
  /* Soft skills */
  {
    id: "organisation",
    title: "Organisation",
    description:
      "Il est essentiel pour moi d'organiser tous se que je fais, que ce soit dans ma vie professionnelle ou personnelle. Cela me permet de toujours suivre se que j'ai à faire, de ne pas me laisser submerger et d'assurer un travail de haute qualité.",
    imageSrc: OrganisationImage,
    localLink: "/competences/organisation",
    type: "soft",
    displayable: true,
  },
  {
    id: "travail-equipe",
    title: "Travail d'équipe",
    description:
      "Je crois fermement en l'importance du travail d'équipe pour atteindre des objectifs communs. Je suis capable de collaborer efficacement avec des personnes de différents horizons et de contribuer activement au succès du groupe.",
    imageSrc: travailEquipeImage,
    localLink: "/competences/travail-equipe",
    type: "soft",
    displayable: true,
  },
  {
    id: "ingeniosite",
    title: "Ingéniosité",
    description:
      "Mon ingéniosité me permet de trouver des solutions créatives et innovantes aux problèmes auxquels je suis confronté. Je suis capable de penser de manière originale et de proposer des idées novatrices pour améliorer les processus et les résultats.",
    imageSrc: IngeniositeImage,
    localLink: "/competences/ingeniosite",
    type: "soft",
    displayable: true,
  },
  {
    id: "polyvalence",
    title: "Polyvalence",
    description:
      "Le fais d'être seul à créer mes projets m'a permis de développer une grande polyvalence. Je suis capable de gérer tous les aspects d'un projet, de l'idée à la mise en place de la gestion de projet, en passant par la réalisation du projet, la sécurité, la documentation, l'automatisation du processus de déploiement, le déploiement lui même sur un serveur distants type VPS (Virtual Private Server), la maintenance et la sécurité du serveur lui même, la gestion des enregistrements DNS, etc. Cette polyvalence me permet de gerer efficacement tous les aspects d'un projet.",
    imageSrc: PolyvalenceImage,
    localLink: "/competences/polyvalence",
    type: "soft",
    displayable: true,
  },

  /* Hard skills */
  {
    id: "flutter",
    title: "Flutter",
    description:
      "J'aime beaucoup Flutter, déjà parce qu'il permet de créer des applications multiplateformes avec une seule base de code, ce qui est très efficace, surtout pour les petites équipes ou quand on est seul à créer un projet. Flutter offre des designs à la fois d'une grande flexibilité mais aussi d'une grande qualité et ceux de façon très simple à mettre en place. De plus Flutter est un framework open-source, ce qui signifie que la communauté peut contribuer à son développement et à son amélioration, ce qui en fait un choix solide pour les développeurs qui cherchent à créer des applications de haute qualité.",
    imageSrc: FlutterImage,
    localLink: "/competences/flutter",
    type: "hard",
    displayable: true,
  },
  {
    id: "nodejs",
    title: "NodeJS",
    description:
      "Node.js est un environnement d'exécution JavaScript côté serveur, ce qui me permet de développer des applications backend performantes et évolutives. Je couple toujours Node.js avec Express et Typescript, ce qui me permet de créer des API RESTful robustes et bien structurées. J'apprécie la sécurité et la facilité de maintenance et de mise en production que me permet cette stack, notamment grâce à l'image officielle de Node.js sur Docker, qui facilite le déploiement de mes applications sur des serveurs distants ou des services cloud. De plus, Node.js dispose d'un écosystème riche en bibliothèques et en outils, ce qui me permet de trouver facilement des solutions pour répondre à mes besoins spécifiques lors du développement de mes projets. De plus Node.js est également open-source.",
    imageSrc: NodejsImage,
    localLink: "/competences/nodejs",
    type: "hard",
    displayable: true,
  },
  {
    id: "docker",
    title: "Docker",
    description:
      "Docker est une plateforme de conteneurisation qui me permet de créer, déployer et gérer des applications dans des conteneurs. Cela me permet de garantir que mon application fonctionne de la même manière dans différents environnements, ce qui améliore la cohérence et la fiabilité du déploiement. Je suis capable de créer des images Docker optimisées et de les utiliser pour déployer mes applications sur des serveurs distants ou des services cloud de façon très simple et rapide.",
    imageSrc: DockerImage,
    localLink: "/competences/docker",
    type: "hard",
    displayable: true,
  },
  {
    id: "linux",
    title: "Linux",
    description:
      "Linux est un système d'exploitation open-source. Il a été créer pour fonctionner sur une grande variété de matériel, des ordinateurs personnels aux serveurs en passant par les appareils embarqués. J'utilise Linux au qotidien depuis plus 2023, sur mon ordinateur personnel. Mon entreprise est également 100% basée sur Linux, que ce soit pour les ordinateurs de bureau ou les serveurs de production. J'ai une grande expérience avec les distributions Linux, notamment Ubuntu et Debian, et je suis à l'aise avec la ligne de commande pour effectuer des tâches d'administration système, de gestion des fichiers, de configuration réseau et de dépannage.",
    imageSrc: LinuxImage,
    localLink: "/competences/linux",
    type: "hard",
    displayable: true,
  },
  {
    id: "documentation",
    title: "Documentation",
    description:
      "La documentation est un aspect crucial du développement logiciel. Je suis adepte de la documentation claire, complète et à jour. Je m'assure toujours que mes projets soient bien documentés, que ce soit pour les utilisateurs finaux ou pour les développeurs qui pourraient avoir à intervenir sur le code à l'avenir. Cela permet de faciliter la maintenance et l'évolution des applications.",
    imageSrc: DocumentationImage,
    localLink: "/competences/documentation",
    type: "hard",
    displayable: true,
  },
  {
    id: "gestion-de-projet",
    title: "Gestion de projet",
    description:
      "La gestion de projet est une compétence essentielle pour assurer le succès de tout projet. Je suis capable de planifier, organiser et gérer efficacement les ressources et les risques pour atteindre les objectifs du projet. Je n'utilise pas de méthodologie de gestion de projet spécifique, mais grâce à mon expérience et à l'expérience de mes collaborateurs, j'ai développé une approche pragmatique qui me permet de m'adapter aux besoins spécifiques de chaque projet et de garantir une exécution efficace et toujours avec un résultat d'une grande qualité.",
    imageSrc: GestionProjetImage,
    localLink: "/competences/gestion-de-projet",
    type: "hard",
    displayable: true,
  },
];

export function getCompetenceById(competenceId: string): CompetencePreview | undefined {
  try {
    return competencesPreviewList.find((competence) => competence.id === competenceId);
  } catch (error) {
    console.error(`Error occurred while fetching competence with ID ${competenceId}:`, error);
    return undefined;
  }
}
