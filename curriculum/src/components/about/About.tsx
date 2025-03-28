import { Col, Container, Row, Card } from "react-bootstrap";
import { faRocket, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <Row className="justify-content-center">
            <Col>
              <Card className="hover-card-secondary">
                <Card.Body >
                  <FontAwesomeIcon icon={faSuitcase} className="text-card-secondary"/>
                  <Card.Title className="text">{t('projectsDone')}</Card.Title>
                  <Card.Text className="text">5</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="hover-card-tertiary">
                <Card.Body>
                  <FontAwesomeIcon icon={faRocket} className="text-card-tertiary"/>
                  <Card.Title className="text">{t('ongiongProjects')}</Card.Title>
                  <Card.Text className="text">5</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  )
};

export default About;
