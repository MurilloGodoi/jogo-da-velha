/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';

export const GameContext = createContext();

// eslint-disable-next-line react/prop-types
export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [whoIsWinner, setWhoIsWinner] = useState(null);
  

  const state = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setWhoIsWinner,
  };

  return (
    <GameContext.Provider value={state}> {children} </GameContext.Provider>
  );
}
