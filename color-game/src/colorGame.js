import React, { useState, useEffect } from 'react';
import './colorGame.css';  // Corrected path

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#E74C3C'];

function ColorGame() {
  const [targetColor, setTargetColor] = useState('');
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('');

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setGameStatus('');
  };

  const handleGuess = (color) => {
    console.log('Selected color:', color); // Log the selected color
    if (color === targetColor) {
      setScore(score + 1);
      setGameStatus('Correct! 🎉');
    } else {
      console.log('Wrong guess!'); // Log if the guess is wrong
      setGameStatus('Wrong! Try again.');
    }
  };
  

  return (
    <div className="game-container">
      <h1 className="game-instructions">Guess the correct color!</h1>
      <div
        className="color-box"
        style={{ backgroundColor: targetColor }}
      ></div>
      <div className="color-options">
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
          ></button>
        ))}
      </div>
      <div className="game-status">{gameStatus}</div>
      <div className="score">Score: {score}</div>
      <button
        className="new-game-button"
        onClick={startNewGame}
      >
        New Game
      </button>
    </div>
  );
}

export default ColorGame;
