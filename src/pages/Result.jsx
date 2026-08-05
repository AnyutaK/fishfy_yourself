import { useSearchParams, useNavigate } from "react-router-dom";
import { animals } from "../data/animals";
import BubbleBackground from "../components/BubbleBackground";
import ResultCard from "../components/ResultCard";

function Result() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const animalId = searchParams.get("animal");
const almostIds = searchParams.get("almost")?.split(",") || [];

const animal = animals[animalId];

const almostAnimals = almostIds.map(
  id => animals[id]
).filter(Boolean);
  if (!animal) {
    return (
      <h1>
        No result found 🐠
      </h1>
    );
  }
return (
  <div className="result-page">

    <BubbleBackground />

    <ResultCard
  animal={animal}
  almostAnimals={almostAnimals}
  onRestart={() => navigate("/")}
/>
  </div>
);
}
export default Result;