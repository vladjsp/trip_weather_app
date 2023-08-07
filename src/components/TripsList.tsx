import trips from '../data/mock.json';
import AddTrip from './AddTrip';
import TripCard from './TripCard';

const TripsList = () => {
  return (
    <div className='trips-list'>
      {trips.map((trip) => (
        <TripCard key={trip.id} img={trip.image} title={trip.city} dates={trip.startDate} />
      ))}
      <AddTrip />
    </div>
  );
};

export default TripsList;
