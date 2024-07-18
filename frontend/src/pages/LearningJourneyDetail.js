import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, Button } from '@ui5/webcomponents-react';

const LearningJourneyDetail = () => {
    const { id } = useParams();
    const [journey, setJourney] = useState(null);

    // Hardcoded data for demonstration
    const journeyDetails = {
        1: {
            title: "Discovering the Value of SAP S/4HANA for Central Finance",
            overview: "As a business user in a large company with a heterogeneous system landscape, you will understand how the SAP S/4HANA for central finance deployment option aligns with the vision of your organization when building up a single source of truth for all financial information. Real use cases and participation in project experience will help you make the right decision and lay a solid foundation for future transitions to S/4HANA.",
            objectives: "After completing this learning journey, you will be familiar with the concept and business benefits of the SAP S/4HANA for central finance deployment option. You will achieve a basic understanding of the implementation strategy and the necessary organizational changes that need to be managed.",
            experience: "Beginner",
            roles: "Consultant, Business User",
            prerequisites: "None",
            units: 1,
            duration: "2 hrs 20 mins",
            cost: "Free",
            imageUrl: 'https://via.placeholder.com/800x450', // Example image URL
            progress: 30 // Example progress percentage
        },
        2: {
            title: "Learning Journey 2",
            overview: "Overview of learning journey 2...",
            objectives: "Objectives of learning journey 2...",
            experience: "Intermediate",
            roles: "Role 2",
            prerequisites: "Prerequisite 2",
            units: 2,
            duration: "3 hrs 15 mins",
            cost: "Free",
            imageUrl: 'https://via.placeholder.com/800x450',
            progress: 60
        },
        3: {
            title: "Learning Journey 3",
            overview: "Overview of learning journey 3...",
            objectives: "Objectives of learning journey 3...",
            experience: "Advanced",
            roles: "Role 3",
            prerequisites: "Prerequisite 3",
            units: 3,
            duration: "4 hrs 45 mins",
            cost: "Free",
            imageUrl: 'https://via.placeholder.com/800x450',
            progress: 90
        }
    };

    useEffect(() => {
        // Simulate fetching data from an API
        setJourney(journeyDetails[id]);
    }, [id]);

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
