import React from 'react'
import Logo from "../assets/png/logo-color.png"
const Footer = () => {
  return (
    <div className='footerContainer'>

      <div className="leftContainer">
        <img src={Logo} alt="" className='footerLogo'/>
      </div>
      <div className="middleContainer">
        <h1 className="footerHeading">CodeMaster</h1>
      </div>
      <div className="rightContainer">
        <h3>Follow Us</h3>
        <a href="">Youtube</a>
        <a href="">Instagram</a>
        <a href="">Facebook</a>
      </div>
    </div>
  )
}

export default Footer
