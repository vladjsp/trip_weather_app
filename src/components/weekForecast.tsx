import DayWeatherCard from './DayWeatherCard';
import mockForecast from '../data/mockForecast.json';

const weekForecast = () => {
  return (
    <div className='weekForecast'>
      <h3>Week</h3>
      <div className='forecast'>
        {mockForecast.days.map((day) => (
          <DayWeatherCard
            key={day.datetime + day.datetimeEpoch}
            date={day.datetime}
            icon={day.icon}
            tempmax={day.tempmax}
            tempmin={day.tempmin}
          />
        ))}
      </div>
    </div>
  );
};

export default weekForecast;
