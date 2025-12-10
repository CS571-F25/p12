import { ProgressBar } from 'react-bootstrap';

function DonationMeter({ current, goal, color = '#6a0dad' }) {
  const percentage = goal > 0 ? Math.min((current / goal) * 100, 100) : 0;

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between mb-2">
        <span className="fw-bold">${current.toLocaleString()} raised</span>
        <span className="text-muted">Goal: ${goal.toLocaleString()}</span>
      </div>
      <ProgressBar
        now={percentage}
        style={{ height: '25px', backgroundColor: '#e0e0e0' }}
      >
        <ProgressBar
          now={percentage}
          style={{ backgroundColor: color }}
          label={`${percentage.toFixed(0)}%`}
        />
      </ProgressBar>
    </div>
  );
}

export default DonationMeter;
