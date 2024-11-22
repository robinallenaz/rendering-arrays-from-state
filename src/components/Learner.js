import React from 'react';
import Score from './Score';
import './Learner.css';

function Learner({ name, bio, scores }) {
  return (
    <div className="learner-card">
      <h2>{name}</h2>
      <p className="bio">{bio}</p>
      <div className="scores-container">
        <h3>Scores</h3>
        {scores.map((score, index) => (
          <Score 
            key={index}
            date={score.date}
            score={score.score}
          />
        ))}
      </div>
    </div>
  );
}

export default Learner;
