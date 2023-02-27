import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";

const navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/recipes"> Recipes </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/newrecipes"> Add new recipe </NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
