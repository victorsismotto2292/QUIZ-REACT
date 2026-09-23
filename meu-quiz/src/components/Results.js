'use client';
import React from 'react';

const Results = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="quiz-card">
      <h1>Resultado Final</h1>
      <div className="result-score">
        {score} / {totalQuestions}
      </div>
      <div className="result-percent">
        Você acertou {percentage}% das questões!
      </div>
      <button className="btn-primary" onClick={onRestart}>
        Refazer Quiz
      </button>
    </div>
  );
};

export default Results;
