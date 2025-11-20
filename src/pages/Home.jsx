import { Container } from 'react-bootstrap';
import PhotoSlideshow from "../components/PhotoSlideshow";


function Home() {
  return (
    <Container className="mt-5">
      <div className="text-center py-5">
        <h1 className="display-1 mb-4">MadTown Bhangra</h1>
        <h2 className="text-muted mb-4">Coming Soon</h2>
        <p className="lead">
          We're working on something amazing! Check back soon for updates.
        </p>
      </div>
      <div>
        <PhotoSlideshow
          images={[
            `${import.meta.env.BASE_URL}images/mtb_image1.jpg`,
            `${import.meta.env.BASE_URL}images/mtb_image2.jpg`,
            `${import.meta.env.BASE_URL}images/mtb_image3.jpg`,
            `${import.meta.env.BASE_URL}images/mtb_image4.jpg`,
          ]}
        />
      </div>
    </Container>
  );
}

export default Home;
