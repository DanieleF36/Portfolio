import { useState, useEffect, useRef  } from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import './header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

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
        {
          //TODO cambiare href con il mio linkedin
        }
        <Navbar.Brand href='https://it.linkedin.com/'> 
          <img
            src="/path/to/logo.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#slills">Slills</Nav.Link>
        </Nav>
        <Button variant="primary" href="#sezione-speciale" className="justify-content-end">
            Hire Me
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
