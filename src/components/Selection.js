import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  // Define a local state to hold the background style of the selection
  const [backgroundStyle, setBackgroundStyle] = useState({ backgroundColor: '' });

  // This function will update the background of the selection
  const updateSelectionStyle = (newBackground) => {
    setBackgroundStyle(newBackground);  // Set the new background color
  }

  return (
    <div 
      className="fix-box"
      style={backgroundStyle}  // Apply the dynamic background style
      onClick={() => applyColor(updateSelectionStyle)}  // Pass `updateSelectionStyle` to `applyColor`
    >
      <h2 className="subheading">Selection</h2>
    </div>
  )
}

export default Selection;

