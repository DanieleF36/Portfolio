import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './i18n';

import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import StarField from './components/intro/StarField';
import MeteorShower from './components/intro/MeteorShower';
import About from'./components/about/About';
import Projects
 from './components/projects/Projects';
export interface Language {
  code: string;
  label: string;
  flag: string;
}

function App() {
  const { i18n } = useTranslation();
  const languages: Language[] = [
    { code: 'en', label: 'English', flag: 'GB' },
    { code: 'it', label: 'Italiano', flag: 'IT' },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const changeLan = (lan: Language)=>{
    setSelectedLanguage(lan)
    i18n.changeLanguage(lan.code)
  }
  return (
    <>
      <StarField />
      <MeteorShower />
      <Header selectedLan={selectedLanguage} langs={languages} changeLan={changeLan}/>
      <Container fluid className='content-wrapper'>
        <section className="section" id="intro">
          <Intro />
        </section>
        <section className="section" id="about">
          <About />
        </section>
        <section className="section" id="projects">
          <Projects/>
        </section>
      </Container>
    </>
  );
}

export default App;
