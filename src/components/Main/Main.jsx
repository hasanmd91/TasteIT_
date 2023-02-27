import React from "react";
import style from "../Main/Main.module.css";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className={style.main}>
      <Outlet data-testid="main-outlet" />
    </main>
  );
};

export default Main;
