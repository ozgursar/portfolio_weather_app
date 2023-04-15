import { useEffect, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import WeatherIcon from './WeatherIcon'
import WeatherCondition from './WeatherCondition'
import WeatherItem from './WeatherItem'

const WeatherCard: React.FC = () => {
  const { fetchWeather, fetchLocation } = useActions()
  const { data, error, loading } = useTypedSelector(state => state.weatherData)
  const {
    data: { city, latitude, longitude },
    error: locationDataError
  } = useTypedSelector(state => state.locationData)

  const [formLocation, setFormLocation] = useState('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (formLocation) {
      fetchWeather(0, 0, formLocation)
      document.title = `${formLocation} | Current Weather Conditions`
      setFormLocation('')
    }
  }

  useEffect(() => {
    const getLocation = async () => {
      await fetchLocation()
    }
    getLocation()
  }, [])

  useEffect(() => {
    if (city && latitude && longitude) {
      fetchWeather(latitude, longitude)
    }
    document.title = `${city} | Current Weather Conditions`
  }, [city])

  if (error || locationDataError)
    return (
      <h3>
        {error}
        {locationDataError}
      </h3>
    )
  if (loading) return <h3>Loading...</h3>
  if (data.data)
    return (
      <>
        <div className="weather-card">
          <h2 className="city">{data.location.name ? data.location.name.split(',')[0] : city}</h2>
          <span className="temperature">{Math.ceil(data.data.values.temperature)}</span>
          <WeatherIcon weatherCode={data.data.values.weatherCode} />
          <WeatherCondition weatherCode={data.data.values.weatherCode} />
          <div className="weather-items">
            <WeatherItem
              itemType="humidity"
              itemName="Humidity"
              itemData={data.data.values.humidity}
            />
            <WeatherItem
              itemType="precipitationProbability"
              itemName="Precipitation Probability"
              itemData={data.data.values.precipitationProbability}
            />
            <WeatherItem
              itemType="windSpeed"
              itemName="Wind Gust"
              itemData={data.data.values.windGust}
            />
            <WeatherItem
              itemType="uvIndex"
              itemName="UV Index"
              itemData={data.data.values.uvIndex}
            />
          </div>
        </div>
        <footer className="credits">
          <span>
            Weather Data:{' '}
            <a href="https://tomorrow.io" target="_blank" rel="nofollow">
              tomorrow.io
            </a>
          </span>
          <span>
            Last Update:
            {new Date(data.data.time).toLocaleString('en-AU')}
          </span>
        </footer>
        <form className="location-change-form" onSubmit={onSubmit}>
          <h3>Change Location</h3>
          <div className="form-fields">
            <input
              type="text"
              value={formLocation}
              placeholder="Location / City"
              onChange={event => setFormLocation(event.target.value)}
            />
            <button type="submit" className="btn">
              GO
            </button>
          </div>
        </form>
      </>
    )
  return <></>
}

export default WeatherCard
