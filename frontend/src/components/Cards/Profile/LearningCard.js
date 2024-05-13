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
            style={{
                width: "15vw",
                height: "31vh",
                paddingTop: '10px',
            }}
        >
            <div style={{ padding: '0 20px' }}>
                {data && data.courses && data.courses.map((course, index) => (
                    <p key={index}>{course}</p>
                ))}
                <br /><br />
                <Title level="H5">Progress</Title>
                <ProgressIndicator
                    value={data && data.progress}
                    valueState="Success"
                />
            </div>
        </Card>
    );
};

export default LearningCard;