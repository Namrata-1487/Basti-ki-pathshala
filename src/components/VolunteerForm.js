import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Form submitted successfully');
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          interest: '',
          message: '',
        });
      } else {
        alert('Submission failed: ' + data.message);
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };


  return (
    <Container fluid className="py-5 volunteer-form bg-dark text-white align-items-center">
      <h2 className="text-center mb-4">Become a Volunteer</h2>

      {submitted && <Alert variant="success">Thank you for volunteering! We'll get in touch soon.</Alert>}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Area of Interest</Form.Label>
              <Form.Control
                type="text"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                placeholder="Teaching, Admin, Fundraising, etc."
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>Why do you want to volunteer?</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your motivation"
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit Form
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default VolunteerForm;
