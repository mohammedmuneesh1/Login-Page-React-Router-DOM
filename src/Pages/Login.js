import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FloatingLabel } from "react-bootstrap";

export default function Login() {
  const Navigate=useNavigate();
  return (
    <div className="log-main">
      <h1 style={{ paddingTop: "200px",color:"#35155D" }}>
        <u>
          <b>LOGIN FORM</b>
        </u>
      </h1>
      <form onSubmit={()=>Navigate("/home")}>
        <div className="w-100 mt-4 d-flex flex-column align-items-center justify-content-center">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 w-50"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
            />
          </FloatingLabel>

          <FloatingLabel
            className="mb-3 w-50"
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control type="password" placeholder="Password" required />
          </FloatingLabel>

          <Button type="submit" variant="info" className="btn-login">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
