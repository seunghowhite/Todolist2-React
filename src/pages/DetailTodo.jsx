import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';



function DetailTodo() {
  const todolists = useSelector((state) => state.storetodolists.todolists)
  const params = useParams();
  const foudddata = todolists.find((item) => {
    return item.id === parseInt(params.id)
  })





  return (
    <Detailbox>
      <Detailtitle>
        {foudddata.title}
      </Detailtitle>
      <div>
        {foudddata.content}
      </div>
      <Homebuton>
        <Link to={`/`}>홈으로</Link>
      </Homebuton>
    </Detailbox>
  )
}

export default DetailTodo


const Detailbox = styled.div`
  background-color: #ECF2FF;
  border-color: #2553b4;
  border-radius: 10px;
  width: 600px;
  height: 400px;
  margin: auto;
  margin-top: 100px;
  padding: 50px;
  text-align: center;
`
const Detailtitle = styled.h1`
  margin-bottom: 50px;
`

const Homebuton = styled.button`
  height: 30px;
  margin: 10px;
  background-color: #ECF2FF;
  border-color: none;
  border-radius: 5px;
  &:hover{
    border-radius: 5px;
    background-color: #BFACE2;}
`