
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import charactersReducer from './characters/'

export default combineReducers({
  characters: charactersReducer,
  router: routerReducer
})