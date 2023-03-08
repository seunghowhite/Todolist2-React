import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletetodo, toggletodo } from '../../redux/modules/todolists'
import { Cards, Container, Deletebutton, Title, Togglebutton } from './ShowTodoStyled'

function ShowDoingDone({ ISDONE }) {
  const dispatch = useDispatch();
  const todolists = useSelector((state) => state.storetodolists.todolists)

  const deletTodo = (id) => {
    dispatch(deletetodo(
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
      <Title>{ISDONE ? 'working...🔥' : 'done...✅'}</Title>
      <Container >
        {todolists.filter((list) => list.isDone === ISDONE).map((list) => {
          return (
            <Cards key={list.id}>
              <Link to={`/detailtodo/${list.id}`} >제목:<br />{list.title}</Link>
              <p>내용:<br />{list.content}</p>
              <Deletebutton on onClick={() => deletTodo(list.id)}>삭재</Deletebutton>
              <Togglebutton on onClick={() => toggleTodo(list.id)}>{ISDONE ? "취소" : "완료"}</Togglebutton>
            </Cards>
          )
        })}
      </Container>
    </>
  )
}

export default ShowDoingDone