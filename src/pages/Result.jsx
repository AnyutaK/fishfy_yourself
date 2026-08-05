import { useSearchParams, useNavigate } from "react-router-dom";
import { animals } from "../data/animals";
import { motion } from "framer-motion";

function Result() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const animalId = searchParams.get("animal");
  const animal = animals[animalId];
  if (!animal) {
    return (
      <h1>
        No result found 🐠
      </h1>
    );
  }
  return (
    <div className="result-page">
    <motion.div
      className="result-card"
      initial={{ opacity:0, scale:0.8 }}
      animate={{ opacity:1, scale:1 }}
      transition={{ duration:0.6 }}
    >
        <div className="animal-emoji">
          {animal.emoji}
        </div>
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
        <button
          onClick={() => navigate("/")}
        >
          Discover Again 🌊
        </button>
        </motion.div>
      </div>
  );
}
export default Result;