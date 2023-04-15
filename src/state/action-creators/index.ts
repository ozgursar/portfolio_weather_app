import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const fetchWeather = (lat: number, lon: number, location?: string) => {
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
          location: location ? location : `${lat}, ${lon}`,
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

export const fetchLocation = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_LOCATION
    })
    try {
      const { data } = await axios.get(
        'https://geolocation-db.com/json/67273a00-5c4b-11ed-9204-d161c2da74ce'
      )
      dispatch({
        type: ActionType.FETCH_LOCATION_SUCCESS,
        payload: data
      })
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.FETCH_LOCATION_ERROR,
          payload: err.message
        })
      }
    }
  }
}
