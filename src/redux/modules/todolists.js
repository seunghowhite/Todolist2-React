const ADD_TODO = 'ADDTODO'
const DELETE_TODO = 'DELETETODO'
const TOGGLE_TODO = 'TOGGLETODO'


export const addtodo = (payload) => {
  return { type: ADD_TODO, payload }
}
export const deletetodo = (payload) => {
  return { type: DELETE_TODO, payload }
}
export const toggletodo = (payload) => {
  return { type: TOGGLE_TODO, payload }
}


const initialSate = {
  todolists: [
    {
      id: 1,
      title: "리액트 강의보기",
      content: "리액트내용",
      isDone: false,
    },
    {
      id: 2,
      title: "점심 먹기",
      content: "짜장면 탕수욕",
      isDone: true,
    },
  ],
};


const todolists = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todolists: [...state.todolists, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todolists: [...state.todolists.filter((item) => item.id !== action.payload)]//필터
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todolists: state.todolists.map((item) => ({
          ...item, isDone: item.id === action.payload ? !item.isDone : item.isDone,
        }))
      };
    default:
      return state
  }
}


export default todolists