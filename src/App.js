/*
import './App.css';
import * as Env from "./environments.js";
import Parse from "parse";
import React, {useEffect } from "react";
import Components from './Components/Components.js';

//initialize parse with back4app keys
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
   // useEffect hook to run code after the component has mounted
   useEffect(() => {
    // Any additional initialization code or side effects can be placed here
  }, []);

  return <Components />;
}  
export default App;
*/

import './App.css';
import * as Env from "./environments.js";
import Parse from "parse";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import Components from './Components/Components.js';
import Main from './Components/Main/Main'; // Import your Main component
//import Confirmation from './Components/Confirmation/Confirmation'; // Import your Confirmation component
import ConfirmationScreen from './Components/Confirmation/ConfirmationScreen';

// Initialize parse with back4app keys
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  // useEffect hook to run code after the component has mounted
  useEffect(() => {
    // Any additional initialization code or side effects can be placed here
  }, []);

  return (
    <Router> {/* Wrap your Components with Router */}
      <Routes>
        <Route path="/" element={<Main />} /> {/* Route for your Main component */}
        <Route path="/confirmation" element={<ConfirmationScreen />} /> {/* Route for your Confirmation component */}
      </Routes>
    </Router>
  );
}

export default App;

