import React, { useState } from 'react';

const HoverComponent = () => {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers for hover actions
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Define styles based on hover state
  const defaultStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: '#e0e0e0',
  };

  // Apply styles based on hover state
  const mergedStyle = isHovered ? { ...defaultStyle, ...hoverStyle } : defaultStyle;

  return (
    <div
      style={mergedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{isHovered ? 'Hovering!' : 'Hover over me!'}</h2>
      <p>This component changes when hovered over.</p>
    </div>
  );
};

export default HoverComponent;
