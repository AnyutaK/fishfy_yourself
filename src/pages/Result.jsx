import {useNavigate } from "react-router-dom";
import { animals } from "../data/animals";
import BubbleBackground from "../components/BubbleBackground";
import ResultCard from "../components/ResultCard";

function Result() {
  const navigate = useNavigate();
 
const storedResult = JSON.parse(
  localStorage.getItem("fishifyResult")
);

if (!storedResult) {
  return <h1>No result found 🐠</h1>;
}

const animal = animals[storedResult.animal];

const almostAnimals = storedResult.almost
  .map(item => ({
    ...animals[item.id],
    percentage: item.percentage
  }))
  .filter(Boolean);
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
  result={storedResult}
  almostAnimals={almostAnimals}
  onRestart={() => navigate("/")}
/>
  </div>
);
}
export default Result;