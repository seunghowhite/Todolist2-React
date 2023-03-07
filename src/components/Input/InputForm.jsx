import React from 'react'
import { useState } from 'react'
import { addtodo } from '../../redux/modules/todolists'
import { useDispatch, useSelector } from 'react-redux'
import { Inputform, InputTodo, Submitbutton } from './InputFormStyled'


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
