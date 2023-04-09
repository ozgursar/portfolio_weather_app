import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const fetchWeather = (lat: string, lon: string) => {
  return async (dispatch: Dispatch<Action>) => {
    // Flag loading and clear any errors
    dispatch({
      type: ActionType.FETCH_WEATHER
    })

    // Query the API
    try {
      const { data } = await axios.get('https://api.tomorrow.io/v4/weather/realtime', {
        params: {
          //location: 'toronto',
          //location: '41.015137, 28.979530'
          location: `${lat}, ${lon}`,
          apikey: 'KvwSSJ8UXkfGnj7b8curOXGnlEm27e0P'
        }
      })

      dispatch({
        type: ActionType.FETCH_WEATHER_SUCCESS,
        payload: data
      })
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.FETCH_WEATHER_ERROR,
          payload: err.message
        })
      }
    }
  }
}
