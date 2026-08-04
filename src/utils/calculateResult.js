export function calculateResult(scores){

  let highestAnimal = null;
  let highestScore = 0;
  for(const animal in scores){
    if(scores[animal] > highestScore){
      highestScore = scores[animal];
      highestAnimal = animal;
    }
  }
  return highestAnimal;

}