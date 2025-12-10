import { Card, Button } from 'react-bootstrap';

function PhilanthropyCard({ name, description, image, website, year }) {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Body className="d-flex flex-column">
        <div className="text-center mb-3">
          
        </div>
        <Card.Title className="text-center mb-3 h4">{name}</Card.Title>
        <div className="text-center mb-2">
          <span className="badge" style={{ backgroundColor: '#6a0dad' }}>{year} Winner's Choice</span>
        </div>
        <Card.Text className="text-muted flex-grow-1">
          {description}
        </Card.Text>

        <div className="text-center mt-3">
          <Button
            href={website}
            target="_blank"
            className="w-100"
            style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad', color: 'white' }}
          >
            Learn More 
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PhilanthropyCard;
