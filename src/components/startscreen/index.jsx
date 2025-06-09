import React, { useState } from 'react';
import './styles.css';

function StartScreen({ onStart }) {
  const [selectedMark, setSelectedMark] = useState('X');

  return (
    <div className="container">
      <h1 className="title">Pick Player 1'st Mark</h1>

      <div className="buttons">
        <button
          className={`button ${selectedMark === 'X' ? 'selectedX' : ''}`}
          onClick={() => setSelectedMark('X')}
          style={{ backgroundColor: '#00bfff' }} // skyblue
        >
          X
        </button>
        <button
          className={`button ${selectedMark === 'O' ? 'selectedO' : ''}`}
          onClick={() => setSelectedMark('O')}
          style={{ backgroundColor: '#ff7f50' }} // orange
        >
          O
        </button>
      </div>

      <h2 className="subtitle">Remember: {selectedMark} goes first</h2>

      <button
        className="startButton"
        onClick={() => onStart(selectedMark)}
        style={{
          backgroundColor: selectedMark === 'X' ? '#ff7f50' : '#00bfff',
          color: 'white',
        }}
      >
        New Game (vs player)
      </button>
    </div>
  );
}

export default StartScreen;
