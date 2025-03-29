export interface Project {
  title: string;
  text: {
    it: string;
    en: string;
  };
  tags: string[];
  githubLink: string;
  status: String;
}