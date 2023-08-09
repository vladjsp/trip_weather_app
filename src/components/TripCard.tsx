import { useAppDispatch } from '../hooks/useRTK';
import { getTodayWeather, getTripWeather } from '../redux/slices/weatherSlice';

interface ITripCardProps {
  img: string;
  city: string;
  date1: string; //start date
  date2: string; // end date
}

const TripCard = ({ img, city, date1, date2 }: ITripCardProps) => {
  const dispatch = useAppDispatch();

  const handleTripCardClick = () => {
    dispatch(getTripWeather({ city, date1, date2 }));
    dispatch(getTodayWeather(city));
  };

  return (
    <div className='trip-card' onClick={handleTripCardClick}>
      <img src={img} alt={city} />
      <div className='trip-card__description'>
        <h3>{city}</h3>
        <p>{`${date1} - ${date2}`}</p>
      </div>
    </div>
  );
};

export default TripCard;
