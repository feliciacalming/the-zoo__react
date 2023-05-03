import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { ShowAnimal } from "../components/ShowAnimal/ShowAnimal";
import { getFromLS } from "../helpers/getFromLS";
import { IAnimal } from "../models/IAnimal";
import { Error } from "./Error";
import { useState } from "react";
import { saveToLS } from "../helpers/saveToLS";
import { checkTime } from "../helpers/checkTime";

export const Animal = () => {
  const [allAnimals, setAllAnimals] = useState<IAnimal[]>(getFromLS());
  const params = useParams();

  let animal = allAnimals.find((animal) => animal.id.toString() === params.id);

  const feedAnimal = () => {
    allAnimals.map((animal) => {
      if (animal.id.toString() === params.id) {
        animal.isFed = true;
        animal.lastFed = new Date().toISOString();
      }
    });
    setAllAnimals([...allAnimals]);
    saveToLS(allAnimals);
  };

  checkTime(allAnimals);

  return (
    <>
      <Header></Header>
      {animal ? (
        <>
          {" "}
          <main>
            <ShowAnimal {...animal}></ShowAnimal>
            <h4>
              {animal.name} är {!animal.isFed ? "hungrig" : "mätt"}
            </h4>
            <button onClick={feedAnimal} disabled={animal.isFed ? true : false}>
              Mata lilla djuret
            </button>
          </main>
        </>
      ) : (
        <Error></Error>
      )}
    </>
  );
};
