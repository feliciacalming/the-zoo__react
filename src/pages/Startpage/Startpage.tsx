import "./Startpage.scss";
import { checkTime } from "../../helpers/checkTime";
import { getFromLS } from "../../helpers/getFromLS";
import panda from "../../assets/Panda-waving.gif";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Startpage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const animalsInLS = getFromLS();
  let numberOfAnimals: number = 15;
  let hungryAnimals: number = 0;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

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
      <main className="startpage">
        <section className="startpage__text">
          {window.innerWidth > 768 ? <h1>Välkommen till The Zoo!</h1> : <></>}
          <h2>Här bor ett gäng snälla djur.</h2>
          <h3>Just nu är {numberOfAnimals} djur hungriga!</h3>

          <Link to="/animals">
            Klicka här för att se vilka som behöver matas.
          </Link>
        </section>
        <img className="startpage__image" src={panda} />
        {window.innerWidth < 768 ? <h1>Välkommen till The Zoo!</h1> : <></>}
      </main>
    </>
  );
};
