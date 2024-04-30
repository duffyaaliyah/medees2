/*import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import React from "react";
import AuthModule from "./Authentication/Auth";
import AuthRegister from "./Authentication/AuthRegister";
import AuthLogin from "./Authentication/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Main from "./Main/Main";
//import ConfirmationScreen from "./Confirmation/ConfirmationScreen";
import Footer from "./Footer/Footer";
import Confirmation from './Confirmation/Confirmation';

export default function Components(){
    console.log("Rendering Components...");
    return (
        <Router>
          <Routes>  
                <Route path="/auth" element={<AuthModule />} />
                <Route path="/auth/register" element={<AuthRegister />} />
                <Route path="/auth/login" element={<AuthLogin />} />   

                {/* <Route path="/footer" element={<ProtectedRoute path="/footer" element={<Footer />} />} />
                <Route path="/confirmation" element={<ProtectedRoute path="/confirmation" element={<Confirmation />} />} />
                {/*4/21/24 edited element from ConfirmationScreen to just Confirmation *///}
               //  {/* <Route path="/" element={<ProtectedRoute path="/" element={<Main />} />} /> */}
                //{/* <Route path="*" element={<Navigate to="/auth" replace />} />  */}

              //  <Route path="/footer"      element={<ProtectedRoute element={<Footer />} />} />
              //  <Route path="/confirmation" element={<ProtectedRoute  element={<Confirmation />} />} />
              //  {/*4/21/24 edited element from ConfirmationScreen to just Confirmation */}
              //   <Route path="/"           element={<ProtectedRoute element={<Main />} />} />
              //  <Route path="*"            element={<Navigate to="/auth" replace />} /> 
        // </Routes>
       // </Router>
//    )
// }

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; 
import React from "react"; 
import AuthModule from "./Authentication/Auth"; 
import AuthRegister from "./Authentication/AuthRegister"; 
import AuthLogin from "./Authentication/AuthLogin"; 
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute"; 
import Main from "./Main/Main"; 
import ConfirmationScreen from "./Confirmation/ConfirmationScreen"; 
import Footer from "./Footer/Footer"; 

export default function Components() { 
    console.log("Rendering Components..."); 
    return ( 
        <Router> 
            <Routes> 
                <Route path="/auth" element={<AuthModule />} /> 
                <Route path="/auth/register" element={<AuthRegister />} /> 
                <Route path="/auth/login" element={<AuthLogin />} /> 
                <Route path="/" element={<Main />} /> 
                <Route path="/footer" element={<Footer />} /> 
                <Route path="/confirmation" element={<ConfirmationScreen />} /> 
                <Route path="*" element={<Navigate to="/auth" replace />} /> 
            </Routes> 
        </Router> 
    ); 
}

