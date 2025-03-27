import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import StarField from './components/intro/StarField';
import MeteorShower from './components/intro/MeteorShower';

function App() {
  return (
    <>
      <StarField />
      <MeteorShower />
      <Container fluid className='content-wrapper'>
        <Header />
      </Container>
    </>
  );
}

export default App;
