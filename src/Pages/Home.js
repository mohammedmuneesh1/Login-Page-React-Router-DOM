import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";

export default function Home() {
  const navigate=useNavigate();
  return (
    <div className='home-main'>
        <h1 style={{color:"#F31559",paddingTop:"55px"}}><b>WELCOME TO HOME</b></h1>
        <Button variant="danger"onClick={()=>navigate("/login")} style={{marginTop:"480px"}}>Log Out</Button>
    </div>
  )
}
