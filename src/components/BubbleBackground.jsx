import { useState } from "react";

function BubbleBackground() {
  const [bubbles] = useState(() =>
    Array.from({ length: 50 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      size: 8 + Math.random() * 30,
      duration: 5 + Math.random() * 8,
      delay: Math.random() * 8,
      opacity: 0.15 + Math.random() * 0.35,
      drift: -30 + Math.random() * 60,
    }))
  );
  return (
    <div className="bubbles">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            "--drift": `${bubble.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
export default BubbleBackground;