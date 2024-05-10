import React from 'react';
import { useNavigate } from 'react-router-dom';
import Results from '../components/Results';
import LearningList from '../components/LearningList';

const Learning = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Results />
            <LearningList />
        </div>
    );
};

export default Learning;