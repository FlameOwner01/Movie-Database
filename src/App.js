import Movies from "./components/Pages/Movies.jsx";
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter.jsx';
import "./styles/style.css";
import Series from "./components/Pages/Series.jsx";


function App() {

  return (
    <BrowserRouter>
    <MainRouter>
  <Movies/>
   <Series/>
   </MainRouter>
   </BrowserRouter>
  );
}

export default App;
