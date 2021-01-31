/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContextProvider';

export default function Square({ value, index }) {
  const { squares, setSquares, isXNext, setIsXNext, whoIsWinner } = useContext(
    GameContext
  );

  function handleClick() {
    if (squares[index]) return;

    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}
