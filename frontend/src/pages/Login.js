import React, { useState, useEffect } from 'react';
import LoginForm from '../components/Forms/LoginForm';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default Login;