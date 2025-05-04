import React, { useState } from 'react';
import { Person } from '../Interfaces/Person';
import dayjs from 'dayjs';

interface SchedulerViewProps {
  team: Person[];
  candidates: Person[];
}

interface Scheduled {
  candidate: string;
  slot: string;
}

const Scheduler: React.FC<{SchedulerViewProps}> = ({ team, candidates }) => {
  const [scheduled, setScheduled] = useState<Scheduled | null>(null);

  const getCommonAvailability = (): string[] => {
    if (team.length === 0) return [];
    let common = team[0].availability;
    for (let i = 1; i < team.length; i++) {
      common = common.filter(slot => team[i].availability.includes(slot));
    }
    const candidateSlots = candidates[0]?.availability || [];
    return common.filter(slot => candidateSlots.includes(slot));
  };

  const handleSchedule = (slot: string) => {
    setScheduled({ candidate: candidates[0].name, slot });
  };

  const slots = getCommonAvailability();

  return (
    <div>
      <h3>Schedule Interview</h3>
      {slots.length > 0 ? (
        <ul>
          {slots.map(slot => (
            <li key={slot}>
              {dayjs(slot).format('MMM D, h:mm A')}
              <button onClick={() => handleSchedule(slot)}>Schedule</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No overlapping availability found.</p>
      )}
      {scheduled && (
        <p>✅ Interview scheduled with {scheduled.candidate} at {dayjs(scheduled.slot).format('MMM D, h:mm A')}</p>
      )}
    </div>
  );
};

export default Scheduler;
