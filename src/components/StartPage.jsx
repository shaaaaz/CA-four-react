import React from 'react'
import background from '../images/startBackground.png'
import './StartPage.css'

function StartPage() {
  return (
    <div>
        <img src={background} alt="background image" className="startImg" />

        <div className="center">
            <div className="heading">QUIZO</div>

            <div className="start">START</div>
        </div>
    </div>
  )
}

export default StartPage