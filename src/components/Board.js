/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import Square from './Square';
import Player from './Player';
import Reset from './Reset';
import calculateWinner from '../utils/calculateWinner';

import { GameContext } from '../contexts/GameContextProvider';
import Winner from './Winner';

export default function Board() {
  const { squares, setWhoIsWinner } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      setWhoIsWinner(winner);
    }
  }, [setWhoIsWinner,squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} />
        ))}
      </div>
    </div>
  );
}
