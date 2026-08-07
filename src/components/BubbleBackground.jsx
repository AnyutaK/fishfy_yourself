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
    })
  ));
  const [particles] = useState(() =>
  Array.from({ length: 80 }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 1 + Math.random() * 3,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 10,
    opacity: 0.2 + Math.random() * 0.4,
    drift: -20 + Math.random() * 40,
  }))
);
  return (
  <>
    <div className="ocean-rays" />

    <div className="particles">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            "--drift": `${particle.drift}px`,
          }}
        />
      ))}
    </div>

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
  </>
);
}
export default BubbleBackground;