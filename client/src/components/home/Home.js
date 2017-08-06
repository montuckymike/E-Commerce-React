import React from "react";
import HomeHero from "./HomeHero";

const Home = (props) => {
  return(
    <div>
      <HomeHero />
      <h1>{ props.title }</h1>
    </div>
  )
}

export default Home;
