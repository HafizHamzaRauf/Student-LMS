import { createContext } from "react";

export const MoviesContext = createContext({});

export const MoviesProvider = (props) => {
  return (
    <MoviesContext.Provider value={{}}>{props.children}</MoviesContext.Provider>
  );
};
