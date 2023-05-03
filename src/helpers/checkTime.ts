import { IAnimal } from "../models/IAnimal";
import { saveToLS } from "./saveToLS";

export const checkTime = (listOfAnimals: IAnimal[]) => {
  const todaysDate = new Date().getTime();

  listOfAnimals.map((animal) => {
    let lastFed = Date.parse(animal.lastFed);
    if (todaysDate - lastFed > 5000) {
      // console.log(`${animal.name} är hungrig`);
      animal.isFed = false;
      saveToLS(listOfAnimals);
    } else {
      console.log(`${animal.name} är MÄTT SOM FAN`);
    }
  });
};
