import React from 'react';
import LoginForm from '../components/Forms/LoginForm';

const Login = () => {
    // Inline styles for centering the LoginForm
    const centerStyle = {
        display: 'flex', // Enable Flexbox
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '100vh', // Take full height of the viewport
        width: '100vw'
    };

    return (
        <div style={centerStyle}>
            <LoginForm/>
        </div>
    );
}

export default Login;