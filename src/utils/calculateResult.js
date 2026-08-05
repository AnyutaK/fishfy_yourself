/*export function calculateResult(scores){

  let highestAnimal = null;
  let highestScore = 0;
  for(const animal in scores){
    if(scores[animal] > highestScore){
      highestScore = scores[animal];
      highestAnimal = animal;
    }
  }
  return highestAnimal;

}*/
import { animals } from "../data/animals";

export function calculateResult(scores) {

  const sortedAnimals = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  const winner = sortedAnimals[0];

  const maxScore = winner[1];

  const mainAnimal = winner[0];

  const almost = sortedAnimals
    .slice(1, 4)
    .map(([animal, score]) => ({
      animal,
      percentage: Math.round((score / maxScore) * 100)
    }));

  return {
    animal: mainAnimal,
    name: animals[mainAnimal].name,
    title: animals[mainAnimal].title,
    traits: animals[mainAnimal].traits,
    description: animals[mainAnimal].description,
    funFact: animals[mainAnimal].funFact,
    percentage: 100,
    almost
  };
}