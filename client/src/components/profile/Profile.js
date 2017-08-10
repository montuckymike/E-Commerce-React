import React from "react";

const Profile = (props) => {
  return (
    <div>
      <div className="spacer"> p</div>
      <h1> {props.user.fName} </h1>
      <h2> {props.user.lName} </h2>
      <img src={props.user.avatar} />
      <p> {props.user.email} </p>
    </div>

  )
}



export default Profile
