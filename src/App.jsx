
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addtodo } from './redux/modules/todolists';




const App = () => {
  const [title, setTitle] = useState('')//로컬 state값 
  const todolists = useSelector((state) => state.storetodolists.todolists)//배열 key값 잘 작성 해야함
  const dispatch = useDispatch();

  // 제출하기
  const sumbitTitle = (e) => {
    e.preventDefault();//이벤트 억제 중요


    if (title === "") {//입력값 받기
      alert('값을 입력하세요')
      return
    };

    dispatch(//모듈에있는 함수를 가지고와서 action객체를 던진다.
      addtodo({
        id: todolists.length + 1,
        title: title //title값 받아서 전해준다
      })
    )

    setTitle('')//버튼 클릭후 초기화
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
        {title}

        <button >추가</button>
      </form>

      {/* 보여주는곳 */}
      <div>
        {todolists.map((list) => {
          return (
            <div key={list.id}>{list.title}</div>
          )
        })}
      </div>

    </>
  )

}



export default App;