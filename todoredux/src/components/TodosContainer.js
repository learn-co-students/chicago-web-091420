
import React from 'react'
import { connect } from 'react-redux'
import TodoCard from './TodoCard'


const TodosContainer = (props) => {
   return (
     <div>
       {
         props.todos.map(todo => {
           return <TodoCard key={todo.id} {...todo} />
         })
       }
     </div>
   )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(TodosContainer);
