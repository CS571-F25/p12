import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

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
    console.log('Form submitted:', formData);

    // Show success popup
    alert('✓ Successfully Submitted!\n\nThank you for your registration. We will reach out to you soon with more information about your application.');

    // Clear the form
    setFormData({
      teamName: '',
      university: '',
      otherUniversity: '',
      teamMembers: '',
      reason: ''
    });
  };

  return (
    <Container className="mt-4">
      <div className="text-center mb-4">
        <h1>Join MadTown Bhangra</h1>
        <p className="lead">
          Register your team to compete and showcase your bhangra skills!
          Fill out the form below to get started.
        </p>
      </div>

      <Row className="justify-content-center">
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
                  <option key={index} value={school}>
                    {school}
                  </option>
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
                placeholder="Tell us about your team's passion for bhangra and why you'd like to participate..."
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg">
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
