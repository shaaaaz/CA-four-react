import React, { useEffect, useState } from 'react'
import './QuestionBox.css'
import Result from './Result'
import App from '../App'

export default function QuestionBox(props) {

  // get props from App.jsx
  // it will get the current theme from the user and store it 

  const questionsList = props.questions
  const theme = props.theme

  // styles for light mode and dark mode 

  const heading1StyleLight = {
    "color": "#866CD4"
  }

  const heading1StyleDark = {
    "color": "#BBACE7"
  }

  const heading2StyleLight = {
    "color": "#7660B7"
  }

  const heading2StyleDark = {
    "color": "#BBACE7"
  }

  const heading3StyleLight = {
    "color": "#635394"
  }

  const heading3StyleDark = {
    "color": "#B8A9E5"
  }

  const optionBoxStyleLight = {
    "backgroundColor": "#FFFFFF",
    "border": "4px solid #8E7CC3"
  }

  const optionBoxStyleDark = {
    "backgroundColor": "#272727",
    "border": "4px solid #917FC7"
  }

  const optionBox2StyleLight = {
    "backgroundColor": "#8E7CC3",
    "border": "4px solid #8E7CC3"
  }

  const optionBox2StyleDark = {
    "backgroundColor": "#917FC7",
    "border": "4px solid #917FC7"
  }

  const highBoxStyleLight = {
    "backgroundColor": "#8E7CC3",
    "color": "#FFF"
  }

  const highBoxStyleDark = {
    "backgroundColor": "#917FC7",
    "color": "#2C0E49"
  }

  const whiteBoxStyleLight = {
    "backgroundColor": "#F8F8F8",
    "border": "4px solid #9282C1"
  }

  const whiteBoxStyleDark = {
    "backgroundColor": "#292929",
    "border": "4px solid #917FC7"
  }

  const purpleBoxStyleLight = {
    "backgroundColor": "#8E7CC3"
  }

  const purpleBoxStyleDark = {
    "backgroundColor": "#917FC7"
  }

  // using state to store values of current theme and applying it 
  //  useState is used to initialise them values and intial value is light mode

  const [heading1, setHeading1] = useState(heading1StyleLight)
  const [heading2, setHeading2] = useState(heading2StyleLight)
  const [heading3, setHeading3] = useState(heading3StyleLight)
  const [optionBoxStyle, setOptionBoxStyle] = useState(optionBoxStyleLight)
  const [optionBox2Style, setOptionBox2Style] = useState(optionBox2StyleLight)
  const [highBoxStyle, setHighBoxStyle] = useState(highBoxStyleLight)
  const [whiteBoxStyle, setWhiteBoxStyle] = useState(whiteBoxStyleLight)
  const [purpleBoxStyle, setPurpleBoxStyle] = useState(purpleBoxStyleLight)

  // when there is a chnage in theme then use ffect will be caleld and 
  // execeute following change using state change function

  useEffect(() => {
    setHeading1(theme == "dark" ? heading1StyleDark : heading1StyleLight)
    setHeading3(theme == "dark" ? heading3StyleDark : heading3StyleLight)
    setOptionBoxStyle(theme == "dark" ? optionBoxStyleDark : optionBoxStyleLight)
    setOptionBox2Style(theme == "dark" ? optionBox2StyleDark : optionBox2StyleLight)
    setHighBoxStyle(theme == "dark" ? highBoxStyleDark : highBoxStyleLight)
    setWhiteBoxStyle(theme == "dark" ? whiteBoxStyleDark : whiteBoxStyleLight)
    setPurpleBoxStyle(theme == "dark" ? purpleBoxStyleDark : purpleBoxStyleLight)
  }, [theme])

  // highlight the question text when highlight button is clciked

  const [highlight, sethighlight] = useState(false)

  // when highlight is changed this useffect will change and store style in highlight state 

  useEffect(() => {
    if (highlight) {
      document.querySelector('#highlightThis').style.color = "#FF3333"
    }
    else {
      setHeading2(theme == "dark" ? heading2StyleDark : heading2StyleLight)
    }
  }, [theme, highlight])

  // highlight button functionality making it red and original coulor again

  function handleHighlight() {
    if (!highlight) {
      sethighlight(true)
      document.querySelector('#highlightThis').style.color = "#FF3333"
    }
  }

  function handleRemoveHighlight() {
    if (highlight) {
      sethighlight(false)
      if (theme == "dark") {
        document.querySelector('#highlightThis').style.color = "#BBACE7"
      }
      else {
        document.querySelector('#highlightThis').style.color = "#7660B7"
      }
    }
  }

  // curr question number will be one and chnage when an option is clciked using state and hooks

  const [currQuestion, setCurrQuestion] = useState(0)
  const [score, setScore] = useState(0)

  // whenever an option is clciked it will pass which value was clicked and then 
  // it will be compared if the value user has choosen is correct or not
  // if sleecetd value is coroect then score will upadte by one 
  // curr questionw ill update anyway and go on to the next quetsion

  function handleOptionClick(value) {
    console.log("dsd")
    let selectedOption = questionsList[currQuestion].options[value].isCorrect
    setScore(prevScore => {
      if (selectedOption) {
        console.log("true", prevScore + 1);
        return prevScore + 1;
      }
      return prevScore;
    })
    setCurrQuestion(currQuestion + 1)
  }

  return (
    <>
    {/* this functionw ill check which question we are ona and if current question is less than 5
        it will give out the question page as input otherwise it will give out results page */}
      {currQuestion < 5 ? (
        <div className='mainContainer'>
          <div className="mainArea">
            <div className="whiteBox" style={whiteBoxStyle}>
              <div className="hideIt">
                <div className="questionsOutOf" style={heading1}>Question {currQuestion + 1} out of 5</div>

                <div className="question" style={heading2} id='highlightThis'>{questionsList[currQuestion].text}</div>

                <div className="optionsArea" style={heading3}>

                  <div className="opBlock">
                    {/* return which value is selecetd byt he user */}
                    <div className="option" onClick={() => handleOptionClick(0)}>
                      <div className="optionWhitePart" style={optionBoxStyle}>{questionsList[currQuestion].options[0].text}</div>
                      <div className="optionPurplePart" style={optionBox2Style}></div>
                    </div>
                    <div className="option" onClick={() => handleOptionClick(1)}>
                      <div className="optionWhitePart" style={optionBoxStyle}>{questionsList[currQuestion].options[1].text}</div>
                      <div className="optionPurplePart" style={optionBox2Style}></div>
                    </div>
                  </div>

                  <div className="opBlock">

                    <div className="option" onClick={() => handleOptionClick(2)}>
                      <div className="optionWhitePart" style={optionBoxStyle}>{questionsList[currQuestion].options[2].text}</div>
                      <div className="optionPurplePart" style={optionBox2Style}></div>
                    </div>
                    <div className="option" onClick={() => handleOptionClick(3)}>
                      <div className="optionWhitePart" style={optionBoxStyle}>{questionsList[currQuestion].options[3].text}</div>
                      <div className="optionPurplePart" style={optionBox2Style}></div>
                    </div>
                  </div>

                </div>

                {/* highligth button */}
                <div className="highlightArea">
                  <button className="high highlight" id='textChange' style={highBoxStyle} onClick={handleHighlight}>Highlight</button>
                  <button className="high remove-highlight" id='textChange' style={highBoxStyle} onClick={handleRemoveHighlight}>Remove Highlight</button>
                </div>
              </div>


            </div>
            <div className="purpleBox" style={purpleBoxStyle}></div>
          </div>

          {/* results will pass out score and theme  as props for child component*/}
        </div>) : (<Result score={score} theme={theme}/>)}
    </>
  )
}
