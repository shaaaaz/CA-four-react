import React, { useEffect, useState } from "react";
import "./App.css";

import backgroundLight from './images/backgroundLight.png'


import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

import Navbar from './components/Navbar'



function App() {

  return (
    <div>
      <img src={backgroundLight} className="background-image"/>

      <Navbar/>
      
    </div>
  );
}

export default App;