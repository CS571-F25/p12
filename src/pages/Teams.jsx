import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import TeamCard from "../components/TeamCard";
import EventScheduleCard from "../components/EventScheduleCard";
import HotelCard from "../components/HotelCard";

function Teams() {
  const [formData, setFormData] = useState({
    teamName: '',
    university: '',
    otherUniversity: '',
    teamMembers: '',
    reason: ''
  });

  const big10Schools = [
    'University of Illinois',
    'Indiana University',
    'University of Iowa',
    'University of Maryland',
    'University of Michigan',
    'Michigan State University',
    'University of Minnesota',
    'University of Nebraska',
    'Northwestern University',
    'Ohio State University',
    'University of Oregon',
    'Penn State University',
    'Purdue University',
    'Rutgers University',
    'UCLA',
    'USC',
    'University of Washington',
    'University of Wisconsin-Madison',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✓ Successfully Submitted!\n\nThank you for your registration. We will reach out to you soon with more information.');

    setFormData({
      teamName: '',
      university: '',
      otherUniversity: '',
      teamMembers: '',
      reason: ''
    });
  };

  // Team Data
  const teams = [
    { name: "Cardinal Bhangra", img: `${import.meta.env.BASE_URL}images/Cardinal.jpg` },
    { name: "Classic City Bhangra", img: `${import.meta.env.BASE_URL}images/Classic.jpg` },
    { name: "Vakhri Taur Diyan", img: `${import.meta.env.BASE_URL}images/Vakhri.jpg` },
    { name: "Illini Bhangra", img: `${import.meta.env.BASE_URL}images/Illini.jpg` },
    { name: "Columbia Bhangra", img: `${import.meta.env.BASE_URL}images/Columbia.jpg` },
    { name: "Spartan Bhangra", img: `${import.meta.env.BASE_URL}images/Spartan.jpg` },
    { name: "Boiler Bhangra", img: `${import.meta.env.BASE_URL}images/Boiler.jpg` },
    { name: "Gator Bhangra", img: `${import.meta.env.BASE_URL}images/Gator.jpg` }
  ];

  return (
    <Container className="mt-4 teams-page" style={{ '--bs-btn-bg': '#6a0dad' }}>

      {/* Team Showcase */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Competing Teams</h1>
        <p className="text-center mb-4">
          Below are all the incredible teams competing this year.
          Use this section to get familiar with who you’ll be sharing the stage with!
        </p>

        <Button
          style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad' }}
          className="mt-3"
          onClick={() => {
            document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Application Form ↓
        </Button>
      </div>

      {/* Team Grid */}
      <Row className="g-5 justify-content-center mb-5 px-3">
        {teams.map(team => (
          <Col key={team.name} xs={12} sm={6} md={4} lg={3}>
            <TeamCard
              teamName={team.name}
              img={team.img}
              alt={`${team.name} team logo`}
            />
          </Col>
        ))}
      </Row>

      {/* Competition Weekend Title */}
      <h2 className="text-center my-5 fw-bold" style={{ fontSize: "2.2rem" }}>
        Competition Weekend Information
      </h2>

      <p className="text-center mt-4 mb-3">
        This schedule outlines everything your team needs to know for competition day—
        arrival times, warm-ups, staging, and performance flow.
      </p>

      {/* Schedule */}
      <div className="my-5">
        <EventScheduleCard />
      </div>

      <p className="text-center mt-5 mb-3">
        Here is your home base for the weekend.
        Use this section to quickly access hotel details and the booking website.
      </p>

      {/* Hotel Card (centered) */}
      <div className="d-flex justify-content-center my-5">
        <HotelCard />
      </div>

      {/* Form Section */}
      <div className="text-center mb-4">
        <h1>Join MadTown Bhangra</h1>
        <p className="lead">
          Register your team to compete and showcase your bhangra skills!
          Fill out the form below to get started.
        </p>
      </div>

      <Row className="justify-content-center mb-5" id="application-form">
        <Col md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="teamName">
              <Form.Label>Team Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your team name"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="university">
              <Form.Label>University</Form.Label>
              <Form.Select
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
              >
                <option value="">Select your university</option>
                {big10Schools.map((school, index) => (
                  <option key={index} value={school}>{school}</option>
                ))}
              </Form.Select>
            </Form.Group>

            {formData.university === 'Other' && (
              <Form.Group className="mb-3" controlId="otherUniversity">
                <Form.Label>Please specify your university</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your university name"
                  name="otherUniversity"
                  value={formData.otherUniversity}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="teamMembers">
              <Form.Label>Number of Team Members</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number of team members"
                name="teamMembers"
                value={formData.teamMembers}
                onChange={handleChange}
                min="1"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="reason">
              <Form.Label>Why do you want to join MadTown Bhangra?</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Tell us about your team's passion..."
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button
                type="submit"
                size="lg"
                style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad' }}
              >
                Submit Registration
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Teams;
