import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deletetodo, toggletodo } from '../../redux/modules/todolists';
import { Cards, Container, Deletebutton, Title, Togglebutton } from './ShowTodoStyled';

function ShowTodo() {

  const dispatch = useDispatch();
  const todolists = useSelector((state) => state.storetodolists.todolists)
  const deletTodo = (id) => {

    dispatch(deletetodo(//그냥id만 보냄
      id
    ))
  }
  const toggleTodo = (id) => {
    dispatch(toggletodo(
      id
    ))
  }

  return (
    <>
      <Title>Doing</Title>
      <Container >
        {todolists.filter((list) => list.isDone === false).map((list) => {
          return (
            <Cards key={list.id}>
              <Link to={`/detailtodo/${list.id}`} >제목:<br />{list.title}</Link>
              <p>내용:<br />{list.content}</p>
              <Deletebutton on onClick={() => deletTodo(list.id)}>삭재</Deletebutton>
              <Togglebutton on onClick={() => toggleTodo(list.id)}>완료</Togglebutton>
            </Cards>
          )
        })}
      </Container>

      <Title>DONE</Title>
      <Container >
        {todolists.filter((list) => list.isDone === true).map((list) => {
          return (
            <Cards key={list.id}>
              <Link to={`/detailtodo/${list.id}`} >제목:<br />{list.title}</Link>
              <p>내용:<br />{list.content}</p>
              <Deletebutton on onClick={() => deletTodo(list.id)}>삭재</Deletebutton>
              <Togglebutton on onClick={() => toggleTodo(list.id)}>취소</Togglebutton>
            </Cards>
          )
        })}
      </Container>
    </>
  )
}

export default ShowTodo

