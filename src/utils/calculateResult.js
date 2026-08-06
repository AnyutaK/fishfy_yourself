import { animals } from "../data/animals";

export function calculateResult(scores) {
  const sortedAnimals = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);
  const winner = sortedAnimals[0];
  const mainAnimal = winner[0];
  const maxScore = winner[1];
  const secondScore = sortedAnimals[1]?.[1] || 0;
  const percentage = Math.round(
    (maxScore / (maxScore + secondScore)) * 100
  );
  const almost = sortedAnimals
    .slice(1, 4)
    .map(([animal, score]) => ({
      id: animal,
      name: animals[animal].name,
      emoji: animals[animal].emoji,
      percentage: Math.round((score / maxScore) * 100)
    }));
  return {
  animal: mainAnimal,
  name: animals[mainAnimal].name,
  title: animals[mainAnimal].title,
  traits: animals[mainAnimal].traits,
  description: animals[mainAnimal].description,
  funFact: animals[mainAnimal].funFact,
  whyYouGotThis: animals[mainAnimal].whyYouGotThis,
  compatibility: animals[mainAnimal].compatibility,
  percentage,
  almost
};
}