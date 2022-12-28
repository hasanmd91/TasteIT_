import React from "react";
import style from "./card.module.css";

const Card = ({ title, text, moreText }) => {
  return (
    <div className={style.card}>
      <h2>{title}</h2>
      <p>{text} </p>
      <p>
        <span>{moreText}</span>{" "}
      </p>
    </div>
  );
};

export default Card;
