const weatherIcons: Record<number, string> = {
  1000: require('../icons/clear_day.svg').default,
  1001: require('../icons/cloudy.svg').default,
  1100: require('../icons/mostly_clear_day.svg').default,
  1101: require('../icons/partly_cloudy_day.svg').default,
  1102: require('../icons/mostly_cloudy.svg').default,
  2000: require('../icons/fog.svg').default,
  2100: require('../icons/fog_light.svg').default,
  4000: require('../icons/drizzle.svg').default,
  4001: require('../icons/rain.svg').default,
  4200: require('../icons/rain_light.svg').default,
  4201: require('../icons/rain_heavy.svg').default,
  5000: require('../icons/snow.svg').default,
  5001: require('../icons/flurries.svg').default,
  5100: require('../icons/snow_light.svg').default,
  5101: require('../icons/snow_heavy.svg').default,
  6000: require('../icons/freezing_drizzle.svg').default,
  6001: require('../icons/freezing_rain.svg').default,
  6200: require('../icons/freezing_rain_light.svg').default,
  6201: require('../icons/freezing_rain_heavy.svg').default,
  7000: require('../icons/ice_pellets.svg').default,
  7101: require('../icons/ice_pellets_heavy.svg').default,
  7102: require('../icons/ice_pellets_light.svg').default,
  8000: require('../icons/tstorm.svg').default
}

const WeatherIcon: React.FC<{ weatherCode: number }> = ({ weatherCode }) => {
  return (
    <div className="weather-icon">
      <img src={weatherIcons[weatherCode]} width="100" height="100" alt="Weather Icon" />
    </div>
  )
}

export default WeatherIcon
