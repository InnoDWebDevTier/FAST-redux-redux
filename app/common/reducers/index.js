import { combineReducers } from 'redux'
import counter from './counter'
import photo from './photo'
import sidebar from './sidebar'

const rootReducer = combineReducers({
  counter,
  photo,
  sidebar
})

export default rootReducer
