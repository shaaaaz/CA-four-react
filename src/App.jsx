import React, { useEffect, useState } from "react";
import "./App.css";

import backgroundLight from './images/backgroundLight.png'
import backgroundDark from './images/backgroundDark.png'

import logoImgLight from './images/logoLight.png'
import logoImgDark from './images/logoDark.png'

import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

import StartPage from './components/StartPage'




function App() {

  const SPVisible = {
    "display":"block"
  }

  const SPHidden = {
    "display":"hidden"
  }

  const [startPageStyle,setStartPageStyle] = useState(SPVisible)

  const navbarStyleDark = {
    "backgroundColor": "#292929",
    "borderBottom": "4px solid #B8A9E5"
  }

  const navbarStyleLight = {
    "backgroundColor": "#F8F8F8",
    "borderBottom": "4px solid #8E7CC3"
  }

  const circleStyleLight = {
    "backgroundColor": "#8E7CC3",
    "marginLeft": "8px"
  }

  const circleStyleDark = {
    "backgroundColor": "#B8A9E5",
    "marginLeft": "8px"
  }

  const buttonStyleLight = {
    "backgroundColor": "#F8F8F8",
    "border": "4px solid #8E7CC3",
    "justifyContent": "start"
  }

  const buttonStyleDark = {
    "backgroundColor": "#292929",
    "border": "4px solid #B8A9E5",
    "justifyContent": "end"
  }


  const [theme,setTheme] = useState("light")
  const [background,setBackground] = useState(backgroundLight)
  const [logoImg,setLogoImg] = useState(logoImgLight)
  const [navbarStyle,setNavbarStyle] = useState(navbarStyleLight)
  const [circleStyle,setCircleStyle] = useState(circleStyleLight)
  const [buttonStyle,setButtonStyle] = useState(buttonStyleLight)

  

  function changeTheme(){
    if(theme == "light"){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
    console.log(theme)
  }

  useEffect(() => {
    setBackground(theme == "dark" ? backgroundDark : backgroundLight)
    setLogoImg(theme == "dark" ? logoImgDark : logoImgLight)
    setNavbarStyle(theme == "dark" ? navbarStyleDark : navbarStyleLight)
    setCircleStyle(theme == "dark" ? circleStyleDark : circleStyleLight)
    setButtonStyle(theme == "dark" ? buttonStyleDark : buttonStyleLight)
  },[theme])

  function handleStart(){
    setStartPageStyle(SPHidden)
    console.log(startPageStyle)
  }

  return (

    <div className="container">
      <img src={background} className="background-image" />

      {/* <StartPage style={startPageStyle} onClick={handleStart} /> */}


      <div className="navbar" style={navbarStyle}>
        <div></div>
        <img src={logoImg} alt="logo-light" className="logoImg" />
        <button className='theme-change-button' onClick={changeTheme} style={buttonStyle}>
          <div className="circle" style={circleStyle}></div>
        </button>
      </div>

      <QuestionBox questions={questions} theme={theme}/>

      {/* <Result/> */}

    </div>
  );
}

export default App;