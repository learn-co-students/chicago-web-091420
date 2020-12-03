
export const fetchTodosSuccess = (todos) => {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id 
  }
}

export const addTodo = (newTodo) => {
  return {
    type: 'ADD_TODO',
    newTodo
  }
}

export const updateTodo = (updatedTodo) => {
  return {
    type: 'UPDATE_TODO',
    updatedTodo
  }
}
