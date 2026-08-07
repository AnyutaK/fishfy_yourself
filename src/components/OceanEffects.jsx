import { useState } from "react";
import BubbleBackground from "./BubbleBackground";

function OceanEffects() {
  const [particles] = useState(() =>
    Array.from({ length: 25 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 4 + Math.random() * 5,
      delay: Math.random() * 5,
      drift: -30 + Math.random() * 60,
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
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              "--drift": `${particle.drift}px`,
            }}
          />
        ))}
      </div>

      <BubbleBackground />
    </>
  );
}

export default OceanEffects;