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

          <motion.button
            key={index}
            className="answer-button"
            onClick={() => onAnswer(answer)}
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: index * 0.1
            }}
            whileHover={{
              scale: 1.03,
              y: -3
            }}
            whileTap={{
              scale: 0.97
            }}
          >
            {answer.text}
          </motion.button>

        ))}
      </div>
    </motion.div>
  );
}
export default QuestionCard;