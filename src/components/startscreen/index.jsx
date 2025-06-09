import React, { useState } from 'react';
import './styles.css';

export default function StartScreen({ onStart }) {
  const [playerMark, setPlayerMark] = useState('X');

  return (
    <div className="start-screen">
      <h1>PICK PLAYER 1&apos;S MARK</h1>
      <p>Remember: X goes first</p>

      <div className="mark-options">
        <button
          className={playerMark === 'X' ? 'selected' : ''}
          onClick={() => setPlayerMark('X')}
        >
          X
        </button>
        <button
          className={playerMark === 'O' ? 'selected' : ''}
          onClick={() => setPlayerMark('O')}
        >
          O
        </button>
      </div>

      <button className="start-button" onClick={() => onStart(playerMark)}>
        New Game (vs player)
      </button>
    </div>
  );
}
