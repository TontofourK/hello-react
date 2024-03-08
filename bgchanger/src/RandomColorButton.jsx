import React, { useState } from 'react';

function RandomColorButton() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Initial background color

  // Function to generate a random color
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generating random hexadecimal color code
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={generateRandomColor} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>Change Background Color</button>
    </div>
  );
}

export default RandomColorButton;
