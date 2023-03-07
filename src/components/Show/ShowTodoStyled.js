import styled from 'styled-components'

export const Container = styled.div`
  /* border: 4px solid #BFACE2; */
  margin: 20px 0px;
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
`

export const Cards = styled.div`
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

export const Deletebutton = styled.button`
  
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


export const Togglebutton = styled.button`
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
export const Title = styled.div`
  font-weight: bolder;
  font-size: 30px;
  margin-left: 10px;
`