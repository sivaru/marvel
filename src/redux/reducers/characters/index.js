import * as a from '../../actions/types'

const INITIAL_STATE = {
  characters: [],
  total: 0,
  isLoading: false,
  isSearch: false,
  error: ''
}

function charactersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.CHARACTERS_GET20_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSearch: false


      }

    case a.CHARACTERS_GET20_SUCCESS:
      return {
        ...state,
        characters: action.payload.results,
        isLoading: false,
        total: action.payload.total
      }

    case a.CHARACTERS_GET20_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    //searching functionality

    case a.CHARACTERS_SEARCH_REQUEST:
      return {
        ...state,
        isSearch: true,
        isLoading: true
      }

    case a.CHARACTERS_SEARCH_SUCCESS:
      console.log(action)
      return {
        ...state,
        characters: action.payload.results,
        total: action.payload.total,
        isLoading: false
      }

    case a.CHARACTERS_SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    default:
      return state
  }
}

export default charactersReducer