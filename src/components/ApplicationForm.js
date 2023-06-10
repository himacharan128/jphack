import React from "react";
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    education: '',
    aboutYou: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
    <div className="my-div pt-4 pb-4 pr-3 pl-3">
      <h1 className="text-center">APPLICATION FORM</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Check
            type="radio"
            label="Male"
            name="gender"
            value="male"
            onChange={handleChange}
            required
          />
          <Form.Check
            type="radio"
            label="Female"
            name="gender"
            value="female"
            onChange={handleChange}
            required
          />
          <Form.Check
            type="radio"
            label="Other"
            name="gender"
            value="other"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="dateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="education">
          <Form.Label>Education</Form.Label>
          <Form.Control
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="aboutYou">
          <Form.Label>Tell us something about you</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="aboutYou"
            value={formData.aboutYou}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div class="text-center">
        <Button class="btn btn-primary" type="submit" >
          SUBMIT
        </Button>
        </div>
      </Form>
    </div>
    </Container>
  );



}
