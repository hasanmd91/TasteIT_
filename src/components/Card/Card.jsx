import React from "react";
import style from "./card.module.css";

const Card = ({ title, text, moreText }) => {
  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <div className={style.card} role="card">
      <h2>{title}</h2>
      <p>{text} </p>
      <p>
        <span>{moreText}</span>{" "}
      </p>
    </div>
  );
};

export default Card;
