import Card from "react-bootstrap/Card";

export default function TeamCard({ teamName, img, alt }) {
  return (
    <Card style={{ width: "18rem" }} className="mx-auto mb-4 shadow-sm">
      <Card.Img
        variant="top"
        src={img}
        alt={alt}
        style={{ height: "230px", objectFit: "cover", borderRadius: "8px" }}
      />
      <Card.Body className="text-center">
        <Card.Title className="fw-bold">{teamName}</Card.Title>
      </Card.Body>
    </Card>
  );
}