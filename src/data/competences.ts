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
      "Il est essentiel pour moi d'organiser tout ce que je fais, que ce soit dans ma vie professionnelle ou personnelle. Cela me permet de toujours savoir ce que j'ai à faire, de ne pas me laisser submerger et d'assurer un travail de grande qualité.",
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
      "L'ingéniosité est la capacité à trouver des solutions à des problèmes, complexes ou non, uniquement à partir de connaissances et de ressources déjà existantes.",
    imageSrc: IngeniositeImage,
    localLink: "/competences/ingeniosite",
    type: "soft",
    displayable: true,
  },
  {
    id: "polyvalence",
    title: "Polyvalence",
    description:
      "La polyvalence est la capacité à s'adapter et à exceller dans différents domaines, tâches ou rôles.",
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
      "Flutter est un framework open source de développement d'applications mobiles, web et ordinateur développé par Google. Il permet de créer des applications performantes et esthétiques en utilisant un langage de programmation unique, c'est-à-dire qu'avec une seule base de code, on peut créer des applications pour quasiment toutes les plateformes (IOS, Android, Web, Windows, MacOS, Linux).",
    imageSrc: FlutterImage,
    localLink: "/competences/flutter",
    type: "hard",
    displayable: true,
  },
  {
    id: "nodejs",
    title: "NodeJS",
    description:
      "Node.js est un environnement d'exécution JavaScript côté serveur open-source qui permet aux développeurs de créer des applications web évolutives et performantes.",
    imageSrc: NodejsImage,
    localLink: "/competences/nodejs",
    type: "hard",
    displayable: true,
  },
  {
    id: "docker",
    title: "Docker",
    description:
      "Docker est une plateforme open-source de conteneurisation qui permet de créer, déployer et exécuter des applications dans des conteneurs.",
    imageSrc: DockerImage,
    localLink: "/competences/docker",
    type: "hard",
    displayable: true,
  },
  {
    id: "linux",
    title: "Linux",
    description:
      "Linux est un noyau de système d'exploitation libre et open source, développé initialement par Linus Torvalds en 1991. Il est utilisé dans une grande variété de systèmes, allant des serveurs aux ordinateurs personnels, en passant par les appareils mobiles et les systèmes embarqués.",
    imageSrc: LinuxImage,
    localLink: "/competences/linux",
    type: "hard",
    displayable: true,
  },
  {
    id: "documentation",
    title: " Ma Documentation",
    description:
      "Savoir rédiger une bonne documentation, qu'elle soit technique ou destinée aux utilisateurs, consiste à produire un document à la fois clair et précis. Il explique de manière simple comment utiliser un produit ou un service, tout en fournissant suffisamment de détails pour comprendre ses fonctionnalités et ses avantages.",
    imageSrc: DocumentationImage,
    localLink: "/competences/documentation",
    type: "hard",
    displayable: true,
  },
  {
    id: "gestion-de-projet",
    title: "Gestion de projet",
    description:
      "La gestion de projet est une compétence qui consiste à planifier, organiser, diriger et contrôler les ressources (humaines, financières, matérielles) pour atteindre des objectifs spécifiques dans un délai imparti. Elle implique la coordination de différentes tâches et activités pour assurer la réussite d'un projet, en respectant les contraintes de temps, de budget et de qualité. La gestion de projet nécessite également une communication efficace, c'est pourquoi elle est souvent associée à la compétence de gestion d'équipe.",
    imageSrc: GestionProjetImage,
    localLink: "/competences/gestion-de-projet",
    type: "hard",
    displayable: true,
  },
];

/**
 * Récupère une compétence à partir de son ID
 * @param competenceId L'ID de la compétence à récupérer
 * @returns La compétence correspondante à l'ID, ou undefined si aucune compétence ne correspond à l'ID
 */
export function getCompetenceById(competenceId: string): CompetencePreview | undefined {
  try {
    return competencesPreviewList.find((competence) => competence.id === competenceId);
  } catch (error) {
    console.error(`Error occurred while fetching competence with ID ${competenceId}:`, error);
    return undefined;
  }
}
