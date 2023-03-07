import React from 'react'
import { useState } from 'react'
import { addtodo } from '../redux/modules/todolists'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'


function InputForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch();
  const todolists = useSelector((state) => state.storetodolists.todolists)


  const sumbitTitle = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      alert('값을 입력하세요')
      return
    };
    dispatch(
      addtodo({
        id: todolists.length + 1,
        title: title,
        content: content,
        isDone: false,
      })
    )
    setTitle('')
    setContent('')
  }



  return (
    <Inputform onSubmit={sumbitTitle}>
      <InputTodo value={title} onChange={(event) => setTitle(event.target.value)} placeholder='제목'></InputTodo>
      <InputTodo value={content} onChange={(event) => setContent(event.target.value)} placeholder='내용'></InputTodo>
      <Submitbutton >추가</Submitbutton>
    </Inputform>
  )

}

export default InputForm

const Inputform = styled.form`
  background-color: #655DBB;
  border-radius: 5px;
  height: 10vh;
  display: flex;
  justify-content: center;
  padding: 10px;
`

const InputTodo = styled.input`
  height: 25px;
  border-radius: 5px;
  /* border: 1px solid none; */
  margin: 5px;
  border-color: #ECF2FF;

`
const Submitbutton = styled.button`
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
