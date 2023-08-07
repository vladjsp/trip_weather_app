import { useEffect, useState } from 'react';

const Timer = ({ tripStartDate }: { tripStartDate: string }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const timerEndDate = tripStartDate.split('.');
  const formattedDate = new Date(`${timerEndDate[2]}-${timerEndDate[1]}-${timerEndDate[0]}`);

  const getTime = () => {
    const time = formattedDate.getTime() - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='timer'>
      <div>
        <p className='number'>{days}</p>
        <p className='title'>DAYS</p>
      </div>
      <div>
        <p className='number'>{hours}</p>
        <p className='title'>HOURS</p>
      </div>
      <div>
        <p className='number'>{minutes}</p>
        <p className='title'>MINUTES</p>
      </div>
      <div>
        <p className='number'>{seconds}</p>
        <p className='title'>SECONDS</p>
      </div>
    </div>
  );
};

export default Timer;
