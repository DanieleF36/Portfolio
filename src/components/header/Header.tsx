import React, { useState, useEffect, useRef  } from 'react';
import {Navbar, Nav, Button, Container, Dropdown} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {HeaderProps} from './HeaderProps'
import ReactCountryFlag from 'react-country-flag';
import './header.css'

/**
 * Header Component
 *
 * This component renders a fixed navigation bar at the top of the page using React Bootstrap.
 * It dynamically monitors the scroll position and the navbar’s height to determine when to apply
 * a "scrolled" class for styling adjustments. When the vertical scroll position exceeds the navbar's
 * current height, the component applies the "scrolled" class to enable effects like a translucent
 * background with a blur on the content behind the navbar.
 *
 * Features:
 * - Displays a brand logo that currently links to LinkedIn (update the URL as needed).
 * - Provides a centered navigation menu with links ("About", "Projects", "Slills").
 * - Includes a "Hire Me" button aligned to the right.
 *
 * Mechanism:
 * - Uses the useRef hook to obtain a reference to the navbar's DOM element and dynamically measure its height.
 * - Sets up a scroll event listener (via useEffect) that compares window.scrollY with the navbar's height.
 *   If the scroll position exceeds the navbar's height, the "scrolled" state is set to true, applying the "scrolled" class.
 * - Ensures proper cleanup of the scroll event listener when the component is unmounted.
 * *
 * @returns {JSX.Element} The Header component with responsive scroll-based styling.
 */
const Header: React.FC<HeaderProps> = ({selectedLan, langs, changeLan}) => {
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('translation');

  useEffect(() => {
    const handleScroll = () => {
      // Get the current height of the navbar
      const navbarHeight = navbarRef.current?.offsetHeight || 0;

      if (window.scrollY > navbarHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar fixed='top' className={scrolled ? 'navbar-custom scrolled' : 'navbar-custom'}>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href='https://www.linkedin.com/in/daniele-femia-10974b359' target='_blank' rel='noopener noreferrer'> 
          DF36
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#about">{t('aboutLabel')}</Nav.Link>
          <Nav.Link href="#projects">{t('projectLabel')}</Nav.Link>
          <Nav.Link href="#skills">{t('skillsLabel')}</Nav.Link>
        </Nav>
        <Button variant="primary" href="mailto:daniele.femia@outlook.com" className="justify-content-end rounded-button">
          {t('hireButton')}
        </Button>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-language" className="custom-dropdown-toggle">
            <ReactCountryFlag 
              countryCode={selectedLan.flag} 
              svg 
              style={{ width: '1.5em', height: '1.5em' }} 
              title={selectedLan.label}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu align="end">
            {langs
              .filter(lang => lang.code !== selectedLan.code)
              .map(lang => (
                <Dropdown.Item key={lang.code} onClick={() => changeLan(lang)}>
                  <ReactCountryFlag 
                    countryCode={lang.flag} 
                    svg 
                    style={{ width: '1.5em', height: '1.5em' }} 
                    title={lang.label}
                  />{' '}
                  {lang.label}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
