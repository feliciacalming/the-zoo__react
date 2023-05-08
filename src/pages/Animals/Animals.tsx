import "./Animals.scss";
import { IAnimal } from "../../models/IAnimal";
import { useEffect, useState } from "react";
import { getAnimals } from "../../services/AnimalService";
import { ShowAnimal } from "../../components/ShowAnimal/ShowAnimal";
import { Link } from "react-router-dom";
import { saveToLS } from "../../helpers/saveToLS";
import { getFromLS } from "../../helpers/getFromLS";
import Masonry from "react-masonry-css";

export const Animals = () => {
  const [allAnimals, setallAnimals] = useState<IAnimal[]>([]);
  const animalsFromLS = getFromLS();

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 1,
  };

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
      <main className="main__animals">
        <Masonry
          breakpointCols={breakpoints}
          className="animal-grid"
          columnClassName="animal-grid-column"
        >
          {allAnimals.map((animal, index) => (
            <Link key={index} to={animal.id.toString()}>
              <ShowAnimal {...animal}></ShowAnimal>
            </Link>
          ))}
        </Masonry>
      </main>
    </>
  );
};
