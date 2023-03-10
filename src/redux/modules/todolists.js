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
      title: "리덕스 공부하기",
      content: "리덕스 뿌수기",
      isDone: true,
    },
  ],
};


const todolists = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_TODO:
      const lastTodoIndex = state.todolists[state.todolists.length - 1]
      const ID = lastTodoIndex.id + 1
      const addstate = {
        ...state,
        todolists: [...state.todolists,
        {
          id: ID,
          title: action.payload.title,
          content: action.payload.content,
          isDone: false,
        }
        ]
      };
      return addstate
    case DELETE_TODO:
      return {
        ...state,
        todolists: [...state.todolists.filter((item) => item.id !== action.payload)]
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