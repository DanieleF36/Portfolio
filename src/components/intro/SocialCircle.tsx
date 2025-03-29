import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './socialCircle.css';

interface SocialCircleProps {
  icon: IconDefinition;
  link: string;
}
/**
 * SocialCircle Component.
 *
 * This component renders a circular social media icon wrapped in a link.
 * The icon is rendered using FontAwesomeIcon and links to the provided URL.
 *
 * @param {SocialCircleProps} props - The component props containing the icon definition and URL.
 * @returns {JSX.Element} The SocialCircle component.
 */
const SocialCircle: React.FC<SocialCircleProps> = ({ icon, link }) => {
  return (
    <a
      href={link}
      className="social-icon-wrapper"
      target='_blank' 
      rel='noopener noreferrer'
    >
      <FontAwesomeIcon icon={icon} className="social-icon" />
    </a>
  );
};

export default SocialCircle;
