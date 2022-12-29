import React from "react";
import style from "../Overlay/Overlay.module.css";

const add3Dots = (string, limit) => {
  var dots = ".......";
  if (string.length > limit) {
    string = string.substring(0, limit) + dots;
  }
  return string;
};

const Overlay = ({
  name,
  author,
  country,
  description,
  image,
  instruction,
  post,
  remove,
}) => {
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div>
          {" "}
          <h1> {name}</h1>
        </div>
        <div className={style.wrapper}>
          <div className={style.img_wrapper}>
            <p>
              {" "}
              <span> Author:</span> {author}{" "}
            </p>
            <p>
              {" "}
              <span> Origin: </span>
              {country}{" "}
            </p>
            <img src={image} alt="recipe" />
          </div>
          <div className={style.info_wrapper}>
            <div>
              <p>
                <span> Description: </span>
                {add3Dots(description, 300)}{" "}
              </p>{" "}
            </div>

            <div>
              <p>
                <span> Instruction: </span>
                {add3Dots(instruction, 300)}
              </p>{" "}
            </div>

            <div className={style.btn_wrapper}>
              {" "}
              <button onClick={post}> Are you sure ?</button>
              <button onClick={remove}> Dont want to post! </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
