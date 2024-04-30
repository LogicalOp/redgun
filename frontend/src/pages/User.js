import React from 'react';
import ProfileCard from '../components/Cards/ProfileCard';
import MentoringCard from '../components/Cards/MentoringCard';
import LearningCard from '../components/Cards/LearningCard';
import RatingCard from '../components/Cards/RatingCard';

const User = ({ user }) => {
    return (
        <div>
            <ProfileCard user={user} manager={user.manager} />
            <MentoringCard data={user.mentoringData} />
            <LearningCard data={user.learningData} />
            <RatingCard data={user.menteeData} />
        </div>
    );
}

export default User;