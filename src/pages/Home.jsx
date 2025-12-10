import { Container } from 'react-bootstrap';

import PhotoSlideshow from "../components/PhotoSlideshow";
import CountdownTimer from '../components/CountdownTimer';

function Home() {
  return (
    <Container className="mt-5">
      <div className="text-center py-5">
        <h1 className="display-1 mb-4">MadTown Bhangra</h1>
        <CountdownTimer targetDate="2026-03-07T00:00:00" />
        <p className="lead mt-4">
          MadTown Bhangra is where talent meets adrenaline. We bring top collegiate bhangra 
          teams to Madison for an unforgettable weekend packed with explosive dance performances,
          fierce competition, and the unstoppable spirit of bhangra. From intricate sets to 
          electric presence, this competition is all about passion, precision, and community.
         
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
