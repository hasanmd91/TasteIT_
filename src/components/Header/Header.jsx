import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import style from "./header.module.css";

const header = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        <h3> TasteIT</h3>
      </Link>
      <Navbar />
    </header>
  );
};

export default header;
