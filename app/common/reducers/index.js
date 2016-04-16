import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import photo from './photo'
import sidebar from './sidebar'


const rootReducer = combineReducers({
  counter,
  photo,
  sidebar,
  routing: routerReducer
})

export default rootReducer
