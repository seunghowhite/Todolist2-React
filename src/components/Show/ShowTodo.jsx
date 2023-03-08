import React from 'react'
import ShowDoingDone from './ShowDoingDone';

function ShowTodo() {
  return (
    <>
      <ShowDoingDone ISDONE={false}></ShowDoingDone>
      <ShowDoingDone ISDONE={true}></ShowDoingDone>
    </>
  )
}

export default ShowTodo

