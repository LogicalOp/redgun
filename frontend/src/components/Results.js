import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, Button, Icon } from '@ui5/webcomponents-react';

const Results = () => {
    const [journeys, setJourneys] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJourneys = async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/learning_journeys`);
            const data = await response.json();
            setJourneys(data.learningJourneys);
        }
        fetchJourneys();
    }, []);
    
    const handlePreviewClick = (id) => {
        navigate(`/journey/${id}`);
    };

    return (
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '2vw', 
            paddingLeft: '2.5vw', 
            marginTop: '8vh', 
            width: '65vw'
        }}>
            {journeys.map((journey, index) => (
                <Card key={index} style={{ width: '12vw', height: "31vh", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <CardHeader
                            avatar={<Icon name="person-placeholder" />}
                            titleText={journey.title}
                            subtitleText={journey.experience}
                        />
                    </div>
                    <Button 
                        design="Emphasized"
                        onClick={() => handlePreviewClick(journey.journey_id)}
                    >
                        Preview
                    </Button>
                </Card>
            ))}
        </div>
    );
}
    export default Results;