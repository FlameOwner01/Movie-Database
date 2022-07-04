import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Pages/Movies.jsx";
import Series from "./components/Pages/Series.jsx";

const MainRouter = ({ handleChange, term }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Movies handleChange={handleChange} term={term} />}
      />
      <Route
        path="/movies"
        element={<Movies handleChange={handleChange} term={term} />}
      />
      <Route
        path="/series"
        element={<Series handleChange={handleChange} term={term} />}
      />
    </Routes>
  );
};

export default MainRouter;
