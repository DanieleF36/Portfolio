import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './i18n';

import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import StarField from './components/intro/StarField';
import MeteorShower from './components/intro/MeteorShower';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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
      <Container fluid className='content-wrapper'>
        <Header selectedLan={selectedLanguage} langs={languages} changeLan={changeLan}/>
        <Intro />
      </Container>
    </>
  );
}

export default App;
