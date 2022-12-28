import React from "react";
import Card from "../Card/Card";
import VideoBg from "../assets/video.mp4";
import style from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.videoContainer}>
        <div className={style.overlay}></div>
        <video src={VideoBg} autoPlay loop muted />
        <div className={style.content}>
          <h1> TasteIT</h1>
          <p>
            TasteIT is a recipe app collecting recipes from all over the world{" "}
          </p>
          <Link to="/recipes">
            {" "}
            <button>Browse recipes</button>
          </Link>
        </div>
      </div>

      <div className={style.cardContainer}>
        <Link to="/recipes">
          {" "}
          <Card
            title={"Browse recipes"}
            text={
              "Find your favorite in this collection. You can search recipes based on name or country"
            }
            moreText={"See more"}
          />
        </Link>
        <Link to="/newrecipes">
          {" "}
          <Card
            title={"Add recipes"}
            text={"recipes from your country is missing? No worries add one"}
            moreText={"See more"}
          />
        </Link>

        <a href="https://www.bc.fi/" target="_blank" rel="noreferrer">
          <Card
            title={"Want to know more about our projects?"}
            text={"Visit our programme homepage "}
            moreText={"Business college Helsinki Homepage "}
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
