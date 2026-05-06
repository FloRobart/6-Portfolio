import type { ImageMetadata } from "astro";

import FloraccessImage from "@assets/projects/floraccess/floraccess_1_white.png";

import FlutterImage from "@assets/competences/flutter.png";
import NodejsImage from "@assets/competences/nodejs.png";
import DockerImage from "@assets/competences/docker.png";
import LinuxImage from "@assets/competences/linux.jpeg";
import DocumentationImage from "@assets/competences/documentation.jpg";

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
    description: "",
    imageSrc: FloraccessImage,
    localLink: "/projets/floraccess",
    type: "soft",
    displayable: true,
  },
  {
    id: "bienveillance",
    title: "Bienveillance",
    description: "",
    imageSrc: FloraccessImage,
    localLink: "/projets/floraccess",
    type: "soft",
    displayable: true,
  },
  {
    id: "ingéniosité",
    title: "Ingéniosité",
    description: "",
    imageSrc: FloraccessImage,
    localLink: "/projets/floraccess",
    type: "soft",
    displayable: true,
  },
  {
    id: "polivalence",
    title: "Polivalence",
    description: "",
    imageSrc: FloraccessImage,
    localLink: "/projets/floraccess",
    type: "soft",
    displayable: true,
  },
  {
    id: "gestion-de-projet",
    title: "Gestion de projet",
    description: "",
    imageSrc: FloraccessImage,
    localLink: "/projets/floraccess",
    type: "soft",
    displayable: true,
  },

  /* Hard skills */
  {
    id: "flutter",
    title: "Flutter",
    description: "",
    imageSrc: FlutterImage,
    localLink: "/projets/floraccess",
    type: "hard",
    displayable: true,
  },
  {
    id: "nodejs",
    title: "NodeJS",
    description: "",
    imageSrc: NodejsImage,
    localLink: "/projets/floraccess",
    type: "hard",
    displayable: true,
  },
  {
    id: "docker",
    title: "Docker",
    description: "",
    imageSrc: DockerImage,
    localLink: "/projets/floraccess",
    type: "hard",
    displayable: true,
  },
  {
    id: "linux",
    title: "Linux",
    description: "",
    imageSrc: LinuxImage,
    localLink: "/projets/floraccess",
    type: "hard",
    displayable: true,
  },
  {
    id: "documentation",
    title: "Documentation",
    description: "",
    imageSrc: DocumentationImage,
    localLink: "/projets/floraccess",
    type: "hard",
    displayable: true,
  },
];
