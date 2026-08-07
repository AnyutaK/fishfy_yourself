import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function LoadingScreen() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => prev + 1);
    }, 1200);
    return () => clearInterval(timer);
  }, []);
  const messages = [
    {
      emoji: "🌊",
      text: "Scanning ocean currents...",
      subtext: "Following the currents..."
    },
    {
      emoji: "🐚",
      text: "Analyzing personality traits...",
      subtext: "Connecting the dots..."
    },
    {
      emoji: "🐠",
      text: "Your ocean identity is...",
      subtext: "Something is swimming closer..."
    }
  ];
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AnimatePresence mode="wait">
        {stage < 3 ? (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="loading-emoji"
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >
              {messages[stage].emoji}
            </motion.div>
            <h2>
              {messages[stage].text}
            </h2>
            <p>
              {messages[stage].subtext}
            </p>
          </motion.div>
        ) : (
          <Countdown />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
function Countdown() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCount(2);
    }, 1000);
    const timer2 = setTimeout(() => {
      setCount(1);
    }, 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <motion.div
      key={count}
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <p className="countdown-label">
        Something is swimming closer...
      </p>
      <motion.div
        className="countdown"
        key={count}
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {count}
      </motion.div>
    </motion.div>
  );
}
export default LoadingScreen;