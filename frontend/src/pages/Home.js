import React from 'react';
import Timeline from '../components/WeeklyTimeline';
import HomeCard from '../components/Cards/HomeCard';
import Feed from '../components/Feed';

const Home = () => {
    const data = {
        name: 'John Doe',
        team: 'HANA',
        content: 'Lorem Ipsum'
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: '10vw', paddingLeft: '12vw' }}>
                <HomeCard data={data} />
                <HomeCard data={data} />
                <HomeCard data={data} />
            </div>
            <Timeline />
            
            <Feed />
        </div>
    );
};

export default Home;