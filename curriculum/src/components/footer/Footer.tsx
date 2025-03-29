import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './footer.css';

/**
 * Footer Component.
 *
 * This component renders a footer containing two columns.
 * The first column displays design inspiration information and a link to GitHub.
 * The second column displays contact information.
 *
 * @returns {JSX.Element} The Footer component.
 */
const Footer = () => {
  const { t } = useTranslation('translation');
  return (
    <footer className="footer">
      <div className="footer-divider" />
      <Container>
        <Row>
          <Col md={6}>
            <h3 className='footer-title'>{t('designTitle')}</h3>
            <p>{t('disignText')}</p>
            <a
              href='https://github.com/DanieleF36/Curriculum'
              className='design-link'
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('info')}
            </a>
          </Col>
          <Col md={6} >
            <h3 className='footer-title'>{t('contactMe')}</h3>
            <p>Email: daniele.femia@outlook.com</p>
            <p>Telegram: Daniele_F36</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
