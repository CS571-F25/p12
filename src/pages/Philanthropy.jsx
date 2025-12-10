import { Container, Row, Col } from 'react-bootstrap';
import PhilanthropyCard from '../components/PhilanthropyCard';
import DonationMeter from '../components/DonationMeter';

function Philanthropy() {
  const philanthropies = [
    {
      id: 1,
      name: "Make-A-Wish Foundation",
      description: "Make-A-Wish creates life-changing wishes for children with critical illnesses. We seek to bring every eligible child's wish to life because a wish is an integral part of a child's treatment journey.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Make-A-Wish_Foundation_logo.svg/320px-Make-A-Wish_Foundation_logo.svg.png",
      website: "https://wish.org",
      current: 12500,
      year: 2023
    },
    {
      id: 2,
      name: "Doctors Without Borders",
      description: "Doctors Without Borders/Médecins Sans Frontières (MSF) provides medical humanitarian aid to people affected by conflict, epidemics, disasters, or exclusion from healthcare in over 70 countries.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Medicins_Sans_Frontieres.svg/320px-Medicins_Sans_Frontieres.svg.png",
      website: "https://www.doctorswithoutborders.org",
      current: 18750,
      year: 2024
    },
    {
      id: 3,
      name: "St. Jude Children's Research Hospital",
      description: "St. Jude Children's Research Hospital is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases. Families never receive a bill from St. Jude.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/St._Jude_Children%27s_Research_Hospital_logo.svg/320px-St._Jude_Children%27s_Research_Hospital_logo.svg.png",
      website: "https://www.stjude.org",
      current: 22000,
      year: 2025
    }
  ];

  return (
    <Container className="mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Our Philanthropies</h1>
        <p className="lead">
          MadTown Bhangra is committed to giving back to the community.
          A portion of all competition proceeds goes to support these amazing organizations.
          Each year's winning team chooses which organization to donate to.
        </p>
      </div>

      <div className="mb-5">
        <h2 className="text-center mb-4">2026 Fundraising Progress</h2>
        <DonationMeter current={0} goal={10000} />
      </div>

      <Row xs={1} md={2} lg={3} className="g-4 mb-5">
        {philanthropies.map((philanthropy) => (
          <Col key={philanthropy.id}>
            <PhilanthropyCard
              name={philanthropy.name}
              description={philanthropy.description}
             
              website={philanthropy.website}
              year={philanthropy.year}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Philanthropy;
