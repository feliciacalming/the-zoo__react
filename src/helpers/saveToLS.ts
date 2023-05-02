import { IAnimal } from "../models/IAnimal";

export const saveToLS = (animals: IAnimal[]) => {
  localStorage.setItem("animals", JSON.stringify(animals));
};
