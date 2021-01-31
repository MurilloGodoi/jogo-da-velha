/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContextProvider';

export default function Board() {
  const context = useContext(GameContext);

  return <h1>Board</h1>;
}
