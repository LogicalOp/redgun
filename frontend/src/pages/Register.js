import React from 'react';
import { isAuthenticated } from '../utils/auth';

const Register = () => {
    if(!isAuthenticated()) {
        window.location.href = '/login';
    }
    return (
        <div>
            <h1>Register</h1>
        </div>
    );
};

export default Register;
