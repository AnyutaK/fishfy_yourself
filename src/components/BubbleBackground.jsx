import { useMemo } from "react";

function BubbleBackground() {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${6 + Math.random() * 8}s`,
      })),
    []
  );

  return (
    <div className="bubbles">
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="bubble"
          style={{
            left: bubble.left,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
          }}
        />
      ))}
    </div>
  );
}

export default BubbleBackground;