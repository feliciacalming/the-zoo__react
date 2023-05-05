import "./Speechbubble.scss";
import speechbubble from "../../assets/speechbubble.png";

export const Speechbubble = () => {
  return (
    <>
      <div className="bubble">
        <img className="bubble__img" alt="test" src={speechbubble} />
        <h5 className="bubble__text">Jag är hungrig!</h5>
      </div>
    </>
  );
};
