import { Header } from "../../components/Header/Header";
import { checkTime } from "../../helpers/checkTime";
import { getFromLS } from "../../helpers/getFromLS";

export const Startpage = () => {
  let numberOfAnimals: number = 15;
  let hungryAnimals: number = 0;
  let animalsInLS = getFromLS();

  if (animalsInLS.length > 0) {
    checkTime(animalsInLS, 14400000);
    animalsInLS.map((animal) => {
      if (!animal.isFed) {
        hungryAnimals++;
      }
    });

    numberOfAnimals = hungryAnimals;
  }

  return (
    <>
      <main className="main__startpage">
        <h1>Nu är {numberOfAnimals} djur hungriga</h1>
      </main>
    </>
  );
};
