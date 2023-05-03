import { Header } from "../components/Header/Header";
import { IAnimal } from "../models/IAnimal";
import { useEffect, useState } from "react";
import { getAnimals } from "../services/AnimalService";
import { ShowAnimal } from "../components/ShowAnimal/ShowAnimal";
import { Link } from "react-router-dom";
import { saveToLS } from "../helpers/saveToLS";
import { getFromLS } from "../helpers/getFromLS";

export const Animals = () => {
  const [allAnimals, setallAnimals] = useState<IAnimal[]>([]);
  const animalsFromLS = getFromLS();

  useEffect(() => {
    if (animalsFromLS.length === 0) {
      getAnimals().then((animals) => {
        saveToLS(animals);
        setallAnimals(animals);
      });
    } else {
      setallAnimals(animalsFromLS);
    }
  }, []);

  return (
    <>
      <Header></Header>
      <main className="main__animals">
        {allAnimals.map((animal, index) => (
          <Link key={index} to={animal.id.toString()}>
            <ShowAnimal {...animal}></ShowAnimal>
          </Link>
        ))}
      </main>
    </>
  );
};
