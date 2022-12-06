import React from 'react'
import { useNavigate } from 'react-router-dom'


function LogoutButton() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        localStorage.clear();
        navigate("/")
    }
  return (
        <button className="btn-logout"
        onClick={handleSubmit}>
            Log Out
        </button>
    )
}

export default LogoutButton