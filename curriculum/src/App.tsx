import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/Hero';
import { Container } from 'react-bootstrap';
import Contact from './components/Contact';

function App() {
  return (
    <Container fluid>
      <Header />
      <Hero />
      <Contact/>
    </Container>
  );
}

export default App;
