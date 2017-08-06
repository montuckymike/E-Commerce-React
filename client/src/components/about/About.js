import React from "react";
import AboutHero from "./AboutHero";

const About = (props) => {
  return(
    <div>
      <AboutHero />
      <h1>{ props.title }</h1>
    </div>
  )
}

export default About;
