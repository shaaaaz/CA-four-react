import React, { useEffect, useState } from "react";
import "./App.css";
// importing different images -> Logo and background Image
import backgroundLight from './images/backgroundLight.png'
import backgroundDark from './images/backgroundDark.png'
import logoImgLight from './images/logoLight.png'
import logoImgDark from './images/logoDark.png'
//importing question from questions.js
import questions from "./questions";
//importing diffreent components that will be aclled later
import QuestionBox from "./components/QuestionBox";
import StartPage from './components/StartPage'




function App() {

  //writing style for dark mode and light mode 

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

  //using state to iterate between light mode and dark mode style
  // initial value of state is set as light mode using useState

  const [theme, setTheme] = useState("light")
  const [background, setBackground] = useState(backgroundLight)
  const [logoImg, setLogoImg] = useState(logoImgLight)
  const [navbarStyle, setNavbarStyle] = useState(navbarStyleLight)
  const [circleStyle, setCircleStyle] = useState(circleStyleLight)
  const [buttonStyle, setButtonStyle] = useState(buttonStyleLight)

  //when change theme button is clicked theme should change from light to dark and vice versa

  function changeTheme() {
    if (theme == "light") {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }
  }

  // when theme is changed the backgroudn heading and everything should change its style
  // useEffect will only be trigerred when there is change in theme and not otherwise
  // if theme is set as dark mode then dark mode style wil be selected and set to its state

  useEffect(() => {
    setBackground(theme == "dark" ? backgroundDark : backgroundLight)
    setLogoImg(theme == "dark" ? logoImgDark : logoImgLight)
    setNavbarStyle(theme == "dark" ? navbarStyleDark : navbarStyleLight)
    setCircleStyle(theme == "dark" ? circleStyleDark : circleStyleLight)
    setButtonStyle(theme == "dark" ? buttonStyleDark : buttonStyleLight)
  }, [theme])

  // when START button is clicked on the home page the start page should go HIDDEN

  function startQuiz() {
    document.querySelector('.hideMe').classList.toggle('hideee')
  }

  // here we are returning htmp using jsx to where the App file is called

  return (

    <div className="container">
      {/* background image which will change using state */}
      <img src={background} className="background-image" />

      {/* Start Page which will go hidden when button is clicked */}
      <div className="hideMe">
        <StartPage />
        <div className="start" onClick={startQuiz}>START</div>
      </div>

      {/* Navbar component which has button that changes theme aswell */}
      <div className="navbar" style={navbarStyle}>
        <div></div>
        <img src={logoImg} alt="logo-light" className="logoImg" />
        <button className='theme-change-button' onClick={changeTheme} style={buttonStyle}>
          <div className="circle" style={circleStyle}></div>
        </button>
      </div>

      {/* Question.jsx is called  and theme and list of questions are passed as 
          props which can then be accessed by question bpx*/}
      <QuestionBox questions={questions} theme={theme} />
    </div>
  );
}


// exporting App to make it visble in index.js
export default App;