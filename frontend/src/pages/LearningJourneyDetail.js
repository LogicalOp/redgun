import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, Button } from '@ui5/webcomponents-react';

const LearningJourneyDetail = () => {
    const { id } = useParams();
    const [journey, setJourney] = useState([]);

    useEffect(() => {
        const fetchJourney = async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/learning_journeys/${id}`);
            const data = await response.json();
            setJourney(data.learningJourney);
        }
        fetchJourney();
    }, []);

    if (!journey) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '2rem', color: '#333', marginLeft: '3rem', marginRight: '3rem', maxWidth: '100%' }}>
            <div style={{ marginBottom: '1rem' }}>
                <a href="/" style={{ color: '#0070d2', textDecoration: 'none', marginRight: '0.5rem' }}>Home</a>
                / <a href="/learning" style={{ color: '#0070d2', textDecoration: 'none', marginLeft: '0.5rem', marginRight: '0.5rem' }}>Learning Journeys</a>
                / {journey.title}
            </div>
            <h1 style={{ marginBottom: '1rem' }}>{journey.title}</h1>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1 }}>
                    <img src={journey.imageUrl} alt={journey.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <Card>
                            <CardHeader titleText={`${journey.units} Unit`} />
                        </Card>
                        <Card>
                            <CardHeader titleText={journey.duration} />
                        </Card>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Card>
                                <CardHeader titleText={journey.cost} />
                            </Card>
                            <Button design="Emphasized" style={{ marginLeft: '1rem' }}>Start learning</Button>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                        <Card>
                            <CardHeader titleText="Overview" />
                            <div style={{ padding: '1rem' }}>
                                <p>{journey.overview}</p>
                            </div>
                        </Card>
                        <Card>
                            <CardHeader titleText="Learning objectives" />
                            <div style={{ padding: '1rem' }}>
                                <p>{journey.objectives}</p>
                            </div>
                        </Card>
                        <Card>
                            <CardHeader titleText="Level of Experience" />
                            <div style={{ padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ flex: 1, backgroundColor: '#e0e0e0', borderRadius: '8px', overflow: 'hidden', border: '1px solid #0070d2' }}>
                                        <div style={{ width: `${journey.progress}%`, backgroundColor: '#0070d2', padding: '0.5rem 0', textAlign: 'center', color: 'white' }}>
                                            {journey.experience}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <CardHeader titleText="Roles" />
                            <div style={{ padding: '1rem' }}>
                                <p>{journey.roles}</p>
                            </div>
                        </Card>
                        <Card style={{ gridColumn: 'span 2' }}>
                            <CardHeader titleText="Prerequisites" />
                            <div style={{ padding: '1rem' }}>
                                <p>{journey.prerequisites}</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningJourneyDetail;
