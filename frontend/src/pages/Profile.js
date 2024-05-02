import React from 'react';
import ProfileCard from '../components/Cards/Profile/ProfileCard';
import MentoringCard from '../components/Cards/Profile/MentoringCard';
import LearningCard from '../components/Cards/Profile/LearningCard';
import RatingCard from '../components/Cards/Profile/RatingCard';

const Profile = () => {
    const user = {
        name: 'John Doe',
        role: 'ABAP Developer',
        location: 'Waterside 3',
        department: 'CoE',
        mobile: '+353 87 123 4567',
        phone: '+353 1 123 4567',
        email: 'john.doe@test.com'
    };

    const manager = {
        name: 'Jane Doe',
        phone: '+353 87 765 4321',
        email: 'jane.doe@test.com'
    };

    const menteeData = [
        { name: 'John Doe', info: ['Helpful', 'Responsive', 'Knowledgeable'], rating: 4 },
        { name: 'Jane Doe', info: ['Informative', 'Friendly', 'Professional'], rating: 5 },
        { info: ['Fast Replies', 'Efficient', 'Patient'], rating: 3 }, // Anon mentee
    ];
    
    const learningData = {
        courses: ['ABAP Cloud Developer', 'CAP for NodeJS'], 
        progress: 50
    };

    const mentoringData = {
        people: ["Jane Doe", "John Doe", "John Smith"],
        totalHelped: 10,
    };

    return (
        <div style={{ marginLeft: '100px' }}>
            <ProfileCard user={user} manager={manager} />
            <LearningCard data={learningData} />
            <MentoringCard data={mentoringData} />
            <RatingCard data={menteeData} />
        </div>
    );
}

export default Profile;