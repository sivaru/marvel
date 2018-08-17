import * as a from '../../actions/types'

const INITIAL_STATE = {
  comics: [],
  total: 0,
  isLoading: false,
  isSearch: false,
  error: ''
}

function comicsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.COMICS_GET20_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSearch: false


      }

    case a.COMICS_GET20_SUCCESS:
      return {
        ...state,
        comics: action.payload.results,
        isLoading: false,
        total: action.payload.total
      }

    case a.COMICS_GET20_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    //searching functionality

    case a.COMICS_SEARCH_REQUEST:
      return {
        ...state,
        isSearch: true,
        isLoading: true
      }

    case a.COMICS_SEARCH_SUCCESS:
      return {
        ...state,
        comics: action.payload.results,
        total: action.payload.total,
        isLoading: false
      }

    case a.COMICS_SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    default:
      return state
  }
}

export default comicsReducer