import React from "react";
import { Route, Routes } from 'react-router-dom';
import Movies from "./components/Pages/Movies.jsx";
import Series from "./components/Pages/Series.jsx";

const MainRouter = () => {

    return (
        <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/series" element = {<Series/>}/>
        </Routes>
    );
}

export default MainRouter;