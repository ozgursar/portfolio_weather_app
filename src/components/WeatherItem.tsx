const weatherIcons: Record<string, string> = {
  humidity: require('../icons/water-percent.svg').default,
  precipitationProbability: require('../icons/weather-snowy-rainy.svg').default,
  windSpeed: require('../icons/weather-windy.svg').default,
  uvIndex: require('../icons/sun-wireless-outline.svg').default
}

const WeatherIcon: React.FC<{ itemType: string; itemName: string; itemData: number }> = ({
  itemType,
  itemName,
  itemData
}) => {
  return (
    <div className="weather-item">
      <img src={weatherIcons[itemType]} width="40" height="40" alt="Weather Item Icon" />
      <span>{itemName}</span>
      <span>{itemData}</span>
    </div>
  )
}

export default WeatherIcon
