import type { ImageMetadata } from "astro";

/* Experience images */
import QowisioImage from "@assets/experiences/qowisio.png";
import ExtraitdAnjouImage from "@assets/experiences/extrait_danjou.png";
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
      "Fondée en 2009 près d'<b>Angers</b> et intégrée au groupe <a class=\"paragraph-link\" href=\"https://www.groupe-ocea.fr/qui-sommes-nous/\">Ocea Smart Building</a> en 2022, Qowisio est une entreprise spécialisée dans les solutions de <a class=\"paragraph-link\" href=\"https://fr.wikipedia.org/wiki/Internet_des_objets\">l'Internet des Objets (IoT)</a>. Agissant comme le pôle <b>recherche et développement</b> du groupe, elle <b>conçoit des systèmes innovants</b> pour connecter, surveiller et gérer les équipements (eau, chauffage, climatisation) des bâtiments résidentiels et tertiaires. Ses <b>technologies sur mesure</b> permettent d'<b>optimiser l'efficacité énergétique</b>, le confort et la durabilité des infrastructures.",
    imageSrc: QowisioImage,
    localLink: "/experiences/qowisio",
    externalLink: "https://www.qowisio.com/",
    displayable: true,
  },
  {
    id: "extrait-danjou",
    title: "Extrait d'Anjou",
    description:
      "Extrait d'Anjou est une entreprise spécialisée dans la production d'extraits de plantes, notamment d'artichauts.",
    imageSrc: ExtraitdAnjouImage,
    localLink: "/experiences/extrait-danjou",
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
