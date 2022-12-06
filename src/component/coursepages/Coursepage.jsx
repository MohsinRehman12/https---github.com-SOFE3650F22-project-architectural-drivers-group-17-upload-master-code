import React from 'react'

function Coursepage(props) {
  return (
    <>
    <h1>{props.name}</h1>
    <h4>Taught By: {props.pname}</h4>
    <h6>Location: {props.location}</h6>
    <h6>Classroom: {props.class}</h6>
    <h6>Level: {props.level}</h6>
    <h6>Subject: {props.subject}</h6>
    <h6>Credits: {props.credits}</h6>


    </>
  )
}

export default Coursepage
