import "./ShowAnimal.scss";
import noImageLogo from "../../assets/no-image-icon.png";
import { IAnimalProps } from "../../models/IAnimalProps";

export const ShowAnimal = ({
  id,
  name,
  isFed,
  imageUrl,
  shortDescription,
  longDescription,
  fullDescription,
}: IAnimalProps) => {
  return (
    <>
      <div
        className={`animal ${`animal__${id.toString()}`} ${
          isFed ? "" : "animal--hungry"
        }`}
      >
        {" "}
        <div className="animal__section-one">
          <img
            className="animal__image"
            src={imageUrl}
            onError={(e) => (e.currentTarget.src = noImageLogo)}
          />
          <article className="animal__info">
            <h3 className="animal__name">{name}</h3>
            <p className="animal__desc">{shortDescription}</p>
          </article>
        </div>
        {fullDescription ? (
          <p className="animal__desc--long">{longDescription}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
