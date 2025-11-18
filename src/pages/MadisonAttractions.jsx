import { Container, Row, Col } from 'react-bootstrap';
import MadisonCard from '../components/MadisonCard';

function MadisonAttractions() {
  const attractions = [
    {
      id: 1,
      title: "Wisconsin State Capitol",
      description: "Historic government building with stunning architecture and free guided tours. The dome offers panoramic views of Madison.",
      image: "https://images.unsplash.com/photo-1666798044958-9df7c6cc279a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "University of Wisconsin-Madison",
      description: "Beautiful campus along Lake Mendota featuring historic buildings, the Memorial Union Terrace, and vibrant student life.",
      image: "https://images.unsplash.com/photo-1616428394230-ba242d33e3ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Olbrich Botanical Gardens",
      description: "16 acres of outdoor gardens and a tropical conservatory. Free admission to outdoor gardens year-round.",
      image: "https://images.unsplash.com/photo-1676947296618-2dcb62ea95c1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Henry Vilas Zoo",
      description: "Free admission zoo featuring animals from around the world, perfect for families and animal lovers.",
      image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Memorial Union Terrace",
      description: "Iconic lakeside gathering spot with colorful chairs, live music, food, and stunning sunset views over Lake Mendota.",
      image: "https://lh3.googleusercontent.com/p/AF1QipPOvvnNwJf7VoT5WsotECz-9er5jJtgvJcG3R6P=s1360-w1360-h1020-rw"
    },
    {
      id: 6,
      title: "Chazen Museum of Art",
      description: "Free art museum with collections spanning ancient to contemporary art, located on the UW-Madison campus.",
      image: "https://lh3.googleusercontent.com/p/AF1QipMc7nG65r3Gzi3q4OsWAzbIHZTIUiOKgzAyUYVr=s1360-w1360-h1020-rw"
    },
    {
      id: 7,
      title: "Monona Terrace",
      description: "Frank Lloyd Wright-designed convention center on Lake Monona, featuring rooftop gardens and stunning architecture.",
      image: "https://lh3.googleusercontent.com/p/AF1QipMqsyxYBWZNI3BsCiIyuVzHPKs7BRDbaHVuMDbi=s1360-w1360-h1020-rw"
    },
    {
      id: 8,
      title: "Dane County Farmers Market",
      description: "One of the largest producers-only farmers markets in the US, held around the Capitol Square every Saturday.",
      image: "https://images.unsplash.com/photo-1485637701894-09ad422f6de6?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 9,
      title: "State Street",
      description: "Vibrant pedestrian street connecting campus to the Capitol, lined with shops, restaurants, and street performers.",
      image: "https://images.unsplash.com/photo-1616428329911-59581d132558?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <Container className="mt-4">
      <div className="text-center mb-4">
        <h1>Discover Madison Attractions</h1>
        <p className="lead">
          Explore the best that Madison, Wisconsin has to offer! From historic landmarks
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
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MadisonAttractions;
