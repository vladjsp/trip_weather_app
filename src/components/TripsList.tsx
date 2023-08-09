import { useAppSelector } from '../hooks/useRTK';
import AddTrip from './AddTrip';
import TripCard from './TripCard';

const TripsList = () => {
  const { tripsList, searchValue } = useAppSelector((state) => state.trips);

  const filteredTrips = searchValue
    ? tripsList.filter((trip) =>
        trip.city.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : tripsList;
  return (
    <div className='trips-list'>
      {filteredTrips.map((trip) => (
        <TripCard
          key={trip.id}
          img={trip.image}
          city={trip.city}
          date1={trip.startDate}
          date2={trip.endDate}
        />
      ))}
      <AddTrip />
    </div>
  );
};

export default TripsList;
