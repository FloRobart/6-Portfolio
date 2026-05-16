import type { ImageMetadata } from "astro";

/* Experience images */
import QowisioImage from "@assets/experiences/qowisio.png";
import LalachanteImage from "@assets/experiences/lalachante.png";
import IscodImage from "@assets/experiences/iscod.png";
import IutLeHavreImage from "@assets/experiences/iut_le_havre.png";
import LyceeSadiCarnotImage from "@assets/experiences/lycee_sadi_carnot.png";
import LyceeDuplessisImage from "@assets/experiences/lycee_duplessis.png";

export interface ExperiencePreview {
  id: string;
  title: string;
  description: string;
  imageSrc: ImageMetadata;
  localLink: string;
  externalLink?: string;
  displayable: boolean;
}

export const experiencesPreviewList: ExperiencePreview[] = [
  {
    id: "qowisio",
    title: "Qowisio",
    description:
      "Fondée en 2009 près d'Angers et intégrée au groupe Ocea Smart Building en 2022, Qowisio est une entreprise spécialisée dans les solutions de l'Internet des Objets (IoT). Agissant comme le pôle recherche et développement du groupe, elle conçoit des systèmes innovants pour connecter, surveiller et gérer les équipements (eau, chauffage, climatisation) des bâtiments résidentiels et tertiaires. Ses technologies sur mesure permettent d'optimiser l'efficacité énergétique, le confort et la durabilité des infrastructures.",
    imageSrc: QowisioImage,
    localLink: "/experiences/qowisio",
    externalLink: "https://www.qowisio.com/",
    displayable: true,
  },
  {
    id: "lalachante",
    title: "Lalachante",
    description:
      "Lalachante est un studio de champ avec du matériel professionnel, mais déstiné à être utilisé par des particuliers.",
    imageSrc: LalachanteImage,
    localLink: "/experiences/lalachante",
    externalLink: "https://www.lalachante.fr/",
    displayable: true,
  },
  {
    id: "iscod",
    title: "Iscod",
    description:
      "Pionnière du digital learning, ISCOD est une grande école spécialisée dans le Business et l'IT en alternance. Son modèle pédagogique unique repose sur un rythme optimisé (généralement 1 jour de formation et 4 jours en entreprise) et un accompagnement personnalisé par un coach dédié",
    imageSrc: IscodImage,
    localLink: "/experiences/iscod",
    externalLink: "https://www.iscod.fr/formation-ingenierie-avancee-du-logiciel-en-alternance",
    displayable: true,
  },
  {
    id: "iut-le-havre",
    title: "IUT du Havre",
    description:
      "L'IUT du Havre est une institution d'enseignement supérieur public qui propose notamment des formations en informatique.",
    imageSrc: IutLeHavreImage,
    localLink: "/experiences/iut-le-havre",
    externalLink: "https://www-iut.univ-lehavre.fr/info",
    displayable: true,
  },
  {
    id: "lycee-sadi-carnot",
    title: "Lycée Sadi Carnot - Jean Bertin",
    description:
      "Le lycée Sadi Carnot - Jean Bertin est un établissement d'enseignement secondaire public situé à Saumur. Il propose des formations générales, technologiques et professionnelles.",
    imageSrc: LyceeSadiCarnotImage,
    localLink: "/experiences/lycee-sadi-carnot",
    externalLink: "https://lyc-bertin-carnot.paysdelaloire.e-lyco.fr/",
    displayable: true,
  },
  {
    id: "lycee-duplessis",
    title: "Lycée Duplessis Mornay",
    description:
      "Le lycée Duplessis Mornay est un établissement d'enseignement secondaire public situé à Saumur. Il propose des formations générales, et artistiques.",
    imageSrc: LyceeDuplessisImage,
    localLink: "/experiences/lycee-duplessis",
    externalLink: "https://duplessis-mornay.paysdelaloire.e-lyco.fr/",
    displayable: true,
  },
];

/**
 * Récupère une expérience par son ID.
 * @param experienceId L'ID de l'expérience à récupérer.
 * @returns L'expérience correspondante ou undefined si elle n'est pas trouvée ou en cas d'erreur.
 */
export function getExperienceById(experienceId: string): ExperiencePreview | undefined {
  try {
    return experiencesPreviewList.find((experience) => experience.id === experienceId);
  } catch (error) {
    console.error(`Error occurred while fetching experience with ID ${experienceId}:`, error);
    return undefined;
  }
}
