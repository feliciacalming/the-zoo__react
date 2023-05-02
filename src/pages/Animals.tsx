import { useLoaderData } from "react-router-dom";
import { IAnimalsLoader } from "../models/IAnimalsLoader";
import { useState } from "react";

export const Animals = () => {
  const [allAnimals, setallAnimals] = useState([]);
  const { animals } = useLoaderData() as IAnimalsLoader;

  return (
    <>
      {animals.map((animal) => {
        animal.id;
      })}
      ;
    </>
  );
};
