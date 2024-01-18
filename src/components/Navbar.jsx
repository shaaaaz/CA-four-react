import React from 'react'
import './Navbar.css'
import logoImgLight from '../images/logoLight.png'

function Navbar() {
  return (
    <div className="navbar">
        <div></div>
        <img src={logoImgLight} alt="logo-light" className="logoImg" />
        <button className='theme-change-button'>
            <div className="circle"></div>
        </button>


    </div>
  )
}

export default Navbar