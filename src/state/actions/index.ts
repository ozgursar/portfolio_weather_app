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

interface FetchLocationAction {
  type: ActionType.FETCH_LOCATION
}

interface FetchLocationSuccessAction {
  type: ActionType.FETCH_LOCATION_SUCCESS
  payload: LocationData
}

interface FetchLocationErrorAction {
  type: ActionType.FETCH_LOCATION_ERROR
  payload: string
}

export type Action =
  | FetchWeatherAction
  | FetchWeatherSuccessAction
  | FetchWeatherErrorAction
  | FetchLocationAction
  | FetchLocationSuccessAction
  | FetchLocationErrorAction

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
      weatherCode: number
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

export interface LocationData {
  city: string
  latitude: number
  longitude: number
}
