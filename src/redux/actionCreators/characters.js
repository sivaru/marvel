import * as a from '../actions/types'

const API_URL = 'https://gateway.marvel.com:443/v1/public/characters?apikey=1535cfba2d65e7a268cf7cc79d377bd1';


export default function get20Characters (offset=0) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.CHARACTERS_GET20_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(`${API_URL}&offset=${offset}`)
      const result = await response.json()
      // Update payload in reducer on success
      dispatch({
        type: a.CHARACTERS_GET20_SUCCESS,
        payload: result.data
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.CHARACTERS_GET20_FAILURE,
        error: err
      })
    }
  }
}
