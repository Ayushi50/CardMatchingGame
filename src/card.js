import React from "react";
import classnames from "classnames";
import search from "./images/search.png";
import "./card.scss";

const Card = ({ onClick, card, img, index,isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img  src={search} alt="search" />
      </div>
      <div className="card-face card-back-face">
        <img src={img} alt="search" />
      </div>
    </div>
  );
};

export default Card;
