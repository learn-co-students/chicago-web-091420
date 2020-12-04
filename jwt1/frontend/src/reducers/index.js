


import { combineReducers } from 'redux'
import auth from './auth'
import comments from './exampleReducer'

export default combineReducers({
  auth,
  comments
})
