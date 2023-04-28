import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Instructor } from "./pages/Instructor";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/instructor" element={<Instructor></Instructor>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
