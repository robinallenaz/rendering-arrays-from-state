import React from 'react';
import './Score.css';

function Score({ date, score }) {
  return (
    <div className="score-item">
      <span className="date">{date}</span>
      <span className="score">{score}</span>
    </div>
  );
}

export default Score;
