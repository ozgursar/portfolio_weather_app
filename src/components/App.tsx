import { Provider } from 'react-redux'
import { store } from '../state'
import WeatherCard from './WeatherCard'

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <WeatherCard />
      </div>
    </Provider>
  )
}

export default App
