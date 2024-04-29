import React, { useState } from 'react';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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

    if (isLoggedIn) {
        return (
            <div>
                <h1>You are logged in</h1>
                <button onClick={checkToken}>Check Token</button>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Login</h1>
                <button onClick={loginUser}>Test Login</button>
            </div>
        );
    }
}

export default Login;