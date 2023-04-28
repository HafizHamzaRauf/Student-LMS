import React from "react";
import classes from "./Button.module.css";
export const Button = ({ onClick, cclass, children }) => {
  return (
    <button onClick={onClick} className={`${classes.btn} ${cclass}`}>
      {children}
    </button>
  );
};
