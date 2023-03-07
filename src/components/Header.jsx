import React from 'react';
import styled from 'styled-components';




const Header = () => {


  return (
    <HeaderTitle>Todolist</HeaderTitle>
  )
}


export default Header
const HeaderTitle = styled.h1`
    margin: 0;
    height:20vh;
    background-color: #ECF2FF;
    font-size: 50px;
    color: #9340d8;
    display: flex;
    justify-content: center;
    align-items: center;
  `;