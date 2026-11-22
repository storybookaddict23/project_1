import { useState } from "react";
import { questions } from "./questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(answer);

    if (answer === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="quiz-container">
        <div className="quiz-card result-card">
          <h1>Quiz Completed</h1>

          <h2>
            Your Score: {score} / {questions.length}
          </h2>

          <p>
            {score === questions.length
              ? "Excellent! You got everything correct!"
              : score >= questions.length / 2
              ? "Good job!"
              : "Keep practicing!"}
          </p>

          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h1>React Quiz</h1>

        <div className="quiz-info">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>

          <span>Score: {score}</span>
        </div>

        <div className="progress">
          <div
            className="progress-bar"
            style={{
              width: `${
                ((currentQuestion + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>

        <h2>{question.question}</h2>

        <div className="answers">
          {question.options.map((option, index) => {
            let className = "answer-button";

            if (selectedAnswer !== null) {
              if (option === question.answer) {
                className += " correct";
              } else if (option === selectedAnswer) {
                className += " wrong";
              }
            }

            return (
              <button
                key={index}
                className={className}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selectedAnswer !== null && (
          <button className="next-button" onClick={nextQuestion}>
            {currentQuestion + 1 === questions.length
              ? "Show Result"
              : "Next Question"}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;