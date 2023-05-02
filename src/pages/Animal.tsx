import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { ShowAnimal } from "../components/ShowAnimal/ShowAnimal";
import { getFromLS } from "../helpers/getFromLS";
import { IAnimal } from "../models/IAnimal";
import { Error } from "./Error";

export const Animal = () => {
  const params = useParams();
  const animals: IAnimal[] = getFromLS();

  let chosenAnimal = animals.find(
    (animal) => animal.id.toString() === params.id
  );

  return (
    <>
      <Header></Header>
      {chosenAnimal ? (
        <ShowAnimal {...chosenAnimal}></ShowAnimal>
      ) : (
        <Error></Error>
      )}
    </>
  );
};
