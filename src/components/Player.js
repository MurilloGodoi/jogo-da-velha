/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContextProvider';

export default function Board() {
  const { isXNext, whoIsWinner } = useContext(GameContext);

  if(whoIsWinner) return <p> </p>;

  return <h1 className="player-vez">É a vez do Player: {isXNext ? 'X' : 'O'} </h1>;
}
