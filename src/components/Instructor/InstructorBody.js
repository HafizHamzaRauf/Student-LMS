import React, { useContext } from "react";
import { InstructorCourses } from "./InstructorCourses";
import classes from "./InstructorBody.module.css";
import { Context } from "../../context";
export const InstructorBody = () => {
  const { courses } = useContext(Context);
  return (
    <div className={classes.body}>
      {courses.length > 0 ? (
        <div className={classes["course-container"]}>
          <h1>Available Courses</h1>
          <InstructorCourses list={courses}></InstructorCourses>
        </div>
      ) : (
        <p className={classes.no}>No Courses Yet!</p>
      )}
      <img
        className={classes.img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklyPBouJGywW5jHWxqJS1rXprgl8_ZpQC4A&usqp=CAU"
      />
    </div>
  );
};
