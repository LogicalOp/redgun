import React, { useRef } from 'react';
import { Button, Label, Card, CardHeader, Form, FormItem, Input } from '@ui5/webcomponents-react';

const RegistrationWizard = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debug log
    const formData = new FormData(formRef.current);

    const payload = {
      inumber: "I45678",
      password: formData.get('password'),
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName'),
      email: formData.get('email'),
      phone: 12345670,
      team_id: "T001",
      exp: 5
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form data submitted:', data);
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Card style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }} header={<CardHeader titleText="Registration" />}>
      <div>
        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Form>
            <FormItem label="First Name">
              <Input id="firstName" name="firstName" required />
            </FormItem>
            <FormItem label="Last Name">
              <Input id="lastName" name="lastName" required />
            </FormItem>
            <FormItem label="Team">
              <Input id="team" name="team" required />
            </FormItem>
            <FormItem label="Manager">
              <Input id="manager" name="manager" required />
            </FormItem>
            <FormItem label="Email">
              <Input id="email" name="email" type="email" required />
            </FormItem>
            <FormItem label="Password">
              <Input id="password" name="password" type="password" required />
            </FormItem>
            <Button type="submit">Register</Button>
          </Form>
        </form>
      </div>
    </Card>
  );
};

export default RegistrationWizard;