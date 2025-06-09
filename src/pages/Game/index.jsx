import React, { Component } from 'react';
import Board from '../../components/board';
import Field from '../../components/field';
import Button from '../../components/button';
import Swal from 'sweetalert2';
import './styles.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X',
      cells: Array(9).fill(null),
      winner: null
    };
  }

  checkWinner = (cells) => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combo of combos) {
      const [a, b, c] = combo;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  };

  handleClick = (index) => {
    const { cells, turn, winner } = this.state;
    if (cells[index] || winner) return;

    const newCells = [...cells];
    newCells[index] = turn;
    const newWinner = this.checkWinner(newCells);

    this.setState({
      cells: newCells,
      turn: turn === 'X' ? 'O' : 'X',
      winner: newWinner
    });

    if (newWinner) {
      Swal.fire({
        title: `${newWinner} Wins!`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  };

  resetGame = () => {
    this.setState({
      turn: 'X',
      cells: Array(9).fill(null),
      winner: null
    });
  };

  render() {
    return (
      <div className="game-container">
        <Board>
          {this.state.cells.map((cell, index) => (
            <Field key={index} click={() => this.handleClick(index)}>
              {cell}
            </Field>
          ))}
        </Board>
        <Button value="Restart" onClick={this.resetGame} />
      </div>
    );
  }
}

export default Game;
