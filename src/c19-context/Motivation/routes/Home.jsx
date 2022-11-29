import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Home = (props) => {
  return <div>
    <Header changuito={props.changuito} />
    <Outlet />
  </div>
}
