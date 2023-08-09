import { useAppSelector } from '../hooks/useRTK';
import DayWeatherCard from './DayWeatherCard';
import { RequestStatus } from '../types/enums';
import Spinner from './Spinner';

const WeekForecast = () => {
  const { requestStatus, tripWeather } = useAppSelector((state) => state.weather);

  const daysWeatherToDisplay = tripWeather.days?.slice(0, 7);
  return (
    <div className='weekForecast'>
      <h3>Week</h3>
      {requestStatus === RequestStatus.Loading ? (
        <Spinner />
      ) : (
        <div className='forecast'>
          {daysWeatherToDisplay
            ? daysWeatherToDisplay.map((day) => (
                <DayWeatherCard
                  key={day.datetime + day.datetimeEpoch}
                  date={day.datetime}
                  icon={day.icon}
                  tempmax={day.tempmax}
                  tempmin={day.tempmin}
                />
              ))
            : ''}
        </div>
      )}
    </div>
  );
};

export default WeekForecast;
