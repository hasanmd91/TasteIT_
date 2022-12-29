import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./newrecipes.module.css";

import { db } from "../../database/Firebase_config";
import { collection, addDoc } from "firebase/firestore";
import Overlay from "../Overlay/Overlay";

const Newrecipes = () => {
  const [overlay, setOverlay] = useState(false);
  const [countries, setCountries] = useState([]);
  const [ingredientList, setIngredientList] = useState([
    {
      quantity: "",
      ingredient: "",
    },
  ]);
  const [recipe, setRecipe] = useState({
    name: " ",
    author: " ",
    country: " ",
    description: " ",
    image: " ",
    instruction: "",
    ingredients: {},
  });

  // firstore database

  const recpieCollectionRef = collection(db, "recipe");
  const createRecpie = async (recipe) => {
    await addDoc(recpieCollectionRef, recipe);
  };

  // countries list fetching

  const getCountries = async () => {
    const result = await axios.get("https://restcountries.com/v3.1/all");
    let countryList = [];
    result.data.map((country) => {
      countryList.push(country.name.common);
    });
    countryList.sort();
    setCountries(countryList);
  };

  useEffect(() => {
    getCountries();
  }, []);

  // adding more fields in ingredients

  const addFields = (e) => {
    e.preventDefault();
    setIngredientList([
      ...ingredientList,
      {
        quantity: "",
        ingredient: "",
      },
    ]);
  };

  // Only ingredients change

  const ingredientsChangeHandeler = (e, index) => {
    let newfields = [...ingredientList];
    newfields[index][e.target.name] = e.target.value;
    setIngredientList(newfields);
    setRecipe({ ...recipe, ingredients: ingredientList });
  };

  // post handeler from overlay

  const postHandeler = () => {
    createRecpie(recipe);
    setOverlay(false);
  };

  // remove post from overlay
  const removePost = () => {
    setOverlay(false);
    setRecipe({
      name: " ",
      author: " ",
      country: " ",
      description: " ",
      image: " ",
      instruction: "",
      ingredients: {},
    });
  };

  // form submithandeler

  const submitHandeler = (e) => {
    e.preventDefault();
    setOverlay(true);
    e.target.reset();
  };

  const changeHandeler = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.form_container}>
      <h1> Add a new recipe </h1>
      <form onSubmit={submitHandeler}>
        <div>
          <label htmlFor="name"> Name: </label>
          <input
            type="text"
            name="name"
            id="name "
            onChange={changeHandeler}
            required
          />
        </div>

        <div>
          <label htmlFor="author"> Author: </label>
          <input
            type="text"
            name="author"
            id="author "
            onChange={changeHandeler}
            required
          />
        </div>

        <div>
          <label htmlFor="country"> Recipe is form: </label>
          <select
            required
            name="country"
            id="country"
            onChange={changeHandeler}
          >
            <option>Pick a country</option>
            {countries.map((country) => (
              <option key={country}> {country}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description"> Description: </label>
          <textarea
            required
            name="description"
            id="description "
            onChange={changeHandeler}
          />
        </div>

        <div>
          <label htmlFor="image"> Image: </label>
          <input
            required
            type="text"
            name="image"
            id="image "
            onChange={changeHandeler}
          />
        </div>

        {ingredientList.map((ingredient, index) => {
          return (
            <div key={index} className={style.ingredient_Wrapper}>
              <div>
                <label htmlFor="quantity"> Quantity:</label>
                <input
                  required
                  type="text"
                  name="quantity"
                  id="quantity"
                  onChange={(e) => ingredientsChangeHandeler(e, index)}
                />
              </div>

              <div>
                <label htmlFor="ingredient"> Ingredient:</label>
                <input
                  required
                  type="text"
                  name="ingredient"
                  id="ingredient"
                  onChange={(e) => ingredientsChangeHandeler(e, index)}
                />
              </div>
            </div>
          );
        })}

        <button onClick={addFields} className={style.add_button}>
          {" "}
          Add More{" "}
        </button>

        <div>
          <label htmlFor="instruction"> Instruction: </label>
          <textarea
            required
            name="instruction"
            id="instruction "
            onChange={changeHandeler}
          />
        </div>

        <button type="submit" className={style.submit_button}>
          Post recipe
        </button>
      </form>
      {overlay && (
        <Overlay {...recipe} post={postHandeler} remove={removePost} />
      )}
    </div>
  );
};

export default Newrecipes;
