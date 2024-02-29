import React, { useState } from 'react';
import './App.css';

const colors = ["#056CF2", "#05AFF2", "#F2E205", "#F28705", "#A62103"];
const SQUARES = 500;

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

function App() {
  const [hoveredSquare, setHoveredSquare] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredSquare(index);
  };

  const handleMouseOut = () => {
    setHoveredSquare(null);
  };

  return (
    <div className="container">
      {[...Array(SQUARES)].map((_, index) => (
        <Square
          key={index}
          isHovered={hoveredSquare === index}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        />
      ))}
    </div>
  );
}

const Square = ({ isHovered, onMouseOver, onMouseOut }) => {
  const color = isHovered ? getRandomColor() : "#1d1d1d";
  const boxShadow = isHovered ? `0 0 2px ${color}, 0 0 10px ${color}` : "0 0 2px #000";

  return (
    <div
      className="square"
      style={{ backgroundColor: color, boxShadow }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    ></div>
  );
};

export default App;