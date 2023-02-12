import React, { useState } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import {useSelector} from 'react-redux';
import Heading from './Components/Heading/Heading';
import { rootState } from './Components/interface';
import RefreshButton from './Components/RefreshButton';

function App() {
 const board = useSelector((state:rootState)=> state.board.board);
  return (
    <div className="App">
    <Heading type="h1" text="Wordiee"/>
    <Heading type="subtitle" text="Sáng Tạo Trẻ 2022-2023"/>
    <div className="board-container">
      <Board board={board}/>
      <RefreshButton/>
    </div>
    </div>
  );
}

export default App;
