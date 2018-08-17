
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import charactersReducer from './characters/'

import comicsReducer from './comics/'

export default combineReducers({
  characters: charactersReducer,
  comics: comicsReducer,
  router: routerReducer
})