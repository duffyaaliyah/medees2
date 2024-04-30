import React from "react";
import { Navigate } from "react-router-dom";
import { checkUser } from "../Authentication/AuthService";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  
  if (checkUser()) {
    return <Component {...rest} />; //added rest part 4/21/24
  } else {
    return (
    <Navigate to="/auth" replace />  // If user tries to go to a protected route without authentication, it will reroute to the /auth route 
    );
  }
};

export default ProtectedRoute;