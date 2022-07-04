import React, {useState} from "react";
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter.jsx';
import "./styles/style.css";


function App() {
  const [term, setTerm] = useState("");

  const handleChange = (e) =>{
    setTerm(e.target.value || "");
  }

  return (
    <BrowserRouter>
     <MainRouter handleChange={handleChange} term={term}/>
    </BrowserRouter>
  );
}

export default App;
