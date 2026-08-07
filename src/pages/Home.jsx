import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <motion.div
        className="emoji"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
          rotate: [0, -3, 3, 0]
        }}
        transition={{
          opacity: {
            duration: 0.8
          },
          scale: {
            duration: 0.8,
            type: "spring"
          },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        🐠
      </motion.div>

        <motion.p
          className="home-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          A marine personality experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          Fishify Yourself
        </motion.h1>

        <motion.p
          className="home-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Discover your marine alter ego through a fun
          personality quiz.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{
            scale: 1.05,
            y: -3
          }}
          whileTap={{
            scale: 0.97
          }}
          onClick={() => navigate("/quiz")}
        >
          Dive In →
        </motion.button>

      </motion.div>
    </motion.div>
  );
}

export default Home;