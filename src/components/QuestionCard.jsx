import { motion } from "framer-motion";
function QuestionCard({ question, answers, onAnswer }) {

  return (
    <motion.div
  className="question-card"
  initial={{ opacity:0, x:50 }}
  animate={{ opacity:1, x:0 }}
  transition={{ duration:0.4 }}
>
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
    </motion.div>
  );
}
export default QuestionCard;