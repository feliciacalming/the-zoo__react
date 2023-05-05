import "./Animal.scss";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ShowAnimal } from "../../components/ShowAnimal/ShowAnimal";
import { getFromLS } from "../../helpers/getFromLS";
import { IAnimal } from "../../models/IAnimal";
import { Error } from "../Error/Error";
import { useState } from "react";
import { saveToLS } from "../../helpers/saveToLS";
import { checkTime } from "../../helpers/checkTime";

export const Animal = () => {
  const [allAnimals, setAllAnimals] = useState<IAnimal[]>(getFromLS());
  const params = useParams();

  let animal = allAnimals.find((animal) => animal.id.toString() === params.id);

  const lastFed = `${animal?.lastFed.substring(0, 10)} 
    kl 
    ${animal?.lastFed.substring(11, 19)}`;

  const feedAnimal = () => {
    allAnimals.map((animal) => {
      if (animal.id.toString() === params.id) {
        animal.isFed = true;
        animal.lastFed = new Date().toLocaleString();
      }
    });
    setAllAnimals([...allAnimals]);
    saveToLS(allAnimals);
  };

  checkTime(allAnimals, 10800000);

  return (
    <>
      {animal ? (
        <>
          {" "}
          <main className="main__animalview">
            <section className="animal-container">
              <ShowAnimal {...animal} fullDescription={true}></ShowAnimal>
              <div className="animal__details">
                <h4>
                  {animal.name} är {!animal.isFed ? "hungrig" : "mätt"}
                </h4>
                <p>senast matad: {lastFed}</p>
                <button
                  onClick={feedAnimal}
                  disabled={animal.isFed ? true : false}
                >
                  Mata lilla djuret
                </button>
              </div>
            </section>
          </main>
        </>
      ) : (
        <Error></Error>
      )}
    </>
  );
};
