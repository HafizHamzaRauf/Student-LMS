import React from "react";
import classes from "./Button.module.css";
export const Button = ({ cclass, children }) => {
  return <button className={`${classes.btn} ${cclass}`}>{children}</button>;
};
