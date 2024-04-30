import './Footer.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import pillsImage from '../../Images/pills.jpg';

const Footer = () => {
  console.log("Rendering Footer..."); // Add this line for debugging
  
  return (
  <footer>
    <nav>
      <center>
        <h1>MEDEE's</h1>
        <div className="mission-vision">
            {/* Centered and restricted width for mission and vision */}
         <div className="mission-vision-text">
        <p><b>Mission:</b> To empower individuals to maintain their independence while ensuring consistent and timely adherence to medication schedules through innovative technology solutions. </p>
        <p><b>Vision:</b> We envision a world where individuals, especially the elderly and those with disabilities, can lead independent lives without compromising their health due to medication non-adherence. Through our advanced medication dispensing system, we strive to provide personalized reminders and support systems that enhance medication management, thereby promoting overall well-being and quality of life. </p> 
        </div>
       </div>

        <div>
          <img src={pillsImage} width="600" height="400" alt="Pills" />
          {/* This uploads an image to a certain width and height */}
          <h2>Hello Friend!</h2>
          </div>

        <div className="button-container">
            {/* Update anchor tags to Link components */}
            <Link to="/">
              <Button id="b1" variant="outlined">
                Input Prescription Information
              </Button>
            </Link>
            </div>
      </center>
    </nav>
  </footer>
);
 }

export default Footer;
