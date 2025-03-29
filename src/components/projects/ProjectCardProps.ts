import { ProjectStatus } from "./Project";

export interface ProjectCardProps {
  title: string;
  text: string;
  tags: string[];
  githubLink: string;
  status: ProjectStatus;
}