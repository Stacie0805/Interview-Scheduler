import React from 'react';
import { Person } from '../Interfaces/Person';

interface CandidateViewProps {
  candidates: Person[];
}

const CandidateList: React.FC<CandidateViewProps> = ({ candidates }) => (
  <div>
    <h3>Candidates</h3>
    <ul>
      {candidates.map(c => (
        <li key={c.id}>
          {c.name}: {c.availability.join(', ')}
        </li>
      ))}
    </ul>
  </div>
);

export default CandidateList;
