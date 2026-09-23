'use client';
import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="quiz-card">
      <h1>Super-Heróis Quiz 🦸‍♂️</h1>
      <p>Teste seus conhecimentos sobre os maiores heróis da Marvel e DC!</p>
      <div style={{ marginTop: '2rem' }}>
        <button className="btn-primary" onClick={onStart}>
          Iniciar Quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
