import React from "react";
import './Person.css'


const Person = (props) => {
  const { img, name, job } = props.person
  const url = `https://randomuser.me/api/portraits/med/men/${img}.jpg`
  return(
    <div className="person">
      <img src = {url} alt="image"/>
      <div>
       <h3>{name}</h3>
       <p>{job}</p>
      </div>
    </div>
  )
}

export default Person