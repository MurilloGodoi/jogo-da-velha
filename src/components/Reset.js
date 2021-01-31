/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContextProvider';

export default function Reset() {
  const { setSquares, setIsXNext, setWhoIsWinner } = useContext(GameContext);

  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner(null);
    
  }
  return (
    <button className="botao-reset" type="submit" onClick={handleClick}>
      <p className="text-botao-reset">Resetar</p>
    </button>
  );
}
