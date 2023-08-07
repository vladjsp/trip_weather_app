interface ITripCardProps {
  img: string;
  title: string;
  dates: string;
}

const TripCard = ({ img, title, dates }: ITripCardProps) => {
  return (
    <div className='trip-card'>
      <img src={img} alt={title} />
      <div className='trip-card__description'>
        <h3>{title}</h3>
        <p>{dates}</p>
      </div>
    </div>
  );
};

export default TripCard;
