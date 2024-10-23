import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './NotHome.css'

const NotHome = () => {
  // Define state to track button clicks
  const [clickCount, setClickCount] = useState(0);

  // Function to handle button clicks
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <Navbar />
      <div align='center'>
        <h1>This is the Not Home Page</h1>
        <button onClick={handleClick}>Click Me</button>
        <p>Button has been clicked {clickCount} times</p>

        {/* Conditional message if button clicked more than 5 times */}
        {clickCount > 5 && <p>Congratulations! You passed 5 (clicks, not seconds)</p>}
      </div>
    </div>
  );
};

export default NotHome;
