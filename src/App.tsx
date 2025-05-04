import React, { Component, useState } from 'react';
import './App.css';
import { teamMembers, candidates } from './Data/MockData';
import TeamList from './Views/TeamListView';
import CandidateList from './Views/CandidateView';
import Scheduler from './Views/SchedulerView';
import { Person } from './Interfaces/Person';

interface AppViewProps {}
interface AppViewState {
  selectedCandidateId: number;
  selectedCandidate: Person | undefined;
}

export class AppView extends React.Component<AppViewProps, AppViewState> {

  constructor(props: AppViewProps) {
    super(props);
    this.state = {
      selectedCandidateId: candidates[0].id,
      selectedCandidate: candidates.find(c => c.id === this.state.selectedCandidateId ),
    };
  }

  // handleCandidateId

  render() {
    return (
      <div className="App" style={{ padding: 20 }}>
        <h1>Interview Scheduler</h1>

        <label htmlFor="candidateSelect"><strong>Select Candidate:</strong></label>
        <select
          id="candidateSelect"
          value={this.state.selectedCandidateId}
          // onChange={(e) => setSelectedCandidateId(Number(e.target.value))}
          
          style={{ marginLeft: '10px', marginBottom: '20px' }}
        >
          {candidates.map(candidate => (
            <option key={candidate.id} value={candidate.id}>
              {candidate.name}
            </option>
          ))}
        </select>

        {/* <TeamList team={teamMembers} />
        {this.state.selectedCandidate && <CandidateList candidates={[selectedCandidate]} />}
        {this.state.selectedCandidate && <Scheduler team={teamMembers} candidates={[selectedCandidate]} />} */}
      </div>
    );
  }
}