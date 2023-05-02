import { IAnimal } from "../models/IAnimal";

export const getFromLS = () => {
  const animalsFromLS =
    (JSON.parse(localStorage.getItem("animals") as string) as IAnimal[]) || [];

  return animalsFromLS;
};
