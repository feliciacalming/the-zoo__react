import { useState } from "react";
import "./ShowAnimal.scss";
import noImageLogo from "../../assets/no-image-icon.png";
import { IAnimalProps } from "../../models/IAnimalProps";

export const ShowAnimal = (props: IAnimalProps) => {
  return (
    <>
      <div
        className={`animal ${`animal__${props.id.toString()}`} ${
          props.isFed ? "" : "animal--hungry"
        }`}
      >
        <img
          className="animal__image"
          src={props.imageUrl}
          onError={(e) => (e.currentTarget.src = noImageLogo)}
        />
        <article className="animal__info">
          <h3 className="animal__name">{props.name}</h3>
          <p className="animal__desc">{props.shortDescription}</p>
          {props.fullDescription ? (
            <p className="animal__desc">{props.longDescription}</p>
          ) : (
            ""
          )}
        </article>
      </div>
    </>
  );
};
