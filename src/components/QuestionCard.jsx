function QuestionCard({ question, answers, onAnswer }) {

  return (
    <div className="question-card">
      <h2>
        {question}
      </h2>
      <div className="answers">
        {answers.map((answer, index) => (
          <button
            className="answer-button"
            key={index}
            onClick={() => onAnswer(answer)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
export default QuestionCard;