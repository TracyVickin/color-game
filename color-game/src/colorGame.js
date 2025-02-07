import React, { useState, useEffect } from "react";
import "./colorGame.css";

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#E74C3C"];

function ColorGame() {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setGameStatus("");
  };

  const handleGuess = (color) => {
    console.log("Selected color:", color);
    if (color === targetColor) {
      setScore(score + 1);
      setGameStatus("Correct! 🎉");
    } else {
      console.log("Wrong guess!");
      setGameStatus("Wrong! Try again.");
    }
  };

  return (
    <div className="game-container" data-testid="gameContainer">
      <h1 className="game-instructions" data-testid="gameInstructions">
        Guess the correct color!
      </h1>
      <div
        className="color-box"
        style={{ backgroundColor: targetColor }}
        data-testid="colorBox"
      ></div>
      <div className="color-options">
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
            data-testid={`colorOption-${index}`}
          ></button>
        ))}
      </div>
      <div className="game-status" data-testid="gameStatus">{gameStatus}</div>
      <div className="score" data-testid="score">Score: {score}</div>
      <button
        className="new-game-button"
        onClick={startNewGame}
        data-testid="newGameButton"
      >
        New Game
      </button>
    </div>
  );
}

export default ColorGame;
