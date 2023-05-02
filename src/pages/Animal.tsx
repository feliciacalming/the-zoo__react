import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { ShowAnimal } from "../components/ShowAnimal/ShowAnimal";
import { getFromLS } from "../helpers/getFromLS";
import { IAnimal } from "../models/IAnimal";
import { Error } from "./Error";
import { useState } from "react";
import { saveToLS } from "../helpers/saveToLS";

export const Animal = () => {
  const [allAnimals, setAllAnimals] = useState<IAnimal[]>(getFromLS());
  const [disabled, setDisabled] = useState(false);

  const params = useParams();
  const animals: IAnimal[] = getFromLS();

  let chosenAnimal = animals.find(
    (animal) => animal.id.toString() === params.id
  );

  const feedAnimal = () => {
    allAnimals.map((animal) => {
      if (animal.id.toString() === params.id) {
        animal.isFed = true;
        setDisabled(true);
      }
    });

    saveToLS(allAnimals);
  };

  return (
    <>
      <Header></Header>
      {chosenAnimal ? (
        <>
          {" "}
          <ShowAnimal {...chosenAnimal}></ShowAnimal>
          <button onClick={feedAnimal} disabled={disabled}>
            Mata lilla djuret
          </button>
        </>
      ) : (
        <Error></Error>
      )}
    </>
  );
};
