import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard'

const Projects: React.FC = () => {
  return (
    <Container fluid>
      <ProjectCard 
        imageUrl="./Back Office.png"
        title="Snipping Tool"
        text="string"
        tags={["ciao", "ciao"]}
        githubLink=""
      />
    </Container>
  );
};

export default Projects;
