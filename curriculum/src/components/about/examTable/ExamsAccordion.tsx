import { useState } from 'react';
import { Table, Collapse } from 'react-bootstrap';
import ExamsTable from './ExamsTable'
import { Exam } from './exam';
import examData from './exams.json';
import './examsAccordion.css';

const ExamsAccordion: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  const unicalExams: Exam[] = examData.unical
  const politoExams: Exam[] = examData.polito
  
  return (
    <Table>
      <tbody>
        <tr
          onClick={() => toggleSection('unical')}
          style={{ cursor: 'pointer' }}
        >
          <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a
              href={"https://www.polito.it/"}
              target='_blank' 
              rel='noopener noreferrer'
            >
              <img 
                src="/unical.png" 
                alt="Logo Unical" 
                style={{ width: '30px', height: '30px', marginRight: '10px' }} 
              />
            </a>
            <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Unical</span>
          </td>
        </tr>
        <tr>
          <td style={{ padding: 0 }}>
            <Collapse in={openSection === 'unical'}>
              <div className="custom-scrollbar">
                <ExamsTable exams={unicalExams} />
              </div>
            </Collapse>
          </td>
        </tr>
        <tr
          onClick={() => toggleSection('polito')}
          style={{ cursor: 'pointer', backgroundColor: '#f1f1f1' }}
        >
          <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <a
              href={"https://www.unical.it/"}
              target='_blank' 
              rel='noopener noreferrer'
            >
              <img 
                src="/polito.jpeg" 
                alt="Logo Polito" 
                style={{ width: '30px', height: '30px', marginRight: '10px' }} 
              />
            </a>
            <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Polito</span>
          </td>
        </tr>
        <tr>
          <td style={{ padding: 0 }}>
            <Collapse in={openSection === 'polito'}>
              <div className="custom-scrollbar">
                <ExamsTable exams={politoExams} />
              </div>
            </Collapse>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
    
  
export default ExamsAccordion;  