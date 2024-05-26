import React from 'react'
import { useNavigate } from 'react-router-dom'


function Logout() {
    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("type");
        navigate("/login")
    }
  return (
    <div style={{cursor: "pointer", textDecoration: "underline" , color: "blue"}} onClick={handleLogout}>Logout</div>
  )
}

export default Logout