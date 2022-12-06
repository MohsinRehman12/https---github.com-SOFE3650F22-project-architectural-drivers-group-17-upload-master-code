import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <div className='nav-btn-container'>

    <div>
        <a href='http://localhost:3000/studentslogin'><button className='btn-nav'>Student</button></a>
    </div>
    <div>
    <a href='http://localhost:3000/plogin'><button className='btn-nav'>Staff</button></a>
  </div>
    </div>
    
  </>
  )
}

export default Home
