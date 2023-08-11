import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Components.css";
import { Button, Form, FloatingLabel } from "react-bootstrap";

export default function Registration() {
  const navigate = useNavigate();
  return (
    <div className="reg-main">
      <h1 style={{paddingTop:"200px",color:"#F8F0E5"}} ><u><b>REGISTRATION FORM</b></u></h1>
  <form onSubmit={()=>navigate("/login")}>  
        <div className="w-100 mt-4 d-flex flex-column align-items-center justify-content-center">
      <FloatingLabel  className="mb-3 w-50" controlId="floatingName" label="Name">
          <Form.Control type="Name" placeholder="Name" required/>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 w-50"
        >
          <Form.Control type="email" placeholder="name@example.com" required />
        </FloatingLabel>
       
        <FloatingLabel  className="mb-3 w-50" controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" required/>
        </FloatingLabel>
      
        <Button type="submit" variant="dark" className="btn">Register</Button>

        
      </div>
      </form>
    </div>
  );
}
