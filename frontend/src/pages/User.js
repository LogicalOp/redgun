import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from '../components/Cards/Profile/ProfileCard';
import LearningCard from '../components/Cards/Profile/LearningCard';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        // Replace fetch call with a function that returns test data
        const getUser = () => {
            return {
                id: 1,
                name: 'Annie',
                role: 'Software Engineer',
                email: 'john.doe@test.com',
                phone: '+353 87 123 4567',
                manager: {
                    name: 'Jane Doe',
                    phone: '+353 87 765 4321',
                    email: 'jane.doe@test.com'
                },
                mentoringData: {
                    people: ["Jane Doe", "John Smith", "Jane Smith"],
                    totalHelped: 10,
                },
                learningData: {
                    courses: ['ABAP Cloud Developer', 'CAP for NodeJS'], 
                    progress: 50
                },
                menteeData: [
                    { name: 'John Smith', info: ['Helpful', 'Responsive', 'Knowledgeable'], rating: 4 },
                    { name: 'Jane Smith', info: ['Informative', 'Friendly', 'Professional'], rating: 5 },
                    { info: ['Fast Replies', 'Efficient', 'Patient'], rating: 3 }, // Anon mentee
                ],
            };
        }

        setUser(getUser());
    }, [id]);
    
    return (
        <div>
            {user && user.manager ? (
                <>
                    <ProfileCard user={user} manager={user.manager} />
                    
                    <LearningCard data={user.learningData} />
                    
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default User;