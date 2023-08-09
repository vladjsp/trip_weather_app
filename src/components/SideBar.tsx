import { useAppSelector } from '../hooks/useRTK';
import { RequestStatus } from '../types/enums';
import { getIcon } from '../utils/getIcon';
import { getWeekDayName } from '../utils/getWeekDayName';
import Spinner from './Spinner';
import Timer from './Timer';

const SideBar = () => {
  const { todayWeather, requestStatus } = useAppSelector((state) => state.weather);
  const now = new Date().toISOString();
  const dayName = getWeekDayName(now);
  const iconUrl = getIcon(todayWeather.days ? todayWeather.days[0].icon : '...');

  return (
    <div className='sidebar'>
      {requestStatus === RequestStatus.Loading ? (
        <div className=''>
          <h2>Choose your trip!</h2>
          <Spinner />
        </div>
      ) : (
        <>
          {' '}
          <h2>{dayName}</h2>
          <div className='weather'>
            <img src={iconUrl} alt='weather' />
            <p>{todayWeather.days ? todayWeather.days[0].temp : 0}&deg;</p>
          </div>
          <p className='city'>{todayWeather.address || ''}</p>
          <Timer tripStartDate={'20.08.2023'} />
        </>
      )}{' '}
    </div>
  );
};

export default SideBar;
