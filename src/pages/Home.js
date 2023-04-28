import React from "react";
import classes from "./Home.module.css";
import { Navigation } from "../components/Navigation";
import { MainBody } from "../components/MainBody";
export const Home = () => {
  return (
    <Navigation>
      <MainBody></MainBody>
    </Navigation>
  );
};
