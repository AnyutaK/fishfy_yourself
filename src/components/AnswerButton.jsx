import { motion } from "framer-motion";

function AnswerButton({ answer, onClick, delay }) {
  return (
    <motion.button
      className="answer-button"
      onClick={onClick}
      initial={{
        opacity: 0,
        x: -20
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{
        delay: delay
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
  );
}

export default AnswerButton;