import { Card } from 'react-bootstrap';

function MadisonCard({ image, title, description }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MadisonCard;
