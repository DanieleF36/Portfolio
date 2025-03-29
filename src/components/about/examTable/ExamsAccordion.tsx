import { useState } from 'react';
import { Table, Collapse } from 'react-bootstrap';
import ExamsTable from './ExamsTable';
import { Exam } from './exam';
import examData from './exams.json';
import './examsAccordion.css';

/**
 * ExamsAccordion Component.
 * 
 * Displays an accordion with two sections, my universities, containing exam tables.
 * Clicking on the header row expands or collapses the corresponding section.
 *
 * @returns {JSX.Element} The ExamsAccordion component.
 */

const ExamsAccordion: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  const unicalExams: Exam[] = examData.unical;
  const politoExams: Exam[] = examData.polito;

  return (
    <Table>
      <tbody>
        <tr onClick={() => toggleSection('unical')} className="accordion-header">
          <td className="accordion-cell">
            <a href="https://www.unical.it/" target="_blank" rel="noopener noreferrer">
              <img src="/unical.png" alt="Logo Unical" className="accordion-logo"/>
            </a>
            <span className="accordion-title">Unical</span>
            <span className="accordion-subtitle">107/110</span>
          </td>
        </tr>
        <tr>
          <td className="accordion-content">
            <Collapse in={openSection === 'unical'}>
              <div className="custom-scrollbar">
                <ExamsTable exams={unicalExams} />
              </div>
            </Collapse>
          </td>
        </tr>

        <tr onClick={() => toggleSection('polito')} className="accordion-header alternate">
          <td className="accordion-cell">
            <a href="https://www.polito.it/" target="_blank" rel="noopener noreferrer">
              <img src="/polito.jpeg" alt="Logo Polito" className="accordion-logo"/>
            </a>
            <span className="accordion-title">Polito</span>
            <span className="accordion-subtitle">11/04/2025</span>
          </td>
        </tr>
        <tr>
          <td className="accordion-content">
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