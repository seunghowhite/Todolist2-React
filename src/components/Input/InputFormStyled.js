import styled from 'styled-components'

export const Inputform = styled.form`
  background-color: #655DBB;
  border-radius: 5px;
  height: 10vh;
  display: flex;
  justify-content: center;
  padding: 10px;
`

export const InputTodo = styled.input`
  height: 25px;
  border-radius: 5px;
  /* border: 1px solid none; */
  margin: 5px;
  border-color: #ECF2FF;

`
export const Submitbutton = styled.button`
  height: 30px;
  margin: 5px;
  background-color: #ECF2FF;
  border-color: none;
  border-radius: 5px;
  &:hover{
    border-radius: 5px;
    background-color: #BFACE2;
  }
`
