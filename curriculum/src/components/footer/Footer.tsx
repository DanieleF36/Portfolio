import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-divider" />
      <Container>
        <Row>
          <Col md={6}>
            <h3 className='footer-title'>Design ispirato da</h3>
            <p>Video di tiktok sconosciuto</p>
            <a
              href='https://github.com/DanieleF36/Curriculum'
              className='design-link'
              target="_blank"
              rel="noopener noreferrer"
            >
              Più informazioni su GitHub
            </a>
          </Col>
          <Col md={6} >
            <h3 className='footer-title'>Contact Me</h3>
            <p>Email: daniele.femia@outlook.com</p>
            <p>Telegram: Daniele_F36</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
