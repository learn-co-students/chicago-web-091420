
import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import authReducer from './todoReducer'


export default combineReducers({
  auth: authReducer,
  todos: todoReducer
})
