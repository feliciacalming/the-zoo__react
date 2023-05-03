import { IAnimal } from "../models/IAnimal";
import { saveToLS } from "./saveToLS";

export const checkTime = (animals: IAnimal[], timer: number) => {
  const todaysDate = new Date().getTime();

  animals.map((animal) => {
    let lastFed = Date.parse(animal.lastFed);
    if (todaysDate - lastFed > timer) {
      animal.isFed = false;
      saveToLS(animals);
    }
  });
};
