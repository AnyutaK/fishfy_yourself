import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { generateOceanName } from "../utils/oceanNameGenerator";
import { animals } from "../data/animals";

function ResultCard({ animal,result,almostAnimals, onRestart }) {
 const [revealed, setRevealed] = useState(false);
 const oceanName = generateOceanName(animal.id);
 const compatibleAnimals = animal.compatibility.friends
  .map(id => animals[id])
  .filter(Boolean);
 const oppositeAnimal = animals[animal.compatibility.opposite];

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
<motion.div
      className="result-card"
      initial={{ opacity:0, scale:0.7,y:40 }}
      animate={{ opacity:1, scale:1, y:0 }}
      transition={{ duration:0.6 ,ease: "easeInOut" }}
    >
      {!revealed ? (
  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    🌊 Discovering your ocean personality...
  </motion.h2>
) : (
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
    <motion.div
  className="animal-reveal"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  {/* Ripple 1 */}
  <motion.div
    className="reveal-ripple ripple-one"
    initial={{ scale: 0.3, opacity: 0 }}
    animate={{
      scale: [0.3, 1, 1.5],
      opacity: [0, 0.7, 0]
    }}
    transition={{
      duration: 1.5,
      ease: "easeOut"
    }}
  />

  {/* Ripple 2 */}
  <motion.div
    className="reveal-ripple ripple-two"
    initial={{ scale: 0.3, opacity: 0 }}
    animate={{
      scale: [0.3, 1, 1.6],
      opacity: [0, 0.5, 0]
    }}
    transition={{
      duration: 1.5,
      delay: 0.2,
      ease: "easeOut"
    }}
  />

  {/* Ripple 3 */}
  <motion.div
    className="reveal-ripple ripple-three"
    initial={{ scale: 0.3, opacity: 0 }}
    animate={{
      scale: [0.3, 1, 1.7],
      opacity: [0, 0.4, 0]
    }}
    transition={{
      duration: 1.5,
      delay: 0.4,
      ease: "easeOut"
    }}
  />

  {/* Glow */}
  <motion.div
    className="animal-glow"
    initial={{ scale: 0.3, opacity: 0 }}
    animate={{
      scale: [0.3, 1.4, 1],
      opacity: [0, 0.8, 0.25]
    }}
    transition={{
      duration: 1.2,
      ease: "easeOut"
    }}
  />

  {/* Bubbles */}
  <div className="reveal-bubbles">
    {[
      { size: 6, x: -85, y: -65, delay: 0 },
      { size: 14, x: 75, y: -80, delay: 0.08 },
      { size: 9, x: -65, y: 10, delay: 0.12 },
      { size: 18, x: 85, y: 20, delay: 0.16 },
      { size: 5, x: -40, y: -95, delay: 0.2 },
      { size: 11, x: 35, y: -100, delay: 0.24 },
      { size: 7, x: -100, y: -20, delay: 0.28 },
      { size: 16, x: 105, y: -35, delay: 0.32 },
      { size: 5, x: -20, y: 90, delay: 0.36 },
      { size: 10, x: 60, y: 85, delay: 0.4 },
      { size: 8, x: -75, y: 65, delay: 0.44 },
      { size: 13, x: 95, y: 60, delay: 0.48 }
    ].map((bubble, index) => (
      <motion.span
        key={index}
        className="reveal-bubble"
        style={{
          width: bubble.size,
          height: bubble.size
        }}
        initial={{
          opacity: 0,
          scale: 0,
          x: 0,
          y: 0
        }}
        animate={{
          opacity: [0, 0.9, 0],
          scale: [0, 1, 0.7],
          x: bubble.x,
          y: bubble.y
        }}
        transition={{
          duration: 1.5,
          delay: bubble.delay,
          ease: "easeOut"
        }}
      />
    ))}
  </div>

  {/* THE ACTUAL ANIMAL */}
  <motion.div
    className="animal-emoji"
    initial={{
      opacity: 0,
      scale: 0.2
    }}
    animate={{
      opacity: [0, 1, 1],
      scale: [0.2, 1.25, 1]
    }}
    transition={{
      duration: 1.1,
      times: [0, 0.65, 1],
      ease: "easeOut"
    }}
  >
    {animal.emoji}
  </motion.div>
</motion.div>
      <motion.p
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay:1.2}}
      >
        Your marine alter ego is...
      </motion.p>

      <motion.h1
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay:1.4}}
      >
        {animal.name}
      </motion.h1>
        <motion.h2
          initial={{opacity:0, scale:0.8}}
          animate={{opacity:1, scale:1}}
          transition={{delay:1.6}}
        >
          {result.percentage}% Match
        </motion.h2>
        <h2 className="animal-title">
          {animal.title}
        </h2>
        <div className="ocean-name">
        <h3>
          Your ocean name
        </h3>
        <p>
         ✨ {oceanName} ✨
        </p>
      </div>
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
        <div className="why-card">
        <h3>
          ✨ Why you got this
        </h3>

        <p>
          {animal.whyYouGotThis}
        </p>
      </div>
        <div className="fun-fact">
          <h3>
            🌊 Ocean Fact
          </h3>
          <p>
            {animal.funFact}
          </p>
        </div>
        {
  almostAnimals?.length > 0 && (
    <div className="almost-section">
      <h3>
        🌊 Almost Was...
      </h3>

      <div className="almost-list">
      {almostAnimals.map((item) => (
        <motion.div
          key={item.id}
          className="almost-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="almost-emoji">
            {item.emoji}
          </span>

          <h3>
            {item.name}
          </h3>

          <p>
            {item.percentage}% similar to the result
          </p>
        </motion.div>
      ))}
      </div>
    </div>
  )
}
<div className="compatibility-card">

  <h3>
    🌊 Ocean Connections
  </h3>

  <p>
    You vibe with:
  </p>

  <div className="compatibility-list">

    {compatibleAnimals.map((item) => (
      <div
        key={item.id}
        className="compatibility-item"
      >
        <span>
          {item.emoji}
        </span>

        <p>
          {item.name}
        </p>
      </div>
    ))}

  </div>


  {oppositeAnimal && (
    <div className="opposite">
      <p>
        Different energy:
      </p>

      <span>
        {oppositeAnimal.emoji}
        {" "}
        {oppositeAnimal.name}
      </span>
    </div>
  )}

</div>
        <button onClick={onRestart}>
          Discover Again 🌊
        </button>
        </motion.div>
)}
        </motion.div>
        );
}
export default ResultCard;