/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContextProvider';

export default function Winner() {
  const { whoIsWinner } = useContext(GameContext);

  if (!whoIsWinner) {
    return <p className="winner"> </p>;
  }
  return <p className="winner">o {whoIsWinner} ganhou !!</p>;
}
