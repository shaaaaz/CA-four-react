import React from 'react'
import background from '../images/startBackground.png'
import './StartPage.css'

function StartPage() {
  return (
    <div>
      {/* Start page will return a single div to App.jsx*/}
        <img src={background} alt="background image" className="startImg" />

        <div className="center">
            <div className="heading">QUIZO</div>
        </div>
    </div>
  )
}

export default StartPage