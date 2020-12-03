
const todoReducer = (state=[], action) => {
  let updatedTodos = []
  switch(action.type){
    case 'LOGIN_SUCCESS': 
      return action.user.todos
    case 'FETCH_TODOS_SUCCESS':
      return action.todos
    case 'DELETE_TODO':
      updatedTodos = state.filter(t => t.id !== action.id)
      return updatedTodos
    case 'ADD_TODO':
      return [...state, action.newTodo]
    case 'UPDATE_TODO':
      updatedTodos = state.map(t => {
        if(t.id === action.updatedTodo.id){
          return action.updatedTodo
        } else {
          return t
        }
      })

      return updatedTodos
    default:
      return state
  }
}

export default todoReducer

