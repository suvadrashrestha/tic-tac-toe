import React, { useState } from 'react'
import "../index.css"

import Board from './Board'

function Game() {
  const [history, setHistory] = useState([Array(9).fill(0)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
  
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
  });
  return (
    <div className='main'>
      <div >
    <Board  xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>
    </div>
    <div>
      <ol>{moves}</ol>
    </div>
    </div>
  )
}

export default Game

