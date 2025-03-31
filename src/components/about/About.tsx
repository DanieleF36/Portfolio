import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import ExamsAccordion from "./examTable/ExamsAccordion";
import './about.css'

/**
 * About Component.
 * 
 * This component displays a section with two columns:
 * - The first column contains all the exams.
 * - The second column shows information "about me".
 *
 * @returns {JSX.Element} The About component.
 */
const About = () => {
  const { t } = useTranslation('translation');
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col md={6} className="mb-3 mb-md-0">
          <ExamsAccordion/>
        </Col>

        <Col md={6}>
          <h1 className="about-me">{t('aboutMeLabel')}</h1>
          <p className="text-left">{t('aboutText')}</p>
        </Col>

      </Row>
    </Container>
  )
};

export default About;
