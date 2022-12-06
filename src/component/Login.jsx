import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [sID, setSID] = useState('')
    const [pass, setPass] = useState('')

    const [loginState,setLoginState] = useState('')
  
  
    const navigate = useNavigate();
  
    const handleSubmit =  async(e) => {
      e.preventDefault()
      localStorage.clear();
      const logininfo = {sID: sID, pass: pass}
        const response =  await Axios.post(
            "http://localhost:8080/login", {sID: sID, pass: pass}
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
          localStorage.setItem('user', JSON.stringify(response.data))
      
      
  
    }
    return (
      <div>
        <div className="login-box">
          <form className='login-box-form'>
            <label className='input-label'> Student Number</label>
            <input
              type="number"
              classname="inputs"
              placeholder="100XXXXXXXX"
              onChange={(e) => setSID(e.target.value)}
  
              ></input>
            <label className='input-label'>Password</label>
            <input
              type="password"
              classname="inputs-login"
              placeholder="Enter Password"
              onChange={(e) => setPass(e.target.value)}
              ></input>
              <div>
              <button
                className='btn-login'
                onClick={handleSubmit}
                >Enter</button>
                </div>
          </form>
        </div>
      </div>
)}

export default Login
