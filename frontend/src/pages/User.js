import React from 'react';
import ProfileCard from '../components/Cards/Profile/ProfileCard';
import MentoringCard from '../components/Cards/Profile/MentoringCard';
import LearningCard from '../components/Cards/Profile/LearningCard';
import RatingCard from '../components/Cards/Profile/RatingCard';

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