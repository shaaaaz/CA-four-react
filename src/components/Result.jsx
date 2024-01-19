import React from 'react'
import './Result.css'

export default function Result() {
  return (
    <div>
      <div className="mainArea">
        <div className="whiteBox">
          <div className="finalResult">
            FINAL RESULT
          </div>
          <div className="correct">
            You got 4 out of 5 correct - (80%)
          </div>
          <div className="restartArea">
            <div className="re restart1">
              RESTART GAME
            </div>
            <div className="re restart2"></div>
          </div>
        </div>
        <div className="purpleBox">
        </div>
      </div>
    </div>
  )
}
