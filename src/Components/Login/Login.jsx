import React from "react";
import './Login.css';
import {  useNavigate } from "react-router-dom";

export function Login() {
   
    const navigate = useNavigate();

    return ( 
        <>
         <div className="FormContainer">
            <div className="Title2"><h3>Log In!</h3></div>
            <div className="Form">
              <div className="labinput">
                <label htmlFor="text">Username</label>
                <input type="name" />
              </div>
              <div className="labinput">
                <label htmlFor="password">Password</label>
                <input type="password" />
              </div>
            </div>
            <div className="btn5"><button className="btn btn-primary" onClick={()=>navigate('/user')} >Sign In</button></div>
         </div>
        </>
    )
}