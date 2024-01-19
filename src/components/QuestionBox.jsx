import React, { useEffect, useState } from 'react'
import './QuestionBox.css'

export default function QuestionBox(props) {

  const questionsList = props.questions
  // console.log(questionsList)

  const theme = props.theme

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
    "backgroundColor":"#FFFFFF",
    "border": "4px solid #8E7CC3"
  }

  const optionBoxStyleDark = {
    "backgroundColor":"#272727",
    "border": "4px solid #917FC7"
  }

  const optionBox2StyleLight = {
    "backgroundColor":"#8E7CC3",
    "border": "4px solid #8E7CC3"
  }

  const optionBox2StyleDark = {
    "backgroundColor":"#917FC7",
    "border": "4px solid #917FC7"
  }

  const highBoxStyleLight = {
    "backgroundColor":"#8E7CC3",
    "color": "#FFF"
  }

  const highBoxStyleDark = {
    "backgroundColor":"#917FC7",
    "color": "#2C0E49"
  }

  const whiteBoxStyleLight = {
    "backgroundColor":"#F8F8F8",
    "border":"4px solid #9282C1"
  }

  const whiteBoxStyleDark = {
    "backgroundColor":"#292929",
    "border":"4px solid #917FC7"
  }

  const purpleBoxStyleLight = {
    "backgroundColor":"#8E7CC3"
  }

  const purpleBoxStyleDark = {
    "backgroundColor":"#917FC7"
  }

  const [heading1,setHeading1] = useState(heading1StyleLight)
  const [heading2,setHeading2] = useState(heading2StyleLight)
  const [heading3,setHeading3] = useState(heading3StyleLight)
  const [optionBoxStyle,setOptionBoxStyle] = useState(optionBoxStyleLight)
  const [optionBox2Style,setOptionBox2Style] = useState(optionBox2StyleLight)
  const [highBoxStyle,setHighBoxStyle] = useState(highBoxStyleLight)
  const [whiteBoxStyle,setWhiteBoxStyle] = useState(whiteBoxStyleLight)
  const [purpleBoxStyle,setPurpleBoxStyle] = useState(purpleBoxStyleLight)

  useEffect(() => {
    setHeading1(theme == "dark" ? heading1StyleDark : heading1StyleLight)
    setHeading3(theme == "dark" ? heading3StyleDark : heading3StyleLight)
    setOptionBoxStyle(theme == "dark" ? optionBoxStyleDark : optionBoxStyleLight)
    setOptionBox2Style(theme == "dark" ? optionBox2StyleDark : optionBox2StyleLight)
    setHighBoxStyle(theme == "dark" ? highBoxStyleDark : highBoxStyleLight)
    setWhiteBoxStyle(theme == "dark" ? whiteBoxStyleDark : whiteBoxStyleLight)
    setPurpleBoxStyle(theme == "dark" ? purpleBoxStyleDark : purpleBoxStyleLight)
  },[theme])

  const [highlight,sethighlight] = useState(false)

  useEffect(() => {
    if(highlight){
      document.querySelector('#highlightThis').style.color = "#FF3333"
    }
    else{
      setHeading2(theme == "dark" ? heading2StyleDark : heading2StyleLight)
    }
  },[theme,highlight])

  function handleHighlight(){
    if(!highlight){
      sethighlight(true)
      document.querySelector('#highlightThis').style.color = "#FF3333"
    }
  }

  function handleRemoveHighlight(){
    if(highlight){
      sethighlight(false)
      if(theme=="dark"){
        document.querySelector('#highlightThis').style.color = "#BBACE7"
      }
      else{
        document.querySelector('#highlightThis').style.color = "#7660B7"
      }
    }
  }





  const [currQuestion,setCurrQuestion] = useState(0)

  let question = questionsList[currQuestion].text
  let options = questionsList[currQuestion].options

  console.log(options)

  function handleOptionClick(){
    setCurrQuestion(currQuestion + 1)
  }


  return (
    <div className='mainContainer'>
      <div className="mainArea">
        <div className="whiteBox" style={whiteBoxStyle}>
          <div className="questionsOutOf" style={heading1}>Question {currQuestion + 1} out of 5</div>

          <div className="question" style={heading2} id='highlightThis'>{question}</div>

          <div className="optionsArea"style={heading3}>

            <div className="opBlock">
              <div className="option" onClick={handleOptionClick}>
                <div className="optionWhitePart" style={optionBoxStyle}>{options[0].text}</div>
                <div className="optionPurplePart" style={optionBox2Style}></div>
              </div>
              <div className="option" onClick={handleOptionClick}>
                <div className="optionWhitePart" style={optionBoxStyle}>{options[1].text}</div>
                <div className="optionPurplePart" style={optionBox2Style}></div>
              </div>
            </div>

            <div className="opBlock">

            <div className="option" onClick={handleOptionClick}>
                <div className="optionWhitePart" style={optionBoxStyle}>{options[2].text}</div>
                <div className="optionPurplePart" style={optionBox2Style}></div>
              </div>
              <div className="option" onClick={handleOptionClick}>
                <div className="optionWhitePart" style={optionBoxStyle}>{options[3].text}</div>
                <div className="optionPurplePart" style={optionBox2Style}></div>
              </div>
            </div>

          </div>

          <div className="highlightArea">
            <button className="high highlight" id='textChange' style={highBoxStyle} onClick={handleHighlight}>Highlight</button>
            <button className="high remove-highlight" id='textChange' style={highBoxStyle} onClick={handleRemoveHighlight}>Remove Highlight</button>
          </div>

        </div>
        <div className="purpleBox" style={purpleBoxStyle}></div>
      </div>
      
    </div>
  )
}
