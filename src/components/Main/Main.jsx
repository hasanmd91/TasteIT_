import React from "react";
import style from "../Main/Main.module.css";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className={style.main}>
      <Outlet />
    </main>
  );
};

export default Main;
