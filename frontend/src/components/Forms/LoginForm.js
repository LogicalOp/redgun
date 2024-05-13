import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Icon, MessageStrip, CheckBox} from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (username, password) => {
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                {errorMessage && (
                    <MessageStrip design="Negative" icon="message-error" onClose={() => setErrorMessage('')}>
                        {errorMessage}
                    </MessageStrip>
                )}
                <Input
                    icon={<Icon name="employee" />}
                    onChange={(e) => setUsername(e.target.value)}
                    showClearIcon
                    type="Email"
                    valueState="None"
                />
                <br />
                <Input
                    icon={<Icon name="employee" />}
                    onChange={(e) => setPassword(e.target.value)}
                    showClearIcon
                    type="Password"
                    valueState="None"
                />
                <br />
                <Button design="Positive" icon="" onClick={() => handleLogin(username, password)}> Login </Button>

                <CheckBox onChange={function _a(){}} text="Keep me signed in" valueState="None" wrappingType="Normal" />
            </div>
        </div>
    );
};

export default LoginForm;