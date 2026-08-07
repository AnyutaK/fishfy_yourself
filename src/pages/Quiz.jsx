import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import { calculateResult } from "../utils/calculateResult";
import ProgressBar from "../components/ProgressBar";
import LoadingScreen from "../components/LoadingScreen";

function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [showLoading, setShowLoading] = useState(false);
  function handleAnswer(answer) {
    setScores(prev => {
      const updated = { ...prev };
      for (const animal in answer.scores) {
        updated[animal] =
          (updated[animal] || 0) + answer.scores[animal];
      }
      return updated;
    });
    setCurrentQuestion(prev => {
    const next = prev + 1;

    if (next >= questions.length) {
      setShowLoading(true);
    }

    return next;
  });
  }
  useEffect(() => {
  if (currentQuestion >= questions.length && showLoading) {

    const result = calculateResult(scores);

    localStorage.setItem(
      "fishifyResult",
      JSON.stringify(result)
    );

    const timer = setTimeout(() => {
  navigate(
    `/result?animal=${result.animal}&almost=${result.almost
      .map(item => item.id)
      .join(",")}`
  );
}, 6500);

    return () => clearTimeout(timer);
  }

}, [currentQuestion, showLoading, scores, navigate]);

  if (showLoading) {
  return <LoadingScreen />;
}
  const question = questions[currentQuestion];
  return (
    <div className="quiz-page">
        <div className="quiz-container">
        <ProgressBar
        current={currentQuestion + 1}
        total={questions.length}
      />
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