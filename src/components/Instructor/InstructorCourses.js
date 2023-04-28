import React from "react";
import classes from "./InstructorCourses.module.css";
import { Course } from "./Course";
export const InstructorCourses = ({ list }) => {
  const courseContent = list.map((ele) => (
    <Course name={ele.name} code={ele.code}></Course>
  ));
  return <ul className={classes["course-list"]}>{courseContent}</ul>;
};
