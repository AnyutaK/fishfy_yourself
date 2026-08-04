import { useSearchParams, useNavigate } from "react-router-dom";
import { animals } from "../data/animals";

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
      <div className="result-card">
        <div className="animal-emoji">
          {animal.emoji}
        </div>
        <h1>
          You are a {animal.name}!
        </h1>
        <h3>
          Ocean Profile
        </h3>
        <div className="traits">
          {animal.traits.map((trait,index)=>(
            <span key={index}>
              {trait}
            </span>
          ))}
        </div>
        <p>
          {animal.description}
        </p>
        <div className="fun-fact">
          🌊 Fun Fact:
          <br/>
          {animal.funFact}
        </div>
        <button
          onClick={() => navigate("/")}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
export default Result;