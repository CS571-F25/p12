import { Container, Row, Col } from "react-bootstrap";
import ExecCard from "../components/ExecCard";

const execList = [
  { name: "Hiranmayi Swaminathan", role: "Director" },
  { name: "Lipika Veluri", role: "Director" },
  { name: "Harnoor Kaur", role: "Director" },
  { name: "Diya Patel", role: "Head Liaison" },
  { name: "Reethu Teegala", role: "Head Liaison" },
  { name: "Harish Ghandi", role: "Head Liaison" },
  { name: "Sishir Tirumalai", role: "Finance" },
  { name: "Soham Sethi", role: "Finance" },
  { name: "Rhea Yenubari", role: "Fundraising" },
  { name: "Ria Karthik", role: "Hospitality" },
  { name: "Hema Sethulakshmi", role: "Hospitality" },
  { name: "Amitej Babra", role: "Judges" },
  { name: "Varsha Gouraram", role: "Logistics" },
  { name: "Jacob Gino", role: "Logistics" },
  { name: "Tvishi Krishnahumar", role: "Marketing" },
  { name: "Manya Mehra", role: "Marketing" },
  { name: "Arya Kethireddy", role: "Mixer" },
  { name: "Vijay Mahimtura", role: "Risk" },
  { name: "Saanvi Kandanelli", role: "Registration" },
  { name: "Bhoomi Patel", role: "Registration" },
];

export default function ExecBoard() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Executive Board</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {execList.map((person) => (
          <Col key={person.name}>
            <ExecCard name={person.name} role={person.role} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
