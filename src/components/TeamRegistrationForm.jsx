import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function TeamRegistrationForm() {
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

  return (
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
  );
}

export default TeamRegistrationForm;
