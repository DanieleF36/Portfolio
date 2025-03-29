import { Table } from 'react-bootstrap';
import { ExamsTableProps } from './ExamsTableProps';

/**
 * ExamsTable Component.
 * 
 * Displays a table of exams passed and their mark via props.
 * Each row is clickable and, if a URL is present, opens the associated link in a new window.
 *
 * @param {ExamsTableProps} props - The component props, containing the array of exams.
 * @returns {JSX.Element} The exam table.
 */
const ExamsTable: React.FC<ExamsTableProps> = ({ exams }) => {
  const handleRowClick = (url: string) => {
    if(url.length != 0)
      window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Table striped bordered hover>
      <thead>
          <tr>
          <th>Esame</th>
          <th>Voto</th>
          </tr>
      </thead>
      <tbody>
        {exams.map((exam) => (
        <tr
            key={exam.name}
            onClick={() => handleRowClick(exam.url)}
            style={{ cursor: 'pointer' }}
        >
            <td>{exam.name}</td>
            <td>{exam.grade}</td>
        </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ExamsTable;