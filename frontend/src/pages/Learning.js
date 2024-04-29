import React from 'react';
import { isAuthenticated } from '../utils/auth';

const Learning = () => {
    if(!isAuthenticated()) {
        window.location.href = '/login';
    }
    return (
        <div>
            <h1>Learning</h1>
        </div>
    );
};

export default Learning;