import { combineReducers } from 'redux'
import weatherDataReducer from './weatherDataReducer'
import locationReducer from './locationReducer'

const reducers = combineReducers({
  weatherData: weatherDataReducer,
  locationData: locationReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
