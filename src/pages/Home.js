/* eslint-disable prettier/prettier */
import React from 'react';
import GameContextProvider from '../contexts/GameContextProvider';
import Board from '../components/Board';
import './Home.css';


export default function Home () {
    return <GameContextProvider>
        <Board />
    </GameContextProvider>;
}
