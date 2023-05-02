import { IAnimal } from "../../models/IAnimal";
import "./ShowAnimal.scss";

export const ShowAnimal = (props: IAnimal) => {
  return (
    <>
      <div className="animal">
        <img className="animal__image" src={props.imageUrl}></img>
        <h3 className="animal__name">{props.name}</h3>
        <p className="animal__desc">{props.shortDescription}</p>
      </div>
    </>
  );
};
