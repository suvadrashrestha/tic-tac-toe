import React, { useState } from 'react'
import "../index.css"

  export default function Board({xIsNext, squares, onPlay})
   {

 const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "A" : "B");
  }
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "A";
    } else {
      nextSquares[i] = "B";
    }
    onPlay(nextSquares);
  }
  return (
   
      
        <div>
          <p> {status}</p>
          <div >
         <Square  value={squares[0]} onSquareClick={()=>{handleClick(0)}}></Square>
         <Square value={squares[1]}  onSquareClick={()=>{handleClick(1)}}></Square>
         <Square value={squares[2]}  onSquareClick={()=>{handleClick(2)}}></Square>
          </div>
          <div>
          <Square value={squares[3]}  onSquareClick={()=>{handleClick(3)}}></Square>
          <Square value={squares[4]}  onSquareClick={()=>{handleClick(4)}}></Square>
          <Square value={squares[5]}  onSquareClick={()=>{handleClick(5)}}></Square>
          </div>
          <div>
          <Square value={squares[6]}  onSquareClick={()=>{handleClick(6)}}></Square>
          <Square value={squares[7]}  onSquareClick={()=>{handleClick(7)}}></Square>
          <Square value={squares[8]} onSquareClick={()=>{handleClick(8)}}></Square>
          </div>
        </div>
    
   
  )
}


function Square({value,onSquareClick}){
    return(
     
      <button className='square' onClick={onSquareClick}>{value}</button>
      
    )
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  