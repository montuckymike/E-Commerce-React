import React from "react";

const getFileName = () => {

}

const Hero = (props) => {
  return(
    <div className="hero-image">
      <div className="hero-text">
        <h1 className="hero-title"> { props.hero.title } </h1>
        <button> Contact Us </button>
      </div>
    </div>
  )
}



export default Hero
