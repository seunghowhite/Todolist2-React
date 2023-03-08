import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Detailbox, Detailtitle, Homebuton, TodoID } from './DetailTodoStyled';

function DetailTodo() {
  const todolists = useSelector((state) => state.storetodolists.todolists)
  const params = useParams();
  const foudddata = todolists.find((item) => {
    return item.id === parseInt(params.id)
  })
  console.log(foudddata);

  return (
    <Detailbox>
      <Detailtitle>
        제목:{foudddata.title}
      </Detailtitle>
      <TodoID>
        ID:{foudddata.id}
      </TodoID>
      <TodoID>
        내용:{foudddata.content}
      </TodoID>
      <Homebuton>
        <Link to={`/`}>홈으로</Link>
      </Homebuton>
    </Detailbox>
  )
}

export default DetailTodo


