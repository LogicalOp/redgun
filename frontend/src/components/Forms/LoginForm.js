import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, MessageStrip, Card, CardHeader, CheckBox } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const validateInput = () => {
        if (!username || !password) {
            setErrorMessage('Username and password are required.');
            return false;
        }
    
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
            setErrorMessage('Please enter a valid email address.');
            return false;
        }
    
        // Password length validation
        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return false;
        }
    
        return true;
    };

    const handleLogin = async () => {
        if (!validateInput()) return; // Stop the login process if validation fails

        const response = await fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            // handle successful login
            console.log("Login successful");
            navigate('/');
        } else {
            setErrorMessage(data.message);
        }
    }
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <Card header={<CardHeader titleText="Login"/>}
                style={{ height: '35vh', width: '25vw', padding: '16px' }}>
                {errorMessage && (
                    <MessageStrip design="Negative" onClose={() => setErrorMessage('')}>
                        {errorMessage}
                    </MessageStrip>
                )}
                <Input
                    placeholder="Username"
                    icon="employee"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    style={{ marginTop: '6vh', marginBottom: '2vh' }}
                />
                <br />
                <Input
                    placeholder="Password"
                    type="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    style={{ marginBottom: '2vh' }}
                />
                <br />
                <CheckBox
                    onChange={function _a(){}}
                    text="Remember Me"
                    valueState="None"
                />
                <br/>
                <Link to="/forgot-password" style={{ marginBottom: '2vh', display: 'block' }}>
                    Forgot Password?
                </Link>
                <Button design="Positive" onClick={handleLogin}>Login</Button>
            </Card>
        </div>
    );
};

export default LoginForm;
