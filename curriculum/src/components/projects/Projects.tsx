import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import './projects.css';
import projectsData from './projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Project } from './Project';

const Projects: React.FC = () => {
  const { i18n, t } = useTranslation('translation');
  const currentLang = i18n.language;
  const projects: Project[] = projectsData.projects;
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
                // @ts-ignore
                text={project.text[currentLang]}
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
