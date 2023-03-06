
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deletetodo, toggletodo } from './redux/modules/todolists';




const App = () => {
  const [title, setTitle] = useState('')//로컬 state값 
  const [content, setContent] = useState('')
  const todolists = useSelector((state) => state.storetodolists.todolists)//배열 key값 잘 작성 해야함
  const dispatch = useDispatch();

  // 제출하기
  const sumbitTitle = (e) => {
    e.preventDefault();//이벤트 억제 중요


    if (title === "" || content === "") {//입력값 받기
      alert('값을 입력하세요')
      return
    };


    dispatch(//모듈에있는 함수를 가지고와서 action객체를 던진다.
      addtodo({
        id: todolists.length + 1,
        title: title, //title값 받아서 전해준다
        content: content,
        isDone: false,
      })
    )

    setTitle('')//버튼 클릭후 초기화
    setContent('')//버튼 클릭후 초기화
  }


  //삭재하기

  const deletTodo = (id) => {
    dispatch(deletetodo(//그냥id만 보냄
      id
    ))
  }

  //완료
  const toggleTodo = (id) => {
    dispatch(toggletodo(
      id
    ))
  }



  return (
    <>
      {/*투두리스트  */}
      <div>
        <h1>투두리스트 만들기</h1>
      </div>

      {/* 제출하는곳 */}
      <form onSubmit={sumbitTitle}>
        <input value={title} onChange={(event) => setTitle(event.target.value)}></input>
        <input value={content} onChange={(event) => setContent(event.target.value)}></input>
        <button >추가</button>
      </form>
      {/* 보여주는곳 */}
      <div style={{ border: '1px solid black' }}>
        {todolists.filter((list) => list.isDone === false).map((list) => {
          return (
            <div key={list.id}>제목:{list.title}내용:{list.content}
              <button on onClick={() => deletTodo(list.id)}>삭재</button>
              <button on onClick={() => toggleTodo(list.id)}>완료</button>
            </div>
          )
        })}
      </div>

      <div style={{ border: '1px solid black' }}>
        {todolists.filter((list) => list.isDone === true).map((list) => {
          return (
            <div key={list.id}>제목:{list.title}내용:{list.content}
              <button on onClick={() => deletTodo(list.id)}>삭재</button>
              <button on onClick={() => toggleTodo(list.id)}>취소</button>
            </div>
          )
        })}
      </div>

    </>
  )

}



export default App;