import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import { calculateResult } from "../utils/calculateResult";

function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  function handleAnswer(answer) {
    setScores(prev => {
      const updated = { ...prev };
      for (const animal in answer.scores) {
        updated[animal] =
          (updated[animal] || 0) + answer.scores[animal];
      }
      return updated;
    });
    setCurrentQuestion(prev => prev + 1);
  }
  useEffect(() => {
    if (currentQuestion >= questions.length) {
      const result = calculateResult(scores);
      navigate(`/result?animal=${result}`);
    }
  }, [currentQuestion, scores, navigate]);
  if (currentQuestion >= questions.length) {
    return (
      <h1>
        Finding your marine personality... 🌊
      </h1>
    );
  }
  const question = questions[currentQuestion];
  return (
    <div className="quiz-page">
        <div className="quiz-container">
        <p className="progress">
            Question {currentQuestion + 1} / {questions.length}
        </p>
        <div className="progress-bar">
            <div
            className="progress-fill"
            style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
            />
        </div>
        <QuestionCard
            question={question.question}
            answers={question.answers}
            onAnswer={handleAnswer}
        />
        </div>
    </div>
    );
}
export default Quiz;