
import { combineReducers } from 'redux'
import paintingsReducer from './paintings'
import loadingReducer from './loading'

export default combineReducers({
  paintings: paintingsReducer,
  loading: loadingReducer
})
