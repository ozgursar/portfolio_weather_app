import { combineReducers } from 'redux'
import weatherDataReducer from './weatherDataReducer'

const reducers = combineReducers({
  weatherData: weatherDataReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
