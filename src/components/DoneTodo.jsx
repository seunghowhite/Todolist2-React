import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deletetodo, toggletodo } from '../redux/modules/todolists';

function DoneTodo() {
  const dispatch = useDispatch();
  const todolists = useSelector((state) => state.storetodolists.todolists)


  const deletTodo = (id) => {
    dispatch(deletetodo(id))
  }
  const toggleTodo = (id) => {
    dispatch(toggletodo(id))
  }


  return (
    <>
      <Title>
        Done
      </Title>
      <Container >
        {todolists.filter((list) => list.isDone === true).map((list) => {
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
    </>
  )
}

export default DoneTodo


const Container = styled.div`
  /* border: 4px solid #BFACE2; */
  margin: 20px 0px;
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
`

const Cards = styled.div`
  display: flex ;
  min-height: 150px;
  width: 20%;
  min-width: 200px;
  flex-direction: column;
  border: 3px solid #BFACE2;
  border-radius: 5px;
  padding: 10px;
  margin: 2% 1%;
  text-align: center;
`

const Deletebutton = styled.button`
  width: 50px;
  height: 30px;
  margin-bottom: 4px;
  background-color: #c3c6ce;
  border: none;
  &:hover{
  background-color: #e23333;
  border:none ;
  }
`


const Togglebutton = styled.button`
  width: 50px;
  height: 30px;
  margin-bottom: 4px;
  background-color: #c3c6ce;
  border: none;
  &:hover{
  background-color: #638b50;
  border:none ;
  }
`

const Title = styled.div`
  font-weight: bolder;
  font-size: 30px;
  margin-left: 10px;
`