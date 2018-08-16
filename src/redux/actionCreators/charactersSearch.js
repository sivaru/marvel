import * as a from '../actions/types'

const API_URL = 'https://gateway.marvel.com:443/v1/public/characters?apikey=1535cfba2d65e7a268cf7cc79d377bd1';

export default function searchCharacters (name, offset) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.CHARACTERS_SEARCH_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(`${API_URL}&nameStartsWith=${name}&offset=${offset}`)
      const result = await response.json()
      // Update payload in reducer on success
      dispatch({
        type: a.CHARACTERS_SEARCH_SUCCESS,
        payload: result.data
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.CHARACTERS_SEARCH_FAILURE,
        error: err
      })
    }
  }
}