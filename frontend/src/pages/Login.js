import React, { useState, useEffect } from 'react';
import LoginForm from '../components/Forms/LoginForm';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isLoggedIn) {
            navigate(location.state?.from || '/');
        }
    }, [isLoggedIn, navigate, location.state]);

    const loginUser = async () => {
        const response = await fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'John Doe',
                password: 'password',
            }),
        });

        const data = await response.json();
        localStorage.setItem('token', data.token.token);

        if (response.ok) {
            setIsLoggedIn(true);
        }
    };

    const checkToken = async () => {
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:3001/check-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default Login;