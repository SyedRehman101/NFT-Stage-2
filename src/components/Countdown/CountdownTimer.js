import { useCountdown } from "../../hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
import './style.css';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show_counter">
      <DateTimeDisplay value={days} type={'Days'} />
      <p className="text-7xl text-pure px-2">.</p>
      <DateTimeDisplay value={hours} type={'Hours'} />
      <p className="text-7xl text-pure px-2">.</p>
      <DateTimeDisplay value={minutes} type={'Mins'} />
      <p className="text-7xl text-pure px-2">.</p>
      <DateTimeDisplay value={seconds} type={'Seconds'} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <></>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;