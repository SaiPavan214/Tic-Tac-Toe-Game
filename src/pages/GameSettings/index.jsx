import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const GameSettings = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/ticTacToe');
  };

  return (
    <div className="settings">
      <h1>Welcome to Tic Tac Toe</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

export default GameSettings;
