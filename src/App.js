import React from 'react';
import styled from 'styled-components';
import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import Backlog from './pages/Backlog/Backlog';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle=createGlobalStyle`
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;`;



const APP =styled.div`
text-align: center;
background: beige;`;

function App() {
  return (
    <>
    <GlobalStyle>
    <APP className='App'>
      <Header />
      <Board />
      <Backlog/>
    </APP>
    </GlobalStyle>
    </>
  );
}

export default App;