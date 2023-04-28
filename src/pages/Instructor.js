import React from "react";
import { Navigation } from "../components/Instructor/Navigation";
import classes from "./Instructor.module.css";
import { InstructorBody } from "../components/Instructor/InstructorBody";
export const Instructor = () => {
  return (
    <Navigation>
      <div className={classes["instructor-dashboard"]}>
        <InstructorBody></InstructorBody>
      </div>
      ;
    </Navigation>
  );
};
