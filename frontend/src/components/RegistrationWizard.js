import React, { useState, useEffect } from 'react';
import { Button, Card, CardHeader, Input } from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router-dom';

const RegistrationWizard = () => {
  const [inumber, setINumber] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [teamId, setTeamId] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const testFetch = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
      } catch (error) {
        console.error('Error during test fetch:', error);
      }
    };

    testFetch();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      inumber: inumber,
      password: password,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      team_id: teamId,
      exp: 0
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      navigate('/login');
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Card style={{ padding: '1.5vh', height: '60vh', width: '25vw', margin: 'auto' }} header={<CardHeader titleText="Registration" />}>
        <Input
          placeholder="inumber"
          onChange={(e) => setINumber(e.target.value)}
          value={inumber}
          style={{ marginTop: '4vh', marginBottom: '2vh' }}
        />
        <br />
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          style={{ marginBottom: '2vh' }}
        />
        <br />
        <Input
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          style={{ marginBottom: '2vh' }}
        />
        <br />
        <Input
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          style={{ marginBottom: '2vh' }}
        />
        <br />
        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={{ marginBottom: '2vh' }}
        />
        <br />
        <Input
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          style={{ marginBottom: '2vh' }}
        />
        <br />
        <Input
          placeholder="Team ID"
          onChange={(e) => setTeamId(e.target.value)}
          value={teamId}
          style={{ marginBottom: '2vh' }}
        />
        <br />
        <Button design="Positive" onClick={handleSubmit}>Register</Button>
      </Card>
    </div>
  );
};

export default RegistrationWizard;