import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const competitionDate = new Date(targetDate);
    const now = new Date();
    const difference = competitionDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-black text-white rounded p-4 w-75 mx-auto">
      <div className="d-flex justify-content-center gap-4 align-items-center">
        <div className="text-center">
          <div className="display-4 fw-bold mb-0">{timeLeft.days}</div>
          <div className="mt-2">Days</div>
        </div>
        <span className="display-4 mb-0">:</span>
        <div className="text-center">
          <div className="display-4 fw-bold mb-0">{timeLeft.hours}</div>
          <div className="mt-2">Hours</div>
        </div>
        <span className="display-4 mb-0">:</span>
        <div className="text-center">
          <div className="display-4 fw-bold mb-0">{timeLeft.minutes}</div>
          <div className="mt-2">Mins</div>
        </div>
        <span className="display-4 mb-0">:</span>
        <div className="text-center">
          <div className="display-4 fw-bold mb-0">{timeLeft.seconds}</div>
          <div className="mt-2">Secs</div>
        </div>
      </div>
      <div className="text-center mt-3 fs-5">Coming Soon 03.07.26</div>
    </div>
  );
}

export default CountdownTimer;
