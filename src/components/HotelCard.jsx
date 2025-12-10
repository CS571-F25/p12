import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function HotelCard() {
  return (
    <Card className="shadow-sm my-4 text-center" style={{ maxWidth: "550px" }}>
      <Card.Img
        variant="top"
        src={`${import.meta.env.BASE_URL}images/hotel.jpg`}
        alt="Hilton Madison Monona Terrace"
      />

      <Card.Body>
        <h3 className="fw-bold mb-2">Hilton Madison Monona Terrace</h3>
        <p className="mb-3">
          9 East Wilson Street<br />
          Madison, Wisconsin, 53703<br />
          USA
        </p>

        <Button
          href="https://www.hilton.com/en/hotels/msnmhhf-hilton-madison-monona-terrace/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad' }}
        >
          Visit Website
        </Button>
      </Card.Body>
    </Card>
  );
}
