import { Container, Row, Col } from 'react-bootstrap';
import MadisonCard from '../components/MadisonCard';
import chazen from '../assets/chazen.png'
import Terrace from '../assets/Terrace.jpg'
import monona from '../assets/monona.png'
function MadisonAttractions() {
  const attractions = [
    {
      id: 1,
      title: "Wisconsin State Capitol",
      description: "Historic government building with stunning architecture and free guided tours. The dome offers panoramic views of Madison.",
      image: "https://images.unsplash.com/photo-1666798044958-9df7c6cc279a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Wisconsin+State+Capitol,Madison,WI"
    },
    {
      id: 2,
      title: "University of Wisconsin-Madison",
      description: "Beautiful campus along Lake Mendota featuring historic buildings, the Memorial Union Terrace, and vibrant student life.",
      image: "https://images.unsplash.com/photo-1616428394230-ba242d33e3ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=University+of+Wisconsin-Madison,Madison,WI"
    },
    {
      id: 3,
      title: "Olbrich Botanical Gardens",
      description: "16 acres of outdoor gardens and a tropical conservatory. Free admission to outdoor gardens year-round.",
      image: "https://images.unsplash.com/photo-1676947296618-2dcb62ea95c1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Olbrich+Botanical+Gardens,Madison,WI"
    },
    {
      id: 4,
      title: "Henry Vilas Zoo",
      description: "Free admission zoo featuring animals from around the world, perfect for families and animal lovers.",
      image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Henry+Vilas+Zoo,Madison,WI"
    },
    {
      id: 5,
      title: "Memorial Union Terrace",
      description: "Iconic lakeside gathering spot with colorful chairs, live music, food, and stunning sunset views over Lake Mendota.",
      image: Terrace,
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Memorial+Union+Terrace,Madison,WI"
    },
    {
      id: 6,
      title: "Chazen Museum of Art",
      description: "Free art museum with collections spanning ancient to contemporary art, located on the UW-Madison campus.",
      image:chazen,
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Chazen+Museum+of+Art,Madison,WI"
    },
    {
      id: 7,
      title: "Monona Terrace",
      description: "Frank Lloyd Wright-designed convention center on Lake Monona, featuring rooftop gardens and stunning architecture.",
      image: monona,
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Monona+Terrace,Madison,WI"
    },
    {
      id: 8,
      title: "Dane County Farmers Market",
      description: "One of the largest producers-only farmers markets in the US, held around the Capitol Square every Saturday.",
      image: "https://images.unsplash.com/photo-1485637701894-09ad422f6de6?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Capitol+Square,Madison,WI"
    },
    {
      id: 9,
      title: "State Street",
      description: "Vibrant pedestrian street connecting campus to the Capitol, lined with shops, restaurants, and street performers.",
      image: "https://images.unsplash.com/photo-1616428329911-59581d132558?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      directionsLink: "https://www.google.com/maps/dir/?api=1&destination=State+Street,Madison,WI"
    }
  ];

  return (
    <Container className="mt-4">
      <div className="text-center mb-4">
        <h1>Discover Madison Attractions</h1>
        <p className="lead">
          While your team is competing, don't forget to explore everything Madison offer! From historic landmarks
          to beautiful lakeside views, cultural institutions to vibrant markets, Madison
          is a city full of charm and exciting experiences for everyone.
        </p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {attractions.map((attraction) => (
          <Col key={attraction.id}>
            <MadisonCard
              image={attraction.image}
              title={attraction.title}
              description={attraction.description}
              directionsLink={attraction.directionsLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MadisonAttractions;
