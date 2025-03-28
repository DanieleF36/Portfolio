import { Table } from 'react-bootstrap';
import { ExamsTableProps } from './ExamsTableProps';

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