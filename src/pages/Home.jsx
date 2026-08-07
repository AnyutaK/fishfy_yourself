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
>        <div className="emoji">
          🐠
        </div>
        <h1>
          Fishify Yourself
        </h1>
        <p>
          Discover your marine alter ego through a fun personality quiz.
        </p>
        <button
          onClick={() => navigate("/quiz")}
        >
          Start Quiz →
        </button>
      </motion.div>
    </motion.div>
  );
}
export default Home;
