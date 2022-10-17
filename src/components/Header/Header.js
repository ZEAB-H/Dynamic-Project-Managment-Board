 
import React from 'react'
import styled from 'styled-components';

const HeaderWrapper=styled.div`
background-color: rgb(68, 124, 236);
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
 
  font-size: calc(10px + 2vmin);
  color: white;
  
  h1 {
    height: 64px;
    pointer-events: none;
  }
  `;

function Header() {
  return (
    <HeaderWrapper  >
      <h1>PMP:project management board</h1>
    </HeaderWrapper>
  )
}

export default Header;