import React from 'react';
import LoginForm from '../components/Forms/LoginForm';

const Login = () => {
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
    };

    return (
        <div style={centerStyle}>
            <LoginForm />
        </div>
    );
}

export default Login;