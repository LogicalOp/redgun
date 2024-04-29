import React from 'react';
import { isAuthenticated } from '../utils/auth';

const Home = () => {
    if(!isAuthenticated()) {
        window.location.href = '/login';
    }
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;