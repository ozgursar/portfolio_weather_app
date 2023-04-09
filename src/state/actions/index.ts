import { ActionType } from '../action-types'

interface FetchWeatherAction {
  type: ActionType.FETCH_WEATHER
}

interface FetchWeatherSuccessAction {
  type: ActionType.FETCH_WEATHER_SUCCESS
  payload: ApiData
}

interface FetchWeatherErrorAction {
  type: ActionType.FETCH_WEATHER_ERROR
  payload: string
}

export type Action = FetchWeatherAction | FetchWeatherSuccessAction | FetchWeatherErrorAction

export interface ApiData {
  data: {
    time: Date
    values: {
      humidity: number
      precipitationProbability: number
      pressureSurfaceLevel: number
      rainIntensity: number
      sleetIntensity: number
      snowIntensity: number
      temperature: number
      temperatureApparent: number
      uvIndex: number
      visibility: number
      windDirection: number
      windGust: number
      windSpeed: number
    }
  }
  location: {
    lat: number
    lon: number
    name?: string
  }
}
