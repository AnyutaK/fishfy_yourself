import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="loading-emoji"
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
      >
        🌊
      </motion.div>
      <h2>
        Finding your marine alter ego...
      </h2>
      <p>
        Analyzing your ocean personality 🐠
      </p>
    </motion.div>
  );
}

export default LoadingScreen;