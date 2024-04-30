import React from 'react';
import LearningCard from '../components/Cards/LearningCard';
import MentoringCard from '../components/Cards/MentoringCard';
import RatingCard from '../components/Cards/RatingCard';

const Test = () => {
    const menteeData = [
        { name: 'John Doe', info: ['Helpful', 'Responsive', 'Knowledgeable'], rating: 4 },
        { name: 'Jane Doe', info: ['Informative', 'Friendly', 'Professional'], rating: 5 },
        { info: ['Fast Replies', 'Efficient', 'Patient'], rating: 3 }, // Anon mentee
    ];

    return (
        <div>
            <LearningCard data={{ name: 'John Doe', team: 'HANA', content: 'Lorem Ipsum' }} />
            <MentoringCard data={{ name: 'John Doe', team: 'HANA', content: 'Lorem Ipsum' }} />
            <br />
            <RatingCard data={menteeData} />
        </div>
    );
}

export default Test;