import React from "react";
import Person from './Person'


const PersonList = (props) => {
  const people = [
  {
     img: 32,
     name : "john",
     job: "developer"
  },
  {
    img: 34,
    name : "bob",
    job: "designer"
  },
  {
    img: 74,
    name : "peter",
    job: "artist"
  }
  ]
  return(
      <section>
        {people.map(item => <Person person={item}/>)}
      </section>
  )
}

export default PersonList