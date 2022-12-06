import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react';
import Cards from './Cards';
import LogoutButton from './LogoutButton';
import notLoggedIn from './notLoggedIn';

function Courses() {

const [getCourses, setCourses] = useState([])
const [name, setName] = useState([])
const [sID, setSID] = useState([])
const [pID, setPID] = useState([])




useEffect(() => {
    Axios.post('http://localhost:8080/courses').then((response) => {
        response.data.map((couses) => {
            setCourses((prevState) => [...prevState, {
            crn: couses.crn,
            course_name: couses.course_name,
            classroom: couses.classroom,
            level: couses.level,
            department: couses.department,
            location: couses.location,
            subject: couses.subject,
            credits: couses.credits,
            src: couses.src,
        }])
          })
        }).catch(error => {
          console.log(error.response)
        });
    }, [])

useEffect (() => {
    const student = localStorage.getItem('user');
    if (student){
        const studentInfo= JSON.parse(student);
        setSID(studentInfo[0].studentid);

    }

    const professor = localStorage.getItem('professor');
    if (professor){
        const profInfo= JSON.parse(professor);
        setPID(profInfo[0].professorid);

    }
})
console.log("logininfo")

console.log(sID);
console.log("courses")
console.log(getCourses)

  if(sID=='' && pID ==''){
    return(
      <div>Log in to view</div>
    )
  }

  if(sID=='' && pID !=''){
    return(
      
      <div>
        
              <LogoutButton />

        {
        getCourses.map((courses) => (
        <Cards 
        title = {courses.course_name}
        src = {courses.src}
        crn = {courses.crn}
        classroom = {courses.classroom}
        
        pID = {pID}
        />
    ))}
      </div>
    )
  }


  return (
    <div>
      <LogoutButton />
    {
        getCourses.map((courses) => (
        <Cards 
        title = {courses.course_name}
        src = {courses.src}
        crn = {courses.crn}
        classroom = {courses.classroom}
        
        studentid={sID}
        />
    ))}
    </div>
  )
}

export default Courses