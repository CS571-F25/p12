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
    <div className="text-white w-100" style={{ backgroundColor: '#6a0dad', padding: '10px 0' }}>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <span className="fw-bold">Coming Soon 03.07.26</span>
        <span>|</span>
        <div className="d-flex align-items-center gap-2">
          <span className="fw-bold">{timeLeft.days}</span>
          <span className="small">Days</span>
          <span>:</span>
          <span className="fw-bold">{timeLeft.hours}</span>
          <span className="small">Hours</span>
          <span>:</span>
          <span className="fw-bold">{timeLeft.minutes}</span>
          <span className="small">Mins</span>
          <span>:</span>
          <span className="fw-bold">{timeLeft.seconds}</span>
          <span className="small">Secs</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
