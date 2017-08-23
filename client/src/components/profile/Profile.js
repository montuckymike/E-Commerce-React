import React from "react";
import ProfileHero from "./ProfileHero";
import Hero from "../hero/Hero"

const Profile = (props) => {
  return (
    <div>
        <ProfileHero />
          <div className="ff">
            <h1> {props.user.fName} </h1>
            <h2> {props.user.lName} </h2>
            <img src={props.user.avatar} />
            <p> {props.user.email} </p>
            <p> {props.user.phone}</p>
          </div>
    </div>

  )
}



export default Profile
