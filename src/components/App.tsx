import { Provider } from 'react-redux'
import { store } from '../state'
import WeatherCard from './WeatherCard'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Weather App</h1>
        <WeatherCard />
      </div>
    </Provider>
  )
}

export default App
