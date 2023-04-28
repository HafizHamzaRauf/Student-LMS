import React from "react";
import classes from "./Course.module.css";
export const Course = ({ name, code }) => {
  return (
    <li className={classes.course}>
      <h1 className={classes.name}>{name}</h1>
      <p className={classes.code}>{code}</p>
    </li>
  );
};
