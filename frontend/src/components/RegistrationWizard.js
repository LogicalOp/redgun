import React, { useState } from 'react';
import { Input, Button, Label, Card, CardHeader } from '@ui5/webcomponents-react';

const RegistrationWizard = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    team: '',
    manager: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <Card style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }} header={<CardHeader titleText="Registration" />}>
      
      <div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <Label for="firstName">First Name:</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onInput={handleChange}
              required
            />
          </div>
          <div>
            <Label for="lastName">Last Name:</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onInput={handleChange}
              required
            />
          </div>
          <div>
            <Label for="team">Team:</Label>
            <Input
              id="team"
              name="team"
              value={formData.team}
              onInput={handleChange}
              required
            />
          </div>
          <div>
            <Label for="manager">Manager:</Label>
            <Input
              id="manager"
              name="manager"
              value={formData.manager}
              onInput={handleChange}
              required
            />
          </div>
          <div>
            <Label for="email">Email:</Label>
            <Input
              id="email"
              name="email"
              type="Email"
              value={formData.email}
              onInput={handleChange}
              required
            />
          </div>
          <div>
            <Label for="password">Password:</Label>
            <Input
              id="password"
              name="password"
              type="Password"
              value={formData.password}
              onInput={handleChange}
              required
            />
          </div>
          <Button type="Submit">Register</Button>
        </form>
      </div>
    </Card>
  );
};

export default RegistrationWizard;