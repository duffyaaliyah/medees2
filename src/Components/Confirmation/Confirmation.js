/*import React from 'react';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state.formData;

  const handleEdit = () => {
    navigate('/', { state: { formData } });
  };

  const handleConfirmation = () => {
    // Handle confirmation logic here
    console.log('Confirmed:', formData);
    // Clear form or other logic
    navigate('/footer');
  };

  return (
    <div>
      <h2>Confirmation Screen</h2>
      {Object.entries(formData).map(([key, value]) => (
        <p key={key}>{key}: {value.toString()}</p>
      ))}
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleConfirmation}>Confirm</Button>
    </div>
  );
};

export default Confirmation;
*/

import React from 'react';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  const handleEdit = () => {
    navigate('/', { state: { formData } });
  };

  const handleConfirmation = () => {
    // Handle confirmation logic here
    console.log('Confirmed:', formData);
    // Clear form or other logic
    navigate('/');
  };

  return (
    <div>
      <h2>Confirmation Screen</h2>
      {formData && Object.entries(formData).map(([key, value]) => (
        <p key={key}>{key}: {value.toString()}</p>
      ))}
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleConfirmation}>Confirm</Button>
    </div>
  );
};

export default Confirmation;
