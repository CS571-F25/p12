import { Card } from 'react-bootstrap';

function TestimonialCard({ quote, name, team, year }) {
  return (
    <Card className="h-100 shadow-sm border-0 text-center p-4 text-white" style={{ backgroundColor: '#6a0dad' }}>
      <Card.Body className="d-flex flex-column justify-content-center">
        <div className="mb-4">
          <i className="bi bi-quote" style={{ fontSize: '3rem', color: 'white' }}></i>
        </div>
        <Card.Text className="fs-5 fst-italic mb-4">
          "{quote}"
        </Card.Text>
        <div className="mt-auto">
          <Card.Title className="mb-1 fw-bold">{name}</Card.Title>
          <Card.Subtitle className="text-white-50">{team}</Card.Subtitle>
          <Card.Text className="text-white-50 small mt-1">{year}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TestimonialCard;
