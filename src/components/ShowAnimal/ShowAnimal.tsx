import { useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import "./ShowAnimal.scss";
import { getFromLS } from "../../helpers/getFromLS";
import noImageLogo from "../../assets/no-image-icon.png";

export const ShowAnimal = (props: IAnimal) => {
  const [allAnimals, setAllAnimals] = useState(getFromLS());

  return (
    <>
      <div className="animal">
        <img
          className="animal__image"
          src={props.imageUrl}
          onError={(e) => (e.currentTarget.src = noImageLogo)}
        />
        <h3 className="animal__name">{props.name}</h3>
        <p className="animal__desc">{props.shortDescription}</p>
      </div>
    </>
  );
};
