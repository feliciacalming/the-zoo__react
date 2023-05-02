import { getAnimals } from "../services/AnimalService";

export const Startpage = () => {
  getAnimals();

  return (
    <>
      <p>hej</p>
    </>
  );
};
