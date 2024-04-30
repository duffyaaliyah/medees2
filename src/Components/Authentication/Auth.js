import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";
import './Auth.css';
import Button from '@mui/material/Button';


const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div id="main"> 
      <div class = "authPage">
        <h1 id= "siteTitle">MEDEE's Prescription Site</h1>
      <Link to="/auth/register"><Button variant="outlined" id = "a1">Register </Button></Link> {/*Links to the register page */}
        <br />
        <br />
        <Link to="/auth/login"><Button variant="outlined" id="a2">Login </Button></Link> {/*Links to the login page */}
      </div>
    </div>
  );
};

export default AuthModule;