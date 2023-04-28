import React from "react";
import classes from "./InstructorCourses.module.css";
import { Course } from "./Course";
export const InstructorCourses = () => {
  return (
    <ul className={classes["course-list"]}>
      <Course name={"Course Name "} code={"Course code"}></Course>
      <Course name={"Course Name "} code={"Course code"}></Course>
      <Course name={"Course Name "} code={"Course code"}></Course>
    </ul>
  );
};
