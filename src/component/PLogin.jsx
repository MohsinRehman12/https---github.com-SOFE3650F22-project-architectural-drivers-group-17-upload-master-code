import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'


const Login = () => {
    const [pID, setPID] = useState('')
    const [pass, setPass] = useState('')

    const [loginState,setLoginState] = useState('')
  
  
    const navigate = useNavigate();
  
    const handleSubmit =  async(e) => {
      e.preventDefault()
      localStorage.clear();
      const logininfo = {pID: pID, pass: pass}
        const response =  await Axios.post(
            "http://localhost:8080/plogin", {pID: pID, pass: pass}
          )
          if (response.data.message){
            setLoginState("Login Failed")
            alert(response.data.message)
            navigate('/')
          }
    
    
          else{
            setLoginState("")
            navigate('/courses')

          }
          localStorage.setItem('professor', JSON.stringify(response.data))
      
      
  
    }
    return (
      <div>
        <div className="login-box">
          <form>
            <label> Proffesor Number</label>
            <input
              type="number"
              classname="inputs"
              placeholder="100XXXXXXXX"
              onChange={(e) => setPID(e.target.value)}
  
              ></input>
              <label>Password</label>
            <input
              type="password"
              classname="inputs"
              placeholder="Enter Password"
              onChange={(e) => setPass(e.target.value)}
              ></input>
              <button
                className='btn-login'
                onClick={handleSubmit}
                >Enter</button>
          </form>
        </div>
      </div>
)}

export default Login
