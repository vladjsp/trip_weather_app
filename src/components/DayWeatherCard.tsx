import { getIcon } from '../utils/getIcon';
import { getWeekDayName } from '../utils/getWeekDayName';

interface IDayWeatherCardProps {
  date: string;
  icon: string;
  tempmax: number;
  tempmin: number;
}

const DayWeatherCard = ({ date, icon, tempmax, tempmin }: IDayWeatherCardProps) => {
  const dayName = getWeekDayName(date);
  const iconUrl = getIcon(icon);
  return (
    <div className='day-card'>
      <h4>{dayName}</h4>
      <img src={iconUrl} alt='weather' />
      <p>
        {tempmax}&deg; / {tempmin}&deg;
      </p>
    </div>
  );
};

export default DayWeatherCard;
