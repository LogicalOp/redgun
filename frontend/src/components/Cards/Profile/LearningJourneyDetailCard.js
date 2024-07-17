import React from 'react';
import { Card, CardHeader, Text } from "@ui5/webcomponents-react";

const LearningJourneyDetailCard = ({ title, children }) => {
    return (
        <Card
            header={
                <CardHeader 
                    titleText={title}
                />
            }
            style={{ marginBottom: '1rem' }}
        >
            <div style={{ padding: '1rem' }}>
                {children}
            </div>
        </Card>
    );
};

export default LearningJourneyDetailCard;
