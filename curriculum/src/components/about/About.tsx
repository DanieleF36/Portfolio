import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import ExamsAccordion from "./examTable/ExamsAccordion";
import './about.css'

const About = () => {
  const { t } = useTranslation('translation');
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col md={6}>
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
