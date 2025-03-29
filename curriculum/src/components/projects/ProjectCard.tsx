import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import './ProjectCard.css';
import { ProjectCardProps } from './ProjectCardProps'

import { useTranslation } from 'react-i18next';
import { ProjectStatus } from './Project';

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  text,
  tags,
  githubLink,
  status
}) => {
  const { t } = useTranslation('translation');
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
      title={t('viewCode')}
    >
      <Card className="custom-card">
        <Badge className={status == ProjectStatus.Ongoing ? 'custom-badge-ongoing' : status == ProjectStatus.Done ? 'custom-badge-done' : 'custom-badge-project' }>
          {status}
        </Badge>
        <Card.Body className="custom-card-body">
          <Card.Title className="custom-card-title">{title}</Card.Title>
          <Card.Text className="custom-card-text">{text}</Card.Text>
          <div className="custom-card-tags">
            {tags.map((tag, index) => (
              <button
                key={index}
                type="button"
                className="custom-card-tag"
                disabled
              >
                {tag}
              </button>
            ))}
          </div>
        </Card.Body>
      </Card>
    </a>
  );
};

export default ProjectCard;
