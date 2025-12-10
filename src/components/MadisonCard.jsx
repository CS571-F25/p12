import { Card, Button } from 'react-bootstrap';

function MadisonCard({ image, title, description, directionsLink }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          href={directionsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto"
          style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad', color: 'white' }}
        >
          Get Directions
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MadisonCard;
