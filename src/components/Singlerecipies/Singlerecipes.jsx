import style from "./singlerecipes.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Database/Firebase_config";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Singlerecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const recpieCollectionRef = collection(db, "recipe");

  useEffect(() => {
    const getRecipes = async () => {
      const data = await getDocs(recpieCollectionRef);
      const results = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const singleRecipe = results.filter(
        (res) => res.id === params.recipesingle
      );
      setRecipes(singleRecipe);
    };

    getRecipes();
  }, []);

  return (
    <div className={style.singlerecipe_container}>
      {recipes.map((recipe) => (
        <div className={style.singlerecipe_wrapper} key={recipe.id}>
          <h1> {recipe.name}</h1>
          <div className={style.singlerecipe_content_wrapper}>
            <div className={style.singlerecipe_content_wrapper_left}>
              <div className={style.singlerecipe_image_wrapper}>
                <img src={recipe.image} alt="food" />
                <div className={style.flag}>
                  <img
                    src={`https://countryflagsapi.com/svg/${recipe.country}`}
                    alt="flag"
                    crossOrigin="anonymous"
                  />{" "}
                </div>
              </div>

              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Ingredient</th>
                      <th>Qunatity</th>
                    </tr>
                  </thead>
                  {recipe.ingredients.map((ele, index) => (
                    <tbody key={index}>
                      <tr>
                        <td>{ele.ingredient}</td>
                        <td>{ele.quantity}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>

            <div className={style.singlerecipe_content_wrapper_right}>
              <h2> Recipe creator :{recipe.author}</h2>
              <h4> Recipe origin : {recipe.country} </h4>
              <h4> Description</h4>
              <p> {recipe.description}</p>
              <div>
                <h4> Preparation</h4>
                <p> {recipe.instruction}</p>
              </div>
              <div>
                <button onClick={() => navigate(-1)}>Go Back </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Singlerecipes;
