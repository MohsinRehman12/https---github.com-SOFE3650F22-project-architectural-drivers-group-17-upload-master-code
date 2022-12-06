import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


const Cards = (props) => {

  
  const navigate = useNavigate();

  const [studentInCourse, setStudentInCourse] = useState([]);
  const [buttonState, setButtonState] = useState('Learn More');
  
  
  const getStudentsCourses = async(e) => {
    e.preventDefault()
    const response = await Axios.post("http://localhost:8080/studentincourse", {sID: props.studentid, crn: props.crn}

    )
    if (response.data.message && props.pID==null ){
      setButtonState('Not Permitted, You Arent in this course');
    }

    else{
      setButtonState('Learn More');
      navigate(`/Course${props.crn}`)

    }
    
    
  } 



    console.log("arr")
    console.log(props.studentid)
    console.log(studentInCourse)

  return (
    <>
    <div style={{ display: "flex"}} className="container-fluid d-flex justify-content-center">
    <div className="row">
    <div className="col-md-4" style={{ width:300, display: "flex"}}>

    <div className="card text-center">
      <div className="overflow" >
        <img
         className='card-imag'
         style={{ width:"80%", margin:30, }}
         src={props.src}>
        </img>
        </div> 
        <div className="card-body text-dark">
        <h4 className='card-title'> {props.title}</h4>
        <h6>{props.crn}U</h6>

        <button onClick={getStudentsCourses} className='btn btn-outline-success'>{buttonState}</button>
        </div>     
    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Cards