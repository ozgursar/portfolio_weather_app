import { ActionType } from '../action-types'
import { Action, ApiData } from '../actions'

interface WeatherState {
  loading: boolean
  error: string | null
  data: ApiData | Record<string, never>
}

const initialState = {
  loading: false,
  error: null,
  data: {}
}

const reducer = (state: WeatherState = initialState, action: Action): WeatherState => {
  switch (action.type) {
    case ActionType.FETCH_WEATHER:
      return { loading: true, error: null, data: {} }
    case ActionType.FETCH_WEATHER_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.FETCH_WEATHER_ERROR:
      return { loading: false, error: action.payload, data: {} }
    default:
      return state
  }
}

export default reducer
