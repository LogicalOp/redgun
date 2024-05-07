import React, { useState } from 'react';
import { Input, Button, Icon, MessageStrip, CheckBox} from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (email.trim() === '') {
            setErrorMessage('Email field is required');
            return;
        }
    
        if (password.trim() === '') {
            setErrorMessage('Password field is required');
            return;
        }
    
        console.log(`Email: ${email}, Password: ${password}`);
        setErrorMessage(''); 
    };
    
    return (
        <div>
            {errorMessage && (
                <MessageStrip design="Negative" icon="message-error" onClose={() => setErrorMessage('')}>
                {errorMessage}
            </MessageStrip>
            )}
            <Input
                icon={<Icon name="employee" />}
                onChange={(e) => setEmail(e.target.value)}
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
            <Button design="Positive" icon="" onClick={handleLogin}> Login </Button>

            <CheckBox onChange={function _a(){}} text="Keep me signed in" valueState="None" wrappingType="Normal" />
        </div>
    );
};

export default LoginForm;