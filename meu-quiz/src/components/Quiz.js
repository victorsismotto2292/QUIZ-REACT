'use client';
import React from 'react';

const Quiz = ({ questions, currentQuestionIndex, selectedAnswer, onSelectAnswer, onNext, progress }) => {
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-card">
      <div className="progress-text">
        {progress}
      </div>
      <h2>{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => onSelectAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="btn-primary"
        onClick={onNext}
        disabled={selectedAnswer === null}
        style={{ width: '100%' }}
      >
        Próxima
      </button>
    </div>
  );
};

export default Quiz;
