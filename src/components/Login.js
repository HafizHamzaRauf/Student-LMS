import React, { useState } from "react";
import { Button } from "./Button";
import classes from "./Register.module.css";
export const Login = () => {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    //perform validation
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      userType.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <form onSubmit={formHandler} className={classes.form}>
      <img
        className={classes.img}
        src="data:image/png;base64,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"
      />
      <h1>Login</h1>

      <p className={classes.error}>
        {error ? "Please Fill all the fields" : ""}
      </p>
      <div>
        <label> Email </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div>
        <label> Password </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>

      <label>
        Are you an instructor or a student?
        <select value={userType} onChange={handleUserTypeChange}>
          <option value="">Please select</option>
          <option value="instructor">Instructor</option>
          <option value="student">Student</option>
        </select>
      </label>
      <Button>Login</Button>
    </form>
  );
};
