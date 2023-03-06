//ActionValue
const ADD_TODO = 'ADDTODO'
//ActionCreator
export const addtodo = (payload) => {
  return { type: ADD_TODO, payload: payload }
}


//기존값
const initialSate = {
  todolists: [
    {
      id: 1,
      title: "리액트 강의보기",

    },
    {
      id: 2,
      title: "점심 먹기",

    },
  ],
};

//리턴값 중요
const todolists = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todolists: [...state.todolists, action.payload]
      };
    default:
      return state
  }
}


//todolists방출
export default todolists