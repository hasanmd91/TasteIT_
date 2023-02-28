import React, { useEffect, useState } from "react";
import style from "./recipes.module.css";
import { collection, getDocs } from "firebase/firestore";
import { Recipecard } from "../Recipecard/Recipecard";
<<<<<<< HEAD
import { db } from "../Database/Firebase_config";
=======
import { db } from "../../Database/Firebase_config";

>>>>>>> 21b2b015a41c1181c1ce7918816788953b9f2ea5
const Recipes = () => {
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  const recpieCollectionRef = collection(db, "recipe");

  useEffect(() => {
    const getRecipes = async () => {
      const data = await getDocs(recpieCollectionRef);
      setRecipe(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRecipes();
  }, [recpieCollectionRef]);

  const inputHandeler = (e) => {
    setSearch(e.target.value);
  };

  const filterData = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={style.recipe_conatiner_wrapper}>
      <input type="text" placeholder="Search recipe" onChange={inputHandeler} />
      <div className={style.recipe_conatiner}>
        {filterData.map((recipe) => (
          <Recipecard
            name={recipe.name}
            image={recipe.image}
            country={recipe.country}
            id={recipe.id}
            key={recipe.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
