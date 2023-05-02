import { Header } from "../components/Header/Header";
import { getFromLS } from "../helpers/getFromLS";

export const Startpage = () => {
  const animal = getFromLS();
  console.log(animal);

  return (
    <>
      <Header></Header>
      Välkommen till da zoo!
    </>
  );
};
