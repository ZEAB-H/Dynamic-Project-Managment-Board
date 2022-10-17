import React from 'react';
import styled from 'styled-components';
import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import Backlog from './pages/Backlog/Backlog';

const APP =styled.div`
text-align: center;
background: beige;`;

function App() {
  return (
    <APP className='App'>
      <Header />
      <Board />
      <Backlog/>
    </APP>
  );
}

export default App;