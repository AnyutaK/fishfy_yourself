import { motion } from "framer-motion";

function ResultCard({ animal, onRestart }) {

  return (
<motion.div
      className="result-card"
      initial={{ opacity:0, scale:0.7,y:40 }}
      animate={{ opacity:1, scale:1, y:0 }}
      transition={{ duration:0.6 ,ease: "easeInOut" }}
    >
        <motion.div
        className="animal-emoji"
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        {animal.emoji}
      </motion.div>
        <p className="subtitle">
          Your marine alter ego is...
        </p>
        <h1>
          {animal.name}
        </h1>
        <div className="traits">
          {animal.traits.map((trait, index) => (
            <span key={index}>
              {trait}
            </span>
          ))}
        </div>
        <p className="description">
          {animal.description}
        </p>
        <div className="fun-fact">
          <h3>
            🌊 Ocean Fact
          </h3>
          <p>
            {animal.funFact}
          </p>
        </div>
        <button onClick={onRestart}>
          Discover Again 🌊
        </button>
        </motion.div>
        );
}
export default ResultCard;