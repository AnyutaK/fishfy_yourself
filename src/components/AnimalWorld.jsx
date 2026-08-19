function AnimalWorld({ animal }) {
  return (
    <div className={`animal-world world-${animal.id}`}>
      {/* Ambient atmosphere */}
      <div className="world-glow world-glow-one" />
      <div className="world-glow world-glow-two" />

      {/* Light rays */}
      <div className="world-light-ray ray-one" />
      <div className="world-light-ray ray-two" />
      <div className="world-light-ray ray-three" />

      {/* Environmental shapes */}
      <div className="world-environment world-environment-left">
        <div className="environment-shape shape-one" />
        <div className="environment-shape shape-two" />
        <div className="environment-shape shape-three" />
      </div>

      <div className="world-environment world-environment-right">
        <div className="environment-shape shape-one" />
        <div className="environment-shape shape-two" />
        <div className="environment-shape shape-three" />
      </div>
      
    </div>
  );
}

export default AnimalWorld;
