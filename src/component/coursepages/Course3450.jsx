import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import Coursestudents from './Coursestudents';
import Coursepage from './Coursepage';
import notLoggedIn from '../notLoggedIn';


function Course3450() {

  const courseCode = (window.location.pathname.split('/Course'))
  const [courseArr, setCourseArr] = useState([]);
  const [sID, setSID] = useState([])
  const [pID, setPID] = useState([])



  useEffect(() => { {
    const response =  Axios.post("http://localhost:8080/course3700",
    ).then((response) => {
      console.log("response")
      console.log(response)
      response.data.map((couses) => {
        setCourseArr((prevState) => [...prevState, {
          crn: couses.crn,
          course_name: couses.course_name,
          classroom: couses.classroom,
          level: couses.level,
          department: couses.department,
          location: couses.location,
          subject: couses.subject,
          credits: couses.credits,
          src: couses.src,
          studentid: couses.studentid,
          studentname: couses.studentname
      }])
        })
      }).catch(error => {
        console.log(error.response)
      });

      
    
    
  } }, [])

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
  
  

console.log("courseArr")
console.log(courseArr)

const slicedArray = courseArr.slice(courseArr.length-1, courseArr.length);

if(sID == '' && pID == ''){
  return(
     <div>
      Log in To View
     </div>
  )
}

  return (
    <div>
      Course 3450 information
      {
        slicedArray.map((courses) => (
          <Coursepage
            name = {courses.course_name}
            pname={courses.studentname} 
            location={courses.location}
            class={courses.classroom}
            level={courses.level}
            subject={courses.subject}
            credits={courses.credits}

            studentid={courses.studentid} 

          />
        ))
      }

      People In This Course

      {
        courseArr.map((courses) => (
          <Coursestudents
            name={courses.studentname} 
            studentid={courses.studentid} 

          />
        ))
      }
    </div>
  )
}

export default Course3450
