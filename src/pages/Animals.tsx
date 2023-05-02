import { Header } from "../components/Header/Header";
import { IAnimal } from "../models/IAnimal";
import { useEffect, useState } from "react";
import { getAnimals } from "../services/AnimalService";
import { ShowAnimal } from "../components/ShowAnimal/ShowAnimal";
import { Link } from "react-router-dom";
import { saveToLS } from "../helpers/saveToLS";

export const Animals = () => {
  const [allAnimals, setallAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    getAnimals().then((animals) => setallAnimals(animals));
  }, []);

  saveToLS(allAnimals);

  return (
    <>
      <Header></Header>
      <section className="animals-container">
        {allAnimals.map((animal, index) => (
          <Link key={index} to={animal.id.toString()}>
            <ShowAnimal {...animal}></ShowAnimal>
          </Link>
        ))}
      </section>
    </>
  );
};
