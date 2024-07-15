import React from 'react';
import { Card, CardHeader, Title, ProgressIndicator, Icon } from "@ui5/webcomponents-react";

const LearningCard = ({ data }) => {
    return (
        <Card
            header={
                <CardHeader 
                    avatar={<Icon name="learning-assistant" />}
                    titleText="My Learning Journeys"
                />
            }
        >
            <div >
                {data && data.courses && data.courses.map((course, index) => (
                    <p key={index}>{course}</p>
                ))}
            </div>
        </Card>
    );
};

export default LearningCard;