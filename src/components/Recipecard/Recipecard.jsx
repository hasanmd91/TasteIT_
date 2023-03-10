import { Link } from "react-router-dom";
import style from "./recipecard.module.css";

export const Recipecard = ({ name, image, country, id }) => {
  let flag = `https://countryflagsapi.com/svg/${country}`;
  return (
    <div className={style.card_wraper}>
      <div className={style.flag_container}>
        <img src={flag} alt="flag" crossOrigin="anonymous" />
      </div>

      <div className={style.card_image}>
        <img src={image} alt="Recipe" />
      </div>

      <div className={style.card_info}>
        <h4> {name}</h4>
        <Link to={`${id}`}>
          <button>See more </button>
        </Link>
      </div>
    </div>
  );
};
