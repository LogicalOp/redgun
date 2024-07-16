import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, MessageStrip, Card, CardHeader, CheckBox } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [inumber, setINumber] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const url = process.env.REACT_APP_BACKEND_URL;

    const validateInput = () => {
        if (!inumber || !password) {
            setErrorMessage('Username and password are required.');
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

        const response = await fetch(`${url}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inumber, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Log the token and inumber
            console.log("Login successful. Token:", data.token, "Inumber:", inumber);
        
            // Store the token and inumber in local storage
            localStorage.setItem('jwtToken', data.token);
            localStorage.setItem('inumber', inumber);
        
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
                    placeholder="INumber"
                    icon="employee"
                    onChange={(e) => setINumber(e.target.value)}
                    value={inumber}
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
