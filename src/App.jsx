import React, { useState } from 'react';
import StartScreen from './components/startscreen';
import Game from './pages/Game/index';

function App() {
  // State to track if the game has started
  const [gameStarted, setGameStarted] = useState(false);

  // State to track which mark player 1 selected ('X' or 'O')
  const [player1Mark, setPlayer1Mark] = useState('X');

  // Called when the StartScreen triggers game start, with player1's selected mark
  const startGame = (mark) => {
    setPlayer1Mark(mark);
    setGameStarted(true);
  };

  return (
    <>
      {!gameStarted ? (
        // Show the start screen if game hasn't started
        <StartScreen onStart={startGame} />
      ) : (
        // Show the game and pass selected player1 mark as prop
        <Game player1Mark={player1Mark} />
      )}
    </>
  );
}

export default App;
