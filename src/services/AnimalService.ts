import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export const getAnimals = async () => {
  const animalsFromDB = await axios.get<IAnimal[]>(
    "https://animals.azurewebsites.net/api/animals"
  );

  console.log("Hämtar från API");

  return animalsFromDB.data;
};
