import { Children, createContext, useState } from "react";

export const Context = createContext({
  userType: "",
  courses: [],
  addCourse(course) {},
});

export const ContextProvider = ({ children }) => {
  const [userType, setUserType] = useState("");
  const [courses, setCourses] = useState([{ name: "physics", code: "123" }]);
  const addCourse = (course) => {
    setCourses((prevState) => [course, ...prevState]);
  };
  return (
    <Context.Provider value={{ userType, courses, addCourse }}>
      {children}
    </Context.Provider>
  );
};
