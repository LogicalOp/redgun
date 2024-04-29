import React from 'react';
import { isAuthenticated } from '../utils/auth';

// "Boilerplate" Course page, swap contents based on selected course

const Course = () => {
    if(!isAuthenticated()) {
        window.location.href = '/login';
    }
    return (
        <div>
            <h1>Course</h1>
        </div>
    );
};

export default Course;