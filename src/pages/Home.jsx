import { Container, Carousel } from 'react-bootstrap';

import PhotoSlideshow from "../components/PhotoSlideshow";
import TestimonialCard from '../components/TestimonialCard';

function Home() {
  const testimonials = [
    {
      id: 1,
      quote: "MadTown Bhangra was an incredible experience! The energy from the crowd and the competition was unmatched. Can't wait to come back next year!",
      name: "Priya Sharma",
      team: "Boiler Bhangra",
      year: "2024 Competitor"
    },
    {
      id: 2,
      quote: "This competition pushed us to be our best. The organization was flawless and the atmosphere was electric. Truly an unforgettable weekend!",
      name: "Arjun Patel",
      team: "Spartan Bhangra",
      year: "2025 Competitor"
    },
    {
      id: 3,
      quote: "From the judges to the venue to the other teams, everything about MadTown Bhangra was top-tier. This is the competition that sets the standard!",
      name: "Simran Kaur",
      team: "Classic City Bhangra",
      year: "2024 Competitor"
    },
    {
      id: 4,
      quote: "The community vibe at MadTown Bhangra is what makes it special. You compete hard but also celebrate each other. That's what bhangra is all about!",
      name: "Rohan Singh",
      team: "Illini Bhangra",
      year: "2023 Competitor"
    },
    {
      id: 5,
      quote: "MadTown Bhangra brings together the best teams in the Midwest. The competition is fierce, but the memories and friendships last forever!",
      name: "Neha Chopra",
      team: "Vakhri Taur Diyan",
      year: "2022 Competitor"
    }
  ];

  return (
    <Container className="mt-5">
      <div className="text-center py-5">
        <h1 className="display-1 mb-4">MadTown Bhangra</h1>
        <p className="lead mt-4">
          MadTown Bhangra is where talent meets adrenaline. We bring top collegiate bhangra
          teams to Madison for an unforgettable weekend packed with explosive dance performances,
          fierce competition, and the unstoppable spirit of bhangra. From intricate sets to
          electric presence, this competition is all about passion, precision, and community.
          <br>
          </br>
          <br></br>
          Bhangra is a lively folk dance and music genre that originated in the Punjab region of India and Pakistan, traditionally performed during harvest celebrations. It features energetic movements, dhol drumming, and has evolved into a popular global dance style that blends traditional elements with modern music genres.
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

      <div className="my-5 py-5">
        <h2 className="text-center display-5 fw-bold mb-5">What Competitors Say</h2>
        <Carousel
          interval={5000}
          indicators={true}
          controls={true}
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon"
              style={{
                filter: 'invert(1)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '50%',
                padding: '20px'
              }}
            />
          }
          nextIcon={
            <span
              aria-hidden="true"
              className="carousel-control-next-icon"
              style={{
                filter: 'invert(1)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '50%',
                padding: '20px'
              }}
            />
          }
        >
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <div className="d-flex justify-content-center px-5">
                <div style={{ maxWidth: '800px', width: '100%' }}>
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    team={testimonial.team}
                    year={testimonial.year}
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
</Container>
  );
}

export default Home;
