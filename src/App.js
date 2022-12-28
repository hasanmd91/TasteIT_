import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import Newrecipes from "./components/NewRecipes/Newrecipes";
import Singlerecipes from "./components/Singlerecipies/Singlerecipes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> <Route element={<Home />} />{" "}
          <Route path="/recipes" element={<Recipes />} />{" "}
          <Route path="/recipes/:recipesingle" element={<Singlerecipes />} />{" "}
          <Route path="/newrecipes" element={<Newrecipes />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
