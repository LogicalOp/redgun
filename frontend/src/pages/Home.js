import React from 'react';
import Timeline from '../components/WeeklyTimeline';
import HomeCard from '../components/Cards/HomeCard';

const Home = () => {
    const data = {
        name: 'John Doe',
        team: 'HANA',
        content: 'Lorem Ipsum'
    };

    return (
        <div>
            <HomeCard data={data} /> <HomeCard data={data} />
            <Timeline />
        </div>
    );
};

export default Home;