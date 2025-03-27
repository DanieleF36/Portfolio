import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './socialCircle.css';

interface SocialCircleProps {
  icon: IconDefinition;
  link: string;
}

const SocialCircle: React.FC<SocialCircleProps> = ({ icon, link }) => {
  return (
    <a
      href={link}
      className="social-icon-wrapper"
    >
      <FontAwesomeIcon icon={icon} className="social-icon" />
    </a>
  );
};

export default SocialCircle;
