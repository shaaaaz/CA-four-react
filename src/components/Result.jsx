import React, { useState,useEffect } from 'react'
import './Result.css'

export default function Result(props) {

  // props are used here o get values from parent component which are then stoed in const
  // theme is the current theme ie dark or light

  const score = props.score
  const theme = props.theme

  // here we have written style for diffrent parts pf the code including both dark and light mode

  const rpWBLight = {
    "backgroundColor":"#F8F8F8",
    "border":"5px solid #9282C1"
  }

  const rpWBDark = {
    "backgroundColor":"#292929",
    "border":"5px solid #917FC7"
  }

  const hLight = {
    "color":"#635394"
  }

  const hDark = {
    "color":"#D0C6EF"
  }

  const pbLight = {
    "backgroundColor" : "#8E7CC3"
  }

  const pbDark = {
    "backgroundColor":"#917FC7"
  }

  // state is used to iterate betwenn dark and light mode 
  // initial value of state i set as light mode

  const [whiteBoxResultPageStyle,setWhiteBoxResultPageStyle] = useState(rpWBLight)
  const [h,setH] = useState(hLight)
  const [pb,setpb] = useState(pbLight)

  // useffect will occur when there a change in the theme and execute the cahnge of state 

  useEffect(() => {
    setWhiteBoxResultPageStyle(theme == "dark" ? rpWBDark : rpWBLight)
    setH(theme == "dark" ? hDark : hLight)
    setpb(theme == "dark" ? pbDark : pbLight)
  },[theme])

  useEffect(() => {
    setWhiteBoxResultPageStyle(theme == "dark" ? rpWBDark : rpWBLight)
    setH(theme == "dark" ? hDark : hLight)
    setpb(theme == "dark" ? pbDark : pbLight)
  },[])

  // calculate score based on questions user had got correct

  let percent = (score/5)*100

  // when restart is clicked page should reload

  function handleRestart(){
    window.location.reload()
  }

  // return a single div to its parent

  return (
    <div>
      <div className="mainArea" >
        <div className="whiteBox" style={whiteBoxResultPageStyle}>
          <div className="finalResult" style={h}>
            FINAL RESULT
          </div>
          <div className="correct">
            {/* display the percent score */}
            You got {score} out of 5 correct - ({percent}%)
          </div>
          <div className="restartArea">
            {/* when restart is clciked it should ahndle restart and reload  */}
            <div className="re restart1" onClick={handleRestart}>
              RESTART GAME
            </div>
            <div className="re restart2"></div>
          </div>
        </div>
        <div className="purpleBox" style={pb}>
        </div>
      </div>
    </div>
  )
}
