export interface Project {
  title: string;
  text: {
    it: string;
    en: string;
  };
  tags: string[];
  githubLink: string;
  status: ProjectStatus;
}

export enum ProjectStatus {
  SchoolProject = "School Project",
  Ongoing = "Ongoing",
  Done = "Done"
}