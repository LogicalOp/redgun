import React from 'react';
import Feed from '../components/Feed';

const Home = () => {
    const data = {
        name: 'John Doe',
        team: 'HANA',
        content: 'Lorem Ipsum'
    };

    return (
        <>            
            <Feed />
        </>
    );
};

export default Home;