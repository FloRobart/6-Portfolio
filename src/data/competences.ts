import type { ImageMetadata } from "astro";

import FloraccessImage from "@assets/projects/floraccess/floraccess_1_white.png";

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
    id: "organisation",
    title: "Organisation",
    description:
      "<b>FlorAccess</b> est avant tout une <b>API d'authentification</b> utilisée par mes autres projets. Elle permet un <b>accès sécurisé</b> et <b>sans mot de passe</b> à toutes mes applications, le tout avec un seul compte utilisateur. <b>FlorAccess</b> est également une <b>application d'administration</b> disponible seulement pour moi et qui me permet de <b>gérer les utilisateurs</b>.",
    imageSrc: FloraccessImage,
    localLink: "/projets/floraccess",
    githubLink: "https://github.com/FloRobart/FlorAccess",
  },
];