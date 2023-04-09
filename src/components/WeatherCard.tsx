import { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const WeatherCard: React.FC = () => {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const { fetchWeather } = useActions()
  const { data, error, loading } = useTypedSelector(state => state.weatherData)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //dispatch(actionCreators.fetchWeather(lat, lon) as any)
    fetchWeather(lat, lon)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={lat} onChange={e => setLat(e.target.value)} placeholder="Lat" />
        <input value={lon} onChange={e => setLon(e.target.value)} placeholder="Lon" />
        <button>Fetch Weather Data</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (data.data ? data.data.values.temperature : '')}
    </div>
  )
}

export default WeatherCard
