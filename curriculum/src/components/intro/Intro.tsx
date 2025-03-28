import { Container, Row, Col, Image } from 'react-bootstrap';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SocialCircle from './SocialCircle';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import './intro.css'

const Intro = () => {
  const { t } = useTranslation('translation');
  return (
      <Container>
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
          <Image
            src="/me.JPG"
            alt="Your Photo"
            roundedCircle
            fluid
          />
        </Col>

        <Col xs={12} md={8}>
          <h1 className="name-title">Daniele Femia</h1>
          <h2 className="role-title">{t('roleTitle')}</h2>
          <hr className="separator" />
          <p className="intro-text">
            {t('introText')}
          </p>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <SocialCircle icon={faGithub} link="https://github.com/DanieleF36" />
            <SocialCircle icon={faLinkedin} link="https://linkedin.com/in/tuonome" />
            <SocialCircle icon={faEnvelope} link="mailto:daniele.femia@outlook.com" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Intro