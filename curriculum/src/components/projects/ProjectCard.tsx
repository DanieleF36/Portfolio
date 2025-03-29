import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import './ProjectCard.css';

interface CustomCardProps {
  imageUrl: string;
  title: string;
  text: string;
  tags: string[];
  githubLink: string;
}

const ProjectCard: React.FC<CustomCardProps> = ({
  imageUrl,
  title,
  text,
  tags,
  githubLink,
}) => {
  const { t } = useTranslation('translation');
  return (
    <Card className="custom-card">
      {/* Parte superiore: immagine (50% della card) */}
      <div className="custom-card-image-container">
        <Card.Img variant="top" src={imageUrl} className="custom-card-img" />
        <div className="custom-card-overlay" />
      </div>

      {/* Parte inferiore: testo e footer (50% della card) */}
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
      <Card.Footer className="custom-card-footer">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="custom-card-github"
        >
          <FontAwesomeIcon icon={faGithub} /> 
          <span/>
          {t('viewCode')}
        </a>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
