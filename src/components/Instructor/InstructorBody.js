import React from "react";
import { InstructorCourses } from "./InstructorCourses";
import classes from "./InstructorBody.module.css";
export const InstructorBody = () => {
  return (
    <div className={classes.body}>
      <div className={classes["course-container"]}>
        <h1>Available Courses</h1>
        <InstructorCourses></InstructorCourses>
      </div>
      <img
        className={classes.img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklyPBouJGywW5jHWxqJS1rXprgl8_ZpQC4A&usqp=CAU"
      />
    </div>
  );
};
