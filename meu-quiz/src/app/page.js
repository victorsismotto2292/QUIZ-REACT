'use client';
import React, { useState } from 'react';
import StartScreen from '@/components/StartScreen';
import Quiz from '@/components/Quiz';
import Results from '@/components/Results';
import questions from '@/data/questions';
import './App.css';

export default function Page() {
  const [gameState, setGameState] = useState('start'); // 'start', 'quiz', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const startQuiz = () => {
    setGameState('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const handleSelectAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    // Verificar resposta
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    // Avançar ou Finalizar
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
    } else {
      setGameState('results');
    }
  };

  const restartQuiz = () => {
    setGameState('start');
  };

  return (
    <div className="quiz-container">
      {gameState === 'start' && (
        <StartScreen onStart={startQuiz} />
      )}
      {gameState === 'quiz' && (
        <Quiz
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNextQuestion}
          progress={`Pergunta ${currentQuestionIndex + 1} de ${questions.length}`}
        />
      )}
      {gameState === 'results' && (
        <Results
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}
