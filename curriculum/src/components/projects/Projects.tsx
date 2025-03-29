import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import { ProjectCardProps } from './ProjectCardProps';
import './projects.css';
import projectsData from './projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Projects: React.FC = () => {
  const { t } = useTranslation('translation');
  const projects: ProjectCardProps[] = projectsData.projects;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    const cardWidth =
      scrollContainerRef.current?.firstElementChild?.getBoundingClientRect().width || 0;
    scrollContainerRef.current?.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const cardWidth =
      scrollContainerRef.current?.firstElementChild?.getBoundingClientRect().width || 0;
    scrollContainerRef.current?.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  return (
    <Container fluid>
      <h1 className="project-title">{t('projectTitle')}</h1>
      <div className="scroll-wrapper">
        <button className="scroll-arrow" onClick={scrollLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Row className="scrolling-row" ref={scrollContainerRef}>
          {projects.map((project, index) => (
            <Col key={index} xs="auto" className="scrolling-col">
              <ProjectCard 
                title={project.title}
                text={project.text}
                tags={project.tags}
                githubLink={project.githubLink}
                status={project.status}
              />
            </Col>
          ))}
        </Row>
        <button className="scroll-arrow" onClick={scrollRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </Container>
  );
};

export default Projects;
