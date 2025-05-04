import React from 'react';
import { Person } from '../Interfaces/Person';

interface Props {
  team: Person[];
}

const TeamList: React.FC<Props> = ({ team }) => (
  <div>
    <h3>Team Members</h3>
    <ul>
      {team.map(member => (
        <li key={member.id}>
          {member.name}: {member.availability.join(', ')}
        </li>
      ))}
    </ul>
  </div>
);

export default TeamList;
