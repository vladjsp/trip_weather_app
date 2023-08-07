import { getIcon } from '../utils/getIcon';
import { getWeekDayName } from '../utils/getWeekDayName';
import Timer from './Timer';

const SideBar = ({ city, tripStartDate }: { city: string; tripStartDate: string }) => {
  const now = new Date().toISOString();
  const dayName = getWeekDayName(now);
  const iconUrl = getIcon('cloudy');

  return (
    <div className='sidebar'>
      <h2>{dayName}</h2>
      <div className='weather'>
        <img src={iconUrl} alt='weather' />
        <p>25&deg;</p>
      </div>
      <p className='city'>{city || 'Berlin'}</p>
      <Timer tripStartDate={tripStartDate} />
    </div>
  );
};

export default SideBar;
